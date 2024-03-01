const heading = React.createElement("h1", {id:"heading", xyz:"abc"},"Hello World from React!");
console.log(heading)


const parent = React.createElement(
    "div",
     {id: "parent"},[React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1", {}, "I am an h1 element"),
        React.createElement("h2", {}, "I am h2 element")]
), React.createElement(
    "div",
    {id:"child2"},
    [React.createElement("h1", {}, "I am an h1 element"),
    React.createElement("h1", {}, "I am another h1 element")]
)]
     
     )
console.log(parent)



const root = ReactDOM.createRoot(document.getElementById("root"));
            
root.render(parent);