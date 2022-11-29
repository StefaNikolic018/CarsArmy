/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */

/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Wrap from "./Wrap";

test("Rendering of Wrap component", () => {
  const { container } = render(<Wrap />);
  expect(
    container.querySelector('[placeholder="Enter number"]')
  ).toBeInTheDocument();
  expect(
    container
      .querySelector('[placeholder="Enter number"]')
      ?.getAttribute("value")
  ).toBe(null);
});
