/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Content from "./Content";

test("Rendering of Content component", () => {
  const { container } = render(<Content />);
  const h1 = container.querySelector("#message");
  const searchInput = container.querySelector("#searchIcon")?.firstChild;
  expect(h1 as HTMLDivElement).toBeInTheDocument();
  expect((searchInput as HTMLInputElement).value).toBe("");
});
