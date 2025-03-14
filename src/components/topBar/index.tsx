import { Container, Categorys, BigContainer } from "./styles";

const items = ["All", "Games", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars", "Cars"]

function TopBar() {
  
    return (
      <BigContainer>
        <Container>
          {items.map((item, index) => (
            <Categorys key={index}>
              <span>{item}</span>
            </Categorys>))}
        </Container>
      </BigContainer>
    )
  }
  
export default TopBar;