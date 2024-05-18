import ButtonPrimary from "../src/app-components/ButtonPrimary";

describe("ButtonPrimary", () => {
  it("This will render button in primary mode.", () => {
    render(<ButtonPrimary />);
    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });
});
