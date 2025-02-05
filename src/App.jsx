import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
`

const StyledApp = styled.main`
    padding: 20px;
`

function App() {
    return (
        <>
            <GlobalStyles />
        <div>Hello world!</div>
      </>
    );
}

export default App
