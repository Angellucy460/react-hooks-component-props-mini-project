import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
    minutes: 10,
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
    minutes: 5,
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
    minutes: 15,
  },
];

describe("ArticleList Component", () => { // Group your tests for ArticleList
  test("renders a <main> element", () => {
    render(<ArticleList posts={posts} />);
    expect(screen.getByRole("main")).toBeInTheDocument();

  });

  test("renders an Article component for each post passed as a prop", () => {
    render(<ArticleList posts={posts} />);
    const articleElements = screen.getAllByRole("article");

    expect(articleElements).toHaveLength(posts.length);
    expect(screen.getByText("Components 101")).toBeInTheDocument();
    expect(screen.getByText("React Data Flow")).toBeInTheDocument();
    expect(screen.getByText("Function Components vs Class Components")).toBeInTheDocument();
  });

  test("renders a message when no posts are provided", () => {
    render(<ArticleList posts={[]} />); // Render with an empty array

   // For example: if (posts.length === 0) return <p>No posts available.</p>;
    expect(screen.getByText(/No posts available./i)).toBeInTheDocument();
  });
});