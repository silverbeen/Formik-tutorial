import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Link to="prose-mirror">prose-mirror</Link>
      <Link to="formik">formik</Link>
      <Link to="useFormik">useFormik</Link>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & a {
    color: black;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: ease-in-out 0.2s;

    :hover {
      color: blue;
    }
  }
`;

export default Header;
