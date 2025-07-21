import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("renders a <header> element", () => {
    render(<Header name="Any Blog Name" />); 
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("renders an <h1> with the blog name", () => {
    const blogName = "Underreacted";
    render(<Header name={blogName} />);

    const h1 = screen.getByText(blogName)
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
  });
  test("uses a default name if no name is passed as a prop", () => {
    
    render(<Header />);
    const h1 = screen.getByText("My Awesome Blog"); // Replace with your actual default name
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
  });
});