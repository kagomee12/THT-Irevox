import db from "../libs/db";

export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        username: true,
        tasks: true,
      },
    });
    return users;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const user = await db.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        tasks: true,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
        tasks: true,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id: number, data: any) => {
  try {
    const updateduser = await db.user.update({
      data: data,
      where: {
        id: id
      }
    })
    return updateduser
  } catch (error) {
    
  }
}
