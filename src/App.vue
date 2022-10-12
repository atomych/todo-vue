<template>
  <div class="container">
    <header class="header">
      <h1 class="title">ToDo )))</h1>
    </header>
    <section class="create">
      <input type="text" class="create__input" />
      <button class="btn">Добавить</button>
    </section>
    <section class="todo-wrapper">
      <ul class="todo-list">
        <li class="todo-item">
          <input type="checkbox" class="item-select" />
          <span class="item-text"
            >Create fantastic todo-app and get a job!</span
          >
          <div class="item-btn-wrapper">
            <button class="item-btn item-btn--c">
              <img src="./assets/complete.png" width="25" height="25" />
            </button>
            <button class="item-btn item-btn--d">
              <img src="./assets/delete.png" width="25" height="25" />
            </button>
          </div>
        </li>
      </ul>
    </section>
    <section class="control">
      <button class="btn">Выполнить</button>
      <button class="btn">Удалить</button>
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

.control {
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 300px;

  margin: 0 auto;
}
</style>
