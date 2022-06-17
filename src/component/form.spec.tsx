import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "react-redux";
import { useDispatch } from "react-redux";
import { HttpStoreTask } from "../services/local.storage";
import { render } from "../services/test.utils";
import { store } from "../store/store";
import { Form } from "./form";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("../services/local.storage");
const preloadedState = {
  tasks: [],
};

const useDispatchMock = useDispatch as jest.Mock;
const mockDispatch = jest.fn();

describe("Given the component form", () => {
  beforeEach(() => {
    HttpStoreTask.prototype.addTask = jest.fn().mockResolvedValue({});
    useDispatchMock.mockImplementation(mockDispatch);
  });
  describe("When i render", () => {
    test("Then it should rendered", () => {
      render(<Form />, { preloadedState, store });
      expect(screen.getByText(/Añade una tarea/i)).toBeInTheDocument();
    });
  });
  describe("When i press the input", () => {
    test("Then it should be called", () => {
      render(<Form />, { preloadedState, store });
    });
  });
});
