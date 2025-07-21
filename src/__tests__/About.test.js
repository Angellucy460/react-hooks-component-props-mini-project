import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

jest.mock("../assets/logo", () => "mock-blog-logo-path"); 

describe("About Component", () => {
  test("renders an <aside> element", () => {
    const { container } = render(<About />);
    expect(container.querySelector("aside")).toBeInTheDocument();
  });

  test("renders an <img> with the blog logo and alt text of 'blog logo'", () => {

    render(<About image="mock-blog-logo-path" />); 
    const img = screen.getByAltText("blog logo"); 
    expect(img).toBeInTheDocument();
    
    expect(img).toHaveAttribute("src", "mock-blog-logo-path");
  });

  test("uses a default value for the image if no image is passed as a prop", () => {
    render(<About />);
    const img = screen.getByAltText("blog logo"); 
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://via.placeholder.com/215");
  });

  test("renders a <p> with the about text", () => {
    render(<About about="About this blog" />);
    const p = screen.getByText("About this blog");
    expect(p).toBeInTheDocument();
    expect(p.tagName).toBe("P"); 
  });

  
  test("renders a <p> with default about text if none is passed", () => {
    render(<About />);
    const p = screen.getByText("Default about text here."); // Replace with your actual default text
    expect(p).toBeInTheDocument();
    expect(p.tagName).toBe("P");
  });
});