import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

describe("Article Component", () => {

  const defaultArticleProps = {
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
    minutes: 10, // Assuming 'minutes' is also a prop for Article based on previous context
  };

  test("renders an <article> element", () => {
    
    const { container } = render(<Article {...defaultArticleProps} />);
    expect(container.querySelector("article")).toBeInTheDocument();

    
  });

  test("renders a <h3> with the title of the post", () => {
    render(<Article {...defaultArticleProps} />);
    
    const h3 = screen.getByText(/Components 101/i);
    expect(h3).toBeInTheDocument();
    expect(h3.tagName).toBe("H3"); // tagName returns uppercase
  });

  test("renders a <small> with the date and read time of the post", () => {
    
    // For example: <small>{readTime} {minutes} min read • {date}</small>
    render(<Article {...defaultArticleProps} />);
    
    const small = screen.getByText(/December 15, 2020/i);
    expect(small).toBeInTheDocument();
    expect(small.tagName).toBe("SMALL");
    expect(small).toHaveTextContent(/10 min read/);
  });

  test("uses a default value for the date if no date is passed as a prop", () => {
    
    const { date, ...propsWithoutDate } = defaultArticleProps;
    render(<Article {...propsWithoutDate} />);
    const small = screen.getByText(/January 1, 1970/i);
    expect(small).toBeInTheDocument();
    expect(small.tagName).toBe("SMALL");
  });

  test("renders a <p> with the preview text", () => {
    render(<Article {...defaultArticleProps} />);
    const p = screen.getByText(/Setting up the building blocks of your site/i);
    expect(p).toBeInTheDocument();
    expect(p.tagName).toBe("P");
  });
});