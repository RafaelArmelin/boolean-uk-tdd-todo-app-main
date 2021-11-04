const toDoApp = require("../src/toDoApp");

describe("To Do App", () => {
  it("createas a todo item", () => {});
  //set up
  const expected = { id: 1, text: "do the exercises", status: "incomplete" };
  //execute
  expect(toDoApp.create("do the exercises")).toEqual(expected);
  //verify
});
