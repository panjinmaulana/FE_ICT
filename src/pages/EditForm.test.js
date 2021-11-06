import { render } from "@testing-library/react";
import EditForm from "./EditForm";

describe("Testing MyProduct component", () => {
  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<EditForm />);

    const editProduct = getByTestId("edit-product");

    expect(editProduct).toBeInTheDocument();
  });

  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<EditForm />);

    const nameEditForm = getByTestId("name-edit-form");

    expect(nameEditForm).toBeInTheDocument();
  });

  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<EditForm />);

    const imageURLEditForm = getByTestId("image-url-edit-form");

    expect(imageURLEditForm).toBeInTheDocument();
  });

  test("should render MyProduct correctly", () => {
    const { getByTestId } = render(<EditForm />);

    const buttonSubmit = getByTestId("button-submit");

    expect(buttonSubmit).toBeInTheDocument();
  });
});
