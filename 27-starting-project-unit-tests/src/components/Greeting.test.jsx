import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeeting from "./Greeeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeeting />);

    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    render(<Greeeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", async () => {
    render(<Greeeting />);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", async () => {
    render(<Greeeting />);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).toBeNull();
  });

  test("does not render 'Changed!' if the button was NOT clicked", () => {
    render(<Greeeting />);

    const outputElement = screen.queryByText("Changed!", { exact: false });
    expect(outputElement).toBeNull();
  });
});
