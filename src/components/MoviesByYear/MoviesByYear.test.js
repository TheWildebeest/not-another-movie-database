import React from "react";
import { render } from "@testing-library/react";
import MoviesByYear from "./MoviesByYear";

describe("MoviesByYear tests", () => {
  it("should render", () => {
    expect(render(<MoviesByYear />)).toBeTruthy();
  });
});
