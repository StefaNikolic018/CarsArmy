/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Car from "./Car";
import fallbackImage from "../../assets/images/basic.png";

const car = { img: "zlj", name: "Yugo", amount: 33 };

test("Rendering of Car component", () => {
  const { container } = render(<Car {...car} />);

  expect(screen.getByRole("heading")).toHaveTextContent(/Yugo/);
  expect(container.querySelector("p")).toHaveTextContent("33");
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(container.querySelector("img")?.src).toBe(
    window.location.href + fallbackImage
  );
});
