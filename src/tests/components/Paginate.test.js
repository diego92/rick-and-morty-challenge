import { shallow } from "enzyme";
import Paginate from "../../components/ui/Paginate";

describe("Pruebas en <Paginate/>", () => {
  test("debe mostrarse correctamente", () => {
    const wrapper = shallow(<Paginate count={10} pageNumber={3} />);

    expect(wrapper).toMatchSnapshot();
  });
});
