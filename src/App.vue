<template>
  <div class="container" ref="main">
    <header class="header">
      <h1 class="title">ToDo )))</h1>
    </header>
    <section class="create">
      <input
        type="text"
        class="create__input"
        v-model="todoInput"
        @keydown.enter="add"
      />
      <button class="btn" @click="add">Добавить</button>
    </section>
    <section class="control" v-if="todoList.length">
      <button class="control__item" @click="selectAll">
        Выделить все
        <img src="./assets/selectAll.png" alt="" width="25" height="25" />
      </button>
      <template v-if="selectedList.length">
        <button class="control__item" @click="removeAll">
          Удалить выбранные
          <img src="./assets/deleteAll.png" alt="" width="25" height="25" />
        </button>
        <button class="control__item" @click="completeAll">
          Выполнить выбранные
          <img src="./assets/completeAll.png" alt="" width="25" height="25" />
        </button>
      </template>
    </section>
    <section class="todo-wrapper">
      <section class="empty" v-if="!todoList.length">
        Список заданий пуст...
      </section>
      <ul class="todo-list">
        <li
          class="todo-item"
          v-for="(item, idx) in paginatedList"
          :key="idx"
          :class="{
            completed: item.completed,
            deleted: item.deleted,
            selected: item.selected,
          }"
        >
          <input type="checkbox" class="item-select" v-model="item.selected" />
          <span class="item-text" v-text="item.text"></span>
          <div class="item-btn-wrapper">
            <button
              class="item-btn item-btn--c"
              @click="complete(item)"
              v-if="!item.completed"
            >
              <img src="./assets/complete.png" width="25" height="25" />
            </button>
            <button class="item-btn item-btn--d" @click="remove(item)">
              <img src="./assets/delete.png" width="25" height="25" />
            </button>
          </div>
        </li>
      </ul>
    </section>
    <section class="pagination" v-if="maxPage > 1">
      <button
        class="pag-btn"
        :disabled="currentPage == 1"
        @click="currentPage -= 1"
      >
        <img src="./assets/back.png" width="35" height="35" />
      </button>
      <div class="pag-text">
        <span class="current">{{ currentPage }}</span>
        <span> из </span>
        <span class="max">{{ maxPage }}</span>
      </div>
      <button
        class="pag-btn"
        :disabled="currentPage == maxPage"
        @click="currentPage += 1"
      >
        <img src="./assets/forward.png" width="35" height="35" />
      </button>
    </section>
  </div>
</template>

<style src="./css/style.scss" lang="scss" scoped></style>

<script>
import { getTodoList, setTodoList } from "./localStorage";

export default {
  data() {
    return {
      todoList: [],
      todoInput: "",
      currentPage: 1,
    };
  },

  created() {
    getTodoList().then((list) => {
      if (list) this.todoList = list;

      for (let item of this.todoList) {
        item.selected = false;
      }
    });
  },

  watch: {
    currentPage() {
      if (this.currentPage < 1) this.currentPage = 1;
      if (this.currentPage > this.maxPage) this.currentPage = this.maxPage;
    },
    todoList() {
      if (this.currentPage > this.maxPage) this.currentPage = this.maxPage;

      setTodoList(this.todoList);
    },
  },

  computed: {
    startIndex() {
      return (this.currentPage - 1) * 5;
    },
    endIndex() {
      return this.currentPage * 5 - 1;
    },
    paginatedList() {
      return this.todoList.slice(this.startIndex, this.endIndex + 1);
    },
    selectedList() {
      return this.todoList.filter((el) => el.selected);
    },
    maxPage() {
      return this.todoList.length ? Math.ceil(this.todoList.length / 5) : 1;
    },
  },

  methods: {
    add() {
      if (this.todoInput == "") return;

      const todoItem = {
        text: this.todoInput,
        selected: false,
        completed: false,
        deleted: false,
      };

      this.todoList = [
        ...this.todoList.filter((el) => !el.completed),
        todoItem,
        ...this.todoList.filter((el) => el.completed),
      ];
      this.todoInput = "";
    },
    remove(item) {
      item.deleted = true;

      setTimeout(() => {
        this.todoList = this.todoList.filter((el) => el != item);
      }, 300);
    },
    removeAll() {
      for (let item of this.selectedList) {
        this.remove(item);
      }
    },
    complete(item) {
      item.completed = true;

      setTimeout(() => {
        this.todoList = [...this.todoList.filter((el) => el != item), item];
      }, 300);
    },
    completeAll() {
      for (let item of this.selectedList) {
        if (!item.completed) this.complete(item);
        item.selected = false;
      }
    },
    selectAll() {
      if (this.todoList.length != this.selectedList.length) {
        for (let item of this.todoList) {
          item.selected = true;
        }
      } else {
        for (let item of this.todoList) {
          item.selected = false;
        }
      }
    },
  },
};
</script>
