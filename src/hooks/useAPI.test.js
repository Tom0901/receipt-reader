import useAPI from "./useAPI";

const fns = useAPI();

test("tests that api fn receives and returns correct data", () => {
  expect(fns.sendFiles()).toBe("hello world");
});
