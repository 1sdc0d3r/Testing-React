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
      expect(wrapper.getByText(/previous/i));
      // expect(wrapper.getByText(/notPrevious/i));
      // wrapper.findByText(/previous/i);
      // toHaveTextContent(/previous/i);
      // expect(wrapper.findByText(/notHereAtall/i));
      //   expect(getByTestId("prevBtn")).toBe(/previous/i);
      // expect(getByTestId("prevBtn")).toHaveTextContent(/previous/i);
      //   rtl.fireEvent(getByText(/previous/i));
    });
  });
});

"moduleNameMapper": {
  "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
},
