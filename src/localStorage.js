const KEY = "todo-list";

export function getTodoList() {
  return new Promise((resolve) => {
    const rawData = localStorage.getItem(KEY);
    const data = JSON.parse(rawData);

    if (data) resolve(data);
  });
}

export function setTodoList(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}
