import { RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from "../actions";

describe("restartGame", () => {
  it("should return the action", () => {
    const correctAnswer = 33;
    const action = restartGame(correctAnswer);
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe("makeGuess", () => {
  it("should return the action", () => {
    const guess = 91;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});
