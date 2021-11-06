// data-testid="add-form-product"
import { render } from "@testing-library/react";
import EditForm from "./EditForm";

describe("Testing MyProduct component", () => {
  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<EditForm />);

    const addFormProduct = getByTestId("add-form-product");

    expect(addFormProduct).toBeInTheDocument();
  });

  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<EditForm />);

    const buttonaddFormProduct = getByTestId("button-add-form-product");

    expect(buttonaddFormProduct).toBeInTheDocument();
  });
});
