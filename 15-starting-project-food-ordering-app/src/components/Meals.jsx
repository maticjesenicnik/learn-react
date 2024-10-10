import React from "react";
import useFetch from "../hooks/useFetch";
import { fetchMeals } from "../http";
import MealItem from "./MealItem";

export default function Meals() {
  const { data: meals, setData: setMeals, isFetching, error } = useFetch(fetchMeals, []);

  return (
    <ul id="meals">
      {isFetching && <p className="text-center">Fetching available meals to order...</p>}
      {!isFetching && meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
