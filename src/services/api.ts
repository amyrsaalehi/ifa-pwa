import type { Todo } from "@/types/todo";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchItems = async () => {
  const response = await fetch(`${BASE_URL}/todos`);
  const data = await response.json();
  return data.reverse();
};

export const addItem = async (todo: Todo) => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const removeItem = async (id: number) => {
  await fetch(`${BASE_URL}/todos/${id}`, { method: "DELETE" });
};
