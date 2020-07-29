import React from "react";
import { render } from "@testing-library/react";
import Pages from "./Pages";

describe("Pages tests", () => {
  it("should render", () => {
    expect(render(<Pages />)).toBeTruthy();
  });
});
