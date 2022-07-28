import styled from "@emotion/styled";
import { FC } from "react";

interface Props {
  num: number;
  content: string;
}

const ItemCard: FC<Props> = ({ num, content }) => {
  return (
    <ItemBox>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfGSq7nqjFfrhkWMDHlbw-VQSjh6zPSW49coL_xtywk89tpwGxpjD21FSdddo9Re-W3Q&usqp=CAU"
        alt=""
      />
      <div className="text_box">
        <div>
          <strong>{num + 1} </strong>
          <span>{content}</span>
        </div>
        <button>끝끝끝</button>
      </div>
    </ItemBox>
  );
};

const ItemBox = styled.li`
  margin: 20px 0;
  list-style: none;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  user-select: none;
  display: flex;
  gap: 20px;
  box-shadow: 0px 2px 4px #ababab30;

  :hover,
  :active {
    background-color: #fff6f6;
    transition: all 0.3s;
  }

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .text_box {
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
      border: none;
      background-color: none;
      padding: 5px 10px;
      border-radius: 5px;
      float: right;
      cursor: pointer;
    }
  }
`;

export default ItemCard;
