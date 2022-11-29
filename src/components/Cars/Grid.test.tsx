/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
// /* eslint-disable testing-library/no-node-access */
// /* eslint-disable testing-library/no-unnecessary-act */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { act } from "react-dom/test-utils";
// import "@testing-library/jest-dom";
// import Grid from "./Grid";

// let container: HTMLDivElement | null | Node | Element | DocumentFragment;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container as Node);
//   container = null;
// });

// it("can render and update a Grid", () => {
//   // Test first render and componentDidMount
//   act(() => {
//     ReactDOM.createRoot(container as Element | DocumentFragment).render(
//       <Grid />
//     );
//   });
//   const spinner = (container as HTMLDivElement).querySelector(".spinner");
//   //   const h1 = (container as HTMLDivElement).querySelector("#message");
//   //   const searchInput = (container as HTMLDivElement).querySelector(
//   //     "#searchIcon"
//   //   )?.firstChild;
//   //   const searchButton = (container as HTMLDivElement).querySelector(
//   //     "#searchIcon"
//   //   )?.lastChild;
//   //   //   const label = (container as HTMLDivElement).querySelector("p");
//   expect(spinner as HTMLDivElement).toBeInTheDocument();
//   //   expect((searchInput as HTMLInputElement).value).toBe("");
//   //   //   Test second render when data is loaded
//   //   act(() => {
//   //     expect((h1 as HTMLHeadingElement).textContent).toBe("Enter desired number");
//   //   });
//   //   // Test second render and componentDidUpdate
//   //   act(() => {
//   //     (searchInput as HTMLInputElement).value = "100";
//   //     (searchButton as HTMLSpanElement).dispatchEvent(
//   //       new MouseEvent("click", { bubbles: true })
//   //     );
//   //   });
//   //   const carGrid = (container as HTMLDivElement).querySelector(".car-card");
//   //   expect(carGrid).toBeInTheDocument();
//   //   //   expect(document.title).toBe("You clicked 1 times");
//   // const stefa = (container as HTMLDivElement).querySelector("#stefanikolic");
//   // expect(stefa).toBeInTheDocument();
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Grid from "./Grid";

test("Rendering of Grid component", () => {
  const { container } = render(<Grid />);
  const heading = container.querySelector("#message");
  expect(heading).toHaveTextContent(/Enter desired number/);
});
