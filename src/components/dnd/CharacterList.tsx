import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { profile } from "../../constants/profile";

const CharacterList = () => {
  const [charaterList, setCharaterList] = useState(profile);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const SLIDE_COUNT = Math.ceil(charaterList.length / 7) + 1;
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: SLIDE_COUNT,
    defaultAnimation: {
      duration: 1000,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    drag: false,
  });

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const currentTags = [...charaterList];
    const draggingItemIndex = result.source.index;
    const afterDragItemIndex = result.destination.index;

    const removeTag = currentTags.splice(draggingItemIndex, 1);

    currentTags.splice(afterDragItemIndex, 0, removeTag[0]);

    setCharaterList(currentTags);
  };

  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "rgb(222, 235, 255)" : "",
  });

  const getItemStyle = (isDraggingOver: boolean) => ({
    border: isDraggingOver ? "2px solid #00b5ff " : "",
  });

  // const rendering = () => {
  //   for (let i = 0; i < SLIDE_COUNT; i++) {
  //     return (
  //       <>
  //         {charaterList.slice(7 * i, 7 * (i + 1)).map((item, idx) => (
  //           <div
  //             key={i}
  //             style={{ display: "flex" }}
  //             className="keen-slider__slide slide"
  //           >
  //             <Draggable key={item.id} draggableId={item.id} index={idx}>
  //               {(provided, snapshot) => (
  //                 <div
  //                   ref={provided.innerRef}
  //                   {...provided.dragHandleProps}
  //                   {...provided.draggableProps}
  //                 >
  //                   <Box style={getItemStyle(snapshot.isDragging)}>
  //                     <img src={item.imgUrl} alt="" />
  //                   </Box>
  //                 </div>
  //               )}
  //             </Draggable>
  //           </div>
  //         ))}
  //       </>
  //     );
  //   }
  // };

  return (
    <>
      <Wrapper className="keen-slider">
        <DragDropContext onDragEnd={onDragEnd}>
          <div ref={sliderRef}>
            <Droppable droppableId="charater" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className="charater"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {charaterList.map((item, idx) => (
                    <Draggable key={item.id} draggableId={item.id} index={idx}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <Box style={getItemStyle(snapshot.isDragging)}>
                            <img src={item.imgUrl} alt="" />
                          </Box>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </Wrapper>
      {/* {SLIDE_COUNT > 1 && currentSlide !== SLIDE_COUNT - 1 && (
        <button
          className="arrow-btn right"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        >
          {">"}
        </button>
      )}
      {SLIDE_COUNT > 1 && currentSlide !== 0 && (
        <button
          className="arrow-btn left"
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        >
          {"<"}
        </button>
      )} */}
    </>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 110px;
  background-color: rgb(179, 212, 255);
  border-radius: 5px;

  .charater {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    transition: background 0.2s;
  }
`;

const Box = styled.article`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  box-shadow: 0 1px 4px #bcc5ca;

  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default CharacterList;
