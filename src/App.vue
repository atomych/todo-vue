<template>
  <div class="container">
    <header class="header">
      <h1 class="title">ToDo )))</h1>
    </header>
    <section class="create">
      <input type="text" class="create__input" v-model="todoInput" />
      <button class="btn" @click="add">Добавить</button>
    </section>
    <section class="todo-wrapper">
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
          <span class="item-text">{{ item.text }}</span>
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
    <section class="pagination" v-if="paginatedList.length">
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

      <template v-if="selectedList.length">
        <button class="btn btn--l" @click="completeAll">Выполнить</button>
        <button class="btn btn--r" @click="removeAll">Удалить</button>
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1100px;

  height: 100vh;

  margin: 0 auto;

  background-color: rgb(255, 128, 0);
  box-shadow: 0 0 1rem #000;
}

.header {
  padding: 2rem 1rem;

  .title {
    width: 100%;
    text-align: center;

    font-size: 3rem;
    color: #fff;
    letter-spacing: 0.2rem;
  }
}

.create {
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__input {
    width: 100%;
    max-width: 500px;

    padding: 0.5rem 1rem;
    margin-bottom: 1.5rem;

    font-size: 1.5rem;

    background-color: rgb(255, 128, 0);

    border: 2px solid #fff;
    border-radius: 1rem;

    transition: all 0.2s linear;

    &:focus {
      outline: none;

      background-color: #fff;

      box-shadow: 0 0 0.5rem #000;
    }
  }
}

.btn {
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.1rem;

  background-color: #fff;
  color: #000;

  border: 2px solid #fff;
  border-radius: 0.3rem;

  padding: 0.5rem 1rem;

  cursor: pointer;
  transition: all 0.2s linear;

  &--l {
    position: absolute;

    left: 1rem;
    top: 50%;

    transform: translateY(-50%);
  }

  &--r {
    position: absolute;

    right: 1rem;
    top: 50%;

    transform: translateY(-50%);
  }

  &:hover,
  &:focus {
    outline: none;
    color: #fff;
    background-color: rgb(255, 128, 0);
    box-shadow: 0 0 1rem #fff;
  }
}

.todo-wrapper {
  padding: 2rem 3rem;

  .todo-list {
    list-style: none;

    width: 100%;
    min-height: 355px;

    display: flex;
    flex-direction: column;

    .todo-item {
      margin-bottom: 1rem;
      padding: 1rem;

      background-color: #fff;
      border-radius: 0.5rem;

      display: flex;
      align-items: center;

      position: relative;

      transition: all 0.3s linear;

      &.completed {
        opacity: 0.5;
      }

      &.deleted {
        opacity: 0;
      }

      &.selected {
        box-shadow: 0 0 1rem #000;
      }

      .item-select {
        margin-right: 2rem;

        width: 20px;
        height: 20px;
      }

      .item-text {
        font-size: 1.5rem;
      }

      .item-btn-wrapper {
        position: absolute;

        top: 50%;
        right: 1rem;

        transform: translateY(-50%);

        display: flex;

        .item-btn {
          margin-right: 0.5rem;
          padding: 0.3rem;

          border: none;
          border-radius: 0.2rem;

          background-color: #fff;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
          transition: all 0.2s linear;

          &:last-child {
            margin-right: 0;
          }

          &--c:hover,
          &--c:focus {
            outline: none;
            background-color: rgb(22, 188, 0);
            box-shadow: 0 0 0.5rem #000;
          }

          &--d:hover,
          &--d:focus {
            outline: none;
            background-color: rgb(210, 0, 0);
            box-shadow: 0 0 0.5rem #000;
          }
        }
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  .pag-text {
    font-size: 1.3rem;
    margin: 0 1rem;
  }

  .pag-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.3rem;

    border: 2px solid transparent;
    border-radius: 0.3rem;

    background-color: rgb(255, 128, 0);

    cursor: pointer;
    transition: all 0.2s linear;

    &:disabled {
      opacity: 0.7;
      cursor: default;

      &:focus,
      &:hover {
        outline: none;
        box-shadow: none;
        border-color: transparent;
      }
    }

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 1rem #fff;
      border-color: #fff;
    }
  }
}
</style>

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
      item.selected = false;

      setTimeout(() => {
        this.todoList = [...this.todoList.filter((el) => el != item), item];
      }, 300);
    },
    completeAll() {
      for (let item of this.selectedList) {
        this.complete(item);
      }
    },
  },
};
</script>
