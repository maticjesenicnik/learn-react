import { render, screen } from "@testing-library/react";
import Greeeting from "./Greeeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeeting />);

    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
});
