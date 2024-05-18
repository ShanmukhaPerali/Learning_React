const heading = React.createElement("h1", {id:"heading"}, "Hello to React World!");

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(heading);

root.render(heading);