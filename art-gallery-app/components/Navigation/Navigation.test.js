import { render, screen } from "@testing-library/react";
import Navigation from ".";

test("renders three navigation links labeled 'Spotlight', 'Art pieces' and 'Favorites'", () => {
  render(<Navigation />);

  const links = screen.getAllByRole("link");

  expect(links).toHaveLength(3);

  expect(links[0]).toHaveAccessibleName("Spotlight");
  expect(links[1]).toHaveAccessibleName("Art pieces");
  expect(links[2]).toHaveAccessibleName("Favorites");
});
