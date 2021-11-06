import { render } from "@testing-library/react";
import MyProduct from "./MyProduct";

describe("Testing MyProduct component", () => {
  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<MyProduct />);

    const addProduct = getByTestId("add-product");

    expect(addProduct).toBeInTheDocument();
  });

  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<MyProduct />);

    const buttonEdit = getByTestId("button-edit");

    expect(but).toBeInTheDocument();
  });

  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<MyProduct />);

    const buttonDelete = getByTestId("button-delete");

    expect(buttonDelete).toBeInTheDocument();
  });
});
