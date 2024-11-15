import db from "../libs/db";

export const getAllTasks = async () => {
  try {
    const tasks = await db.task.findMany();
    return tasks;
  } catch (error) {
    throw error;
  }
};

export const getAllTasksbyUserId = async (userId: number) => {
  try {
    const tasks = await db.task.findMany({
      where: {
        userId: userId,
      },
    });
    return tasks;
  } catch (error) {
    throw error;
  }
};

export const getTaskById = async (id: number) => {
  try {
    const task = await db.task.findUnique({
      where: {
        id,
      },
    });
    return task;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (title: string, userId: number) => {
  try {
    const newTask = await db.task.create({
      data: {
        title,
        userId,
      },
    });
    return newTask;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id: number) => {
  try {
    const deletedTask = await db.task.delete({
      where: {
        id,
      },
    });
    return deletedTask;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (id: number, data: any) => {
  try {
    // const findTask = await db.task.findFirst({
    //   where: {
    //     id,
    //   },
    // });

    // if (findTask?.completed === data) {
    //   return await db.task.update({
    //     data: {
    //       completed: !data,
    //     },
    //     where: {
    //       id,
    //     },
    //   });
    // }

    const updatedTask = await db.task.update({
      data: data,
      where: {
        id,
      },
    });
    return updatedTask;
  } catch (error) {
    throw error;
  }
};
