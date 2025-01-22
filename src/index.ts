export type User = {
  name: string;
  age: number;
};

export const add = (a: number, b: number): number => {
  console.log("Hello");
  return a + b;
};

export const greet = (user: User): string => {
  return `Hello ${user.name}`;
};
