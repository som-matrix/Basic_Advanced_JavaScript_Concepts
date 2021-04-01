
let arr = ["Satya", "Mohapatra"];
let object = {
  name: "Satya Swaroop",
  state: "Odisha",
};
function example() {
  
}
example()
// In React
// const [state, setState] = React.useState(12);
//   setState(14);
//   console.log(state);
// Replicating useState into Vanilla JS
class State{
    constructor(value){
        this.value = value
    }
    update(newValue){
        this.value = newValue
    }
}
const newState = new State(3)
newState.update(4)
console.log(newState.value)