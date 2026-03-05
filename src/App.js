import styled from "styled-components";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <TaskList />
      <Footer />
    </AppContainer>
  );
}

export default App;