const obj = {
  name: "mairaj",
  age: 23
};

type Person = keyof typeof obj;

const Abc = () => {
  const val = "string";

  // type Return = typeof val;
  return val;
};

type Return = Awaited<ReturnType<typeof Abc>>;

interface MainType {
  name: string;
  age: number;
}

type NestedType = MainType & {
  isDeveloper: boolean;
};

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type PrettifyType = Prettify<NestedType>;

interface Todo {
  title: string;
  description: string;
  createdAt: Date;
}

// const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
//   return { ...todo, fieldsToUpdate };
// };

// const initialTodo: Todo = {
//   title: "clean the dishes",
//   description: "RIGHT NOW THEY ARE SMILY"
// };

// const upptTodo = updateTodo(initialTodo, { title: "clean the rooms" });
// console.log("upptTodo", upptTodo);

// type Omitted = Omit<Todo, "title">;

type Shapes =
  | {
      kind: "circle";
      radius: number;
    }
  | {
      kind: "square";
      x: number;
    };

type Omitted = Exclude<Shapes, { kind: "circle" }>;

export default Abc;
