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
    expect(state.answer).not.toEqual(11);
    expect(state.answer).toBeLessThanOrEqual(100);
    expect(state.answer).toBeGreaterThanOrEqual(1);
  });
});

describe("makeGuess", () => {
  it("should make a guess", () => {
    let state = {
      guesses: ["1", "23", "34"],
      answer: 11,
      feedback: "You are warm"
    };
    const guess = 91;
    state = Reducer(state, makeGuess(guess));
    expect(state.answer).toBeLessThanOrEqual(100);
    expect(state.answer).toBeGreaterThanOrEqual(1);
    expect(state.feedback).toEqual("You are cold");
    expect(state.guesses.length).toEqual(4);
  });

  it("should return a you are warm guess feddback", () => {
    let state = {
      guesses: ["1", "23", "34"],
      answer: 11,
      feedback: "You are warm"
    };
    const guess = 22;
    state = Reducer(state, makeGuess(guess));
    expect(state.feedback).toEqual("You are warm");
  });

  it("should return a you are hot guess feddback", () => {
    let state = {
      guesses: ["1", "23", "34"],
      answer: 11,
      feedback: "You are warm"
    };
    const guess = 13;
    state = Reducer(state, makeGuess(guess));
    expect(state.feedback).toEqual("You are hot");
  });

  it("should return a you are got it guess feddback", () => {
    let state = {
      guesses: ["1", "23", "34"],
      answer: 11,
      feedback: "You are warm"
    };
    const guess = 11;
    state = Reducer(state, makeGuess(guess));
    expect(state.feedback).toEqual("You got it");
  });
});
