import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App Component", () => {
  test("renders the main application structure", () => {
    render(<App />); 
    const appContainer = screen.getByRole("region", { name: /app container/i }) || screen.getByRole("application") || screen.getByTestId("app-container");
    if (!appContainer) { 
      expect(screen.getByRole("generic", { name: "App" }) || document.querySelector(".App")).toBeInTheDocument();
    } else {
        expect(appContainer).toBeInTheDocument();
    }
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});