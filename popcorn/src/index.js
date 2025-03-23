import React from "react";
import ReactDOM from "react-dom/client";
//import StarRating from "./StarRating";
import App from "./App";
import './index.css';
//import currencyConverter from "./currencyConverter" 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<StarRating />
    <StarRating numberOfStars={5} messages={["A", "B", "C", "D", "E"]} />
    <StarRating
      numberOfStars={5}
      messages={["A", "B", "C", "D", "E"]}
      defaultRating={3}
    />
    <StarRating numberOfStars={20} size={30} color="red" className="test" />
    <Test />*/}
    <App />
    {/*<currencyConverter />*/}
  </React.StrictMode>
);

/*function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" numberOfStars={8} onSetRating={setMovieRating}/>
      <p>This was rated {movieRating} stars</p>
    </div>
  );
}*/
