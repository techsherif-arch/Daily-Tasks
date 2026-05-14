import Button from "./Day36/Button";
import Layout from "./Day36/Layout";
import UserCard from "./Day36/UserCard";

function App() {
  return (
    <Layout>
      <UserCard name="Mohamed" age="21" />

      <Button
        label="Click Me"
        onClick={() => alert("Button clicked")}
      />
    </Layout>
  );
}

export default App;