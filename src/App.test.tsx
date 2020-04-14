import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders top news", () => {
  const { getByText } = render(<App />);
  const text = getByText("Top News");
  expect(text).toBeInTheDocument();
});
