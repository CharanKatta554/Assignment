import Filter from "./filter";
function App() {
  const dropDownData=["Date of registration","Vendor score","Rating"]
  return (
    <div>
      <Filter data={dropDownData}/>
    </div>
  );
}

export default App;
