import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
    padding: 20px;
`

function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Heading>Freddys African Wear</Heading>
            </StyledApp>
      </>
    );
}

export default App
