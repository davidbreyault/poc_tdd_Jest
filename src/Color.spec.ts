import { Color } from "./Color"

describe("Testing Color class", () => {

    let color: Color;

    beforeEach(() => {
        color = new Color(17);
      });
      
      afterEach(() => {
        color = null;
      });

    it("Should retreive red rgb value of 17", () => {
        expect(color.getRed()).toEqual(17);
    })
})