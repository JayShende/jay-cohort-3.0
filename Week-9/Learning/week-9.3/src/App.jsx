function App() {
  const arr = [
    { title: "Go to Gym", done: false },
    { title: "Go to Gym", done: true },
  ];

//   const todoscomp = arr.map((todo, index) => {
//     return <Todos key={index} title={todo.title} done={todo.done} />;
//   });
    const todoscomp=
        [<Todos key={1} title={"Go to Gym"} done={false}/>]
    
  return <div>{todoscomp}</div>;
}

function Todos({ title, done }) {
  return (
    <div>
      {title} - {done ? "Done" : "Not Done"}
    </div>
  );
}
export default App;
