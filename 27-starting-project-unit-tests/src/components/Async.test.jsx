import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  beforeAll(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve([{ id: "p1", title: "First post" }]),
      });
    });
  });

  afterAll(() => {
    global.fetch.mockClear();
  });

  test("renders posts if request succeeds", async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
