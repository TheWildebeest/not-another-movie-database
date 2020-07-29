import React from "react";
import { render } from "@testing-library/react";
import MoviesByTitle from "./MoviesByTitle";

describe("MoviesByTitle tests", () => {
  it("should render", () => {
    expect(render(<MoviesByTitle />)).toBeTruthy();
  });
});
