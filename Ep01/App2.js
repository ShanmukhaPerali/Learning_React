const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{className:"heading"},"I'm H1"),
        React.createElement("h2",{id:"parent2"},"I'm H2")
    ]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{className:"heading"},"I'm H1"),
        React.createElement("h2",{id:"parent3"},"I'm H2")
    ]
    )
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);