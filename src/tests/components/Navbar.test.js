import { shallow } from "enzyme";
import { Navbar } from "../../components/ui/Navbar";

describe("Pruebas en <Navbar />", () => {
  test("debe de mostrarse correctamente", () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper).toMatchSnapshot();
  });
});
