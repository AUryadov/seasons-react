import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
    // That's it
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

// const App = () => {
//     // async
//     // popup allow or not
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     // Class if use func comp
//     return <h1>Latitude: </h1>;
// };

ReactDOM.render(<App />, document.getElementById("root"));
