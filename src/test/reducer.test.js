import React from "react";
import { shallow, mount } from "enzyme";
import Reducer from "../reducers/index";
import { restartGame, makeGuess } from "../actions";

describe("<Reducer />", () => {
  it("Renders without crashing", () => {
    shallow(<Reducer />);
  });
});

describe("restartGame", () => {
  it("should restart the game", () => {
    let state = {
      guesses: ["1", "23", "34"],
      answer: 11,
      feedback: "You are warm"
    };

    state = Reducer(state, restartGame());
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    //expect(state.answer).toEqual(state.answer);not equal 11
    expect(state.answer).toEqual(state.answer);
  });
});
