function Pizza() {
  return (
    <div>
      <img src="/pizzas/spinaci.jpg" alt="" />
      <h2>Pizza Spinaci</h2>
      <p>tomato, cheese </p>
    </div>
  );
}

function App() {
  return (
    <>
      Hello react!!!
      <Pizza />
    </>
  );
}

export default App;
