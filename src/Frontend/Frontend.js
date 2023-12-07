import AvilablMeals from "./Components/Meals/AvilablMeals";
import FrontHeader from "./Components/Layout/FrontHeader";
import MainHeader from "../Components/MainHeader";

const Frontend = () => {
  return (
    <div className="App">
      <FrontHeader></FrontHeader>

      <h1>Frontend</h1>

      <AvilablMeals />
    </div>
  );
};

export default Frontend;
