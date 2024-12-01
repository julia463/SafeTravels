import React, { useState, useContext } from "react";
import { RouteContext } from "../context/RouteContext.jsx";
import Inputs from "./Inputs.jsx";
import { generateRoutes } from "../../GenerateRoutes.js";

const RouteForm = () => {
  const {
    data,
    setData,
    page,
    setPage,
    handleChange,
    canNext,
    canPrev,
    canSubmit,
    hasRoutes,
    routes,
    setRoutes,
    setHasResponse,
  } = useContext(RouteContext);

  const handlePrevClick = () => setPage((prev) => prev - 1);
  const handleNextClick = () => setPage((prev) => prev + 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Data is " + data);
    let prompt =
      "Give me some routes using public transportation with an estimated safety score. I want to go to ";
    prompt += data.endingLocation;
    prompt +=
      " from " +
      data.startingLocation +
      "Give me multiple routes. I'd prefer to travel by" +
      data.preferredMode;
    prompt +=
      " so show those routes first. Still give me alternate options with their safety estimates and reasoning. I am leaving at" +
      data.timeOfDay;
    prompt +=
      ", and highlight potential safety risks and potential previous incidents on this route.";
    prompt +=
      "I do not care if there are connections involved, just find the routes.";
    prompt += "Make sure to include the specific bus/train lines involved.";
    prompt +=
      "Also indicate if I might have to walk a significant portion, if so how much and how safe the walk is (crime, gangs, pickpocketers, etc. )";

    data.groupSize > 1
      ? (prompt += "I am travelling with a group of " + data.groupSize)
      : "I am travelling solo.";
    prompt += "And my gender identity is " + data.gender;
    prompt +=
      "Please take my group size and gender identity into account when giving the scores.";
    prompt +=
      "Be harsh when giving the scores, do not give the benefit of the doubt. 5 stars should be extremely safe, that if you fell asleep on the route you have a 99% chance of being fine.";
    prompt +=
      "4 stars should be you should be fine just zoning off with headphones and nothing should happen.";
    prompt +=
      "3 stars should be generally safe, but caution is necessary-  if you are zoning off on your phone or headphones there's a small chance someone might pickpocket you or nonviolent loss, but no confrontation or violence";
    prompt +=
      "2 stars should be a little suspicious or unsafe, you generally do not want to be looking at your phone and must be highly alert.";
    prompt +=
      "1 star should mean that you do not feel safe at all, there is a risk of being harassed or attacked, and there is a high proprtion of mentally unwell indivudals or individuals who are more likely to attack vulnerable populations. It means you do not recommend the route for safety reasons.";
    prompt +=
      "When you give the number of stars, please use ★ to represent a star earned";
    prompt += "Please include bolded words for clarity and emphasis, not **"

    console.log("Prompt is" + prompt);
    const resultroutes = await generateRoutes(prompt);
    console.log(resultroutes.response.candidates[0].content.parts[0].text);
    console.log(resultroutes);
    setRoutes(resultroutes.response.candidates[0].content.parts[0].text);
    setHasResponse(true);
  };

  return (
    <div>
      <Inputs></Inputs>
      <br /> <br />
      <div>
        <button onClick={handlePrevClick} disabled={!canPrev}>
          Prev
        </button>
        <button onClick={handleNextClick} disabled={!canNext}>
          Next
        </button>
        <button type="submit" disabled={!canSubmit} onClick={handleSubmit}>
          Create Route!
        </button>
      </div>
    </div>
  );
};
export default RouteForm;
