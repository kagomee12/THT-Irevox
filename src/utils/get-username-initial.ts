export const getUsernameInitial = (username: string) => {
  return username
    .split(" ")
    .map((name) => name[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
};
