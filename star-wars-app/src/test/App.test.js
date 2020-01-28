import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import StarWarsCharacters from "../components/StarWarsCharacters";

afterEach(rtl.cleanup);

describe("<App />", () => {
  it("it renders without crashing", () => {
    rtl.render(<App />);
  });
  describe("<StarWarsCharacters />", () => {
    const wrapper = rtl.render(<StarWarsCharacters />);
    it("renders without crashing", () => {
      wrapper;
    });
    it("previous button fires", async () => {
      //   wrapper.getByTestId("prevBtn");
      wrapper.getByText(/previous/i);
      //   expect(getByTestId("prevBtn")).toBe(/previous/i);
      // expect(getByTestId("prevBtn")).toHaveTextContent(/previous/i);
      //   rtl.fireEvent(getByText(/previous/i));
    });
  });
});
