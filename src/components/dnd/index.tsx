import styled from "@emotion/styled";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { todos } from "../../constants/todos";
import ItemCard from "./ItemCard";

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
      <Wrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <h2>Finn</h2>
          <Droppable droppableId="finn">
            {(provided) => (
              <div
                className="finn"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todoList.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <ItemCard num={index} content={todo.title} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Wrapper>
    </Container>
  );
};

export const Container = styled.div`
  margin: 100px auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const Wrapper = styled.div`
  width: 500px;
  background-color: #efefef;
  padding: 10px 20px;
  border-radius: 3px;
  color: #282828;
`;

export default BeautifulDnd;
