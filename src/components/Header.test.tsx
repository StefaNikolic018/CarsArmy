/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

test("Rendering of Header component", () => {
  const { container } = render(<Header />);
  const stefa = container.querySelector("#stefanikolic");
  expect(stefa).toBeInTheDocument();
});
