import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { shallow } from "enzyme";

import { Navbar } from "../../components/ui/Navbar";

describe("Pruebas en <Navbar />", () => {
  test("debe de mostrarse correctamente", () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe renderizar bien", () => {
    const { getByTestId } = render(<Navbar />);

    const title = getByTestId("title-app");

    console.log(title.textContent);

    expect(title.textContent).toBe("Rick And Morty");
  });
});
