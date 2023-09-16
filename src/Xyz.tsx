const obj = {
  name: "mairaj",
  age: 23
};

type Person = keyof typeof obj;

const Xyz = () => {
  const val = "abc";
  return val;
};

type Return = Awaited<ReturnType<typeof Xyz>>;

interface MainType {
  name: string;
  age: number;
}

type NestedType = MainType & {
  isDeveloper: boolean;
};

type Prettify<T> = {
  [K in keyof T]: T[K];
};

type PrettifyType = Prettify<NestedType>;

interface Todo {
  title: string;
  description: string;
}

const updateTodoFun = (todo: Todo, updateTodoFileds: Partial<Todo>) => {
  return { ...todo, updateTodoFileds };
};

const initialTodo: Todo = {
  title: "clean the room",
  description: "Something else"
};

const updateTodo = updateTodoFun(initialTodo, { title: "clean the dishes" });

type Omitted = Omit<Todo, "description">;

type Shapes =
  | {
      kind: "circle";
      radius: number;
    }
  | {
      kind: "square";
      x: number;
    };

type OmittedType = Exclude<Shapes, { kind: "square" }>;

export default Xyz;
