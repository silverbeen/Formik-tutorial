import styled from "@emotion/styled";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { todos } from "../../constants/todos";

const BeautifulDnd = () => {
  const [todoList, setTodoList] = useState(todos);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const currentTags = [...todoList];
    const draggingItemIndex = result.source.index;
    const afterDragItemIndex = result.destination.index;

    const removeTag = currentTags.splice(draggingItemIndex, 1);

    currentTags.splice(afterDragItemIndex, 0, removeTag[0]);

    setTodoList(currentTags);
  };

  // 굉장한 삽질을 했다..... dnd 할때는 절대로 애니메이션을 넣으면 안된다.....
  // hover 하기 위해 li 태그 안에다가 애니메이션을 추가했는데 그거때문에 초기화 되는 듯한 그런 모션이 반복되었다..
  // 그래서 코드가 잘못 된줄 알고 수많은 구글링을 하였지만.. 설마 애니메이션? 했는데 맞았다. 날 배신했다.
  
  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todoList.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      <strong>{index + 1} </strong>
                      <span>{todo.title}</span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export const Container = styled.div`
  width: 600px;
  margin: 100px auto;

  & li {
    margin: 20px 0;
    list-style: none;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    border-radius: 20px;
    background-color: #f7f7f7;
    user-select: none;

    :hover,
    :active {
      background-color: #f9c2c2;
      transition: all 0.3s;
    }

    & span {
      margin-left: 20px;
    }
  }
`;

export default BeautifulDnd;
