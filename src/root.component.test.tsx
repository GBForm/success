import { render } from "@testing-library/react";
import { SuccessLandingPage } from "./components/SuccessLandingPage";
import Root from "./root.component";

describe("Success Landing Page", () => {
  it("should be in the document", () => {
    const { getByText } = render(<SuccessLandingPage />);
    expect(
      getByText(/you submitted the form successfully!/i)
    ).toBeInTheDocument();
  });
});
