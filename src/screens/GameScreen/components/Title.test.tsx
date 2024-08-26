import React from "react";
import { render } from "@testing-library/react-native";
import Title from "./Title";
import "@testing-library/jest-native/extend-expect";

describe("Title", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Title title="Test Title" />);
    expect(getByText("Test Title")).toBeTruthy();
  });

  it("applies correct styles", () => {
    const { getByTestId } = render(<Title title="Test Title" />);
    const titleContainer = getByTestId("title-container");

    expect(titleContainer).toHaveStyle({
      borderWidth: 4,
      borderRadius: 8,
      width: "80%",
      height: 60,
      justifyContent: "center",
      alignItems: "center",
    });
  });

  it("uses white color for text and border", () => {
    const { getByTestId, getByText } = render(<Title title="Test Title" />);
    const titleContainer = getByTestId("title-container");
    const titleText = getByText("Test Title");

    expect(titleContainer).toHaveStyle({
      borderColor: "white",
    });

    expect(titleText).toHaveStyle({
      color: "white",
    });
  });
});
