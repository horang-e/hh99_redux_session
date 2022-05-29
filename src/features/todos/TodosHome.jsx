import React, { useState } from "react";
import { Button, Stack, Text } from "../../elem";
import Card from "./Card";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../modules/todos";

const TodosHome = () => {
  const dispatch = useDispatch();
  // Todos local state
  const todos = useSelector((state) => state.todos.todos);

  // 새로 등록할 Todo state
  const [newTodo, setNewTodo] = useState({
    id: 0,
    userId: 0,
    title: "",
    completed: false,
  });

  // input onchange handler
  const onChangeTodoTitleInputHandler = (e) => {
    const { value } = e.target;
    setNewTodo({
      ...newTodo,
      id: todos.length + 1,
      userId: todos.length + 1,
      title: value,
    });
  };

  // 삭제 버튼 핸들러
  const onClickDeleteButtonHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  // 새로운 Todo 등록 핸들러
  const onSubmitNewTodoFormHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
  };

  // JSX
  return (
    <StContainer>
      <form onSubmit={onSubmitNewTodoFormHandler}>
        <Stack mg="30px 0" gap="10px" align="center">
          <Text variant="head01" color="blue">
            제목
          </Text>
          <StInput
            value={newTodo.title}
            type="text"
            name="title"
            onChange={onChangeTodoTitleInputHandler}
          />
          <Button>추가하기</Button>
        </Stack>
      </form>
      <Stack gap="12px" wrap="wrap">
        {todos.map((todo) => {
          return (
            <Card
              key={todo.id}
              todo={todo}
              onClickDeleteButtonHandler={onClickDeleteButtonHandler}
            />
          );
        })}
      </Stack>
    </StContainer>
  );
};

export default TodosHome;

const StContainer = styled.div`
  margin: 50px;
  width: 1000px;
`;

const StInput = styled.input`
  border: 1px solid var(--grey);
  height: 42px;
  width: 500px;
`;
