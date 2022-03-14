import { Color } from "./Color"

describe("Testing Color class", () => {

    let color: Color;

    beforeEach(() => {
      color = new Color(17, 138, 174);
    });
      
    afterEach(() => {
      color = null;
    });

    // ##################################################################################################
    // CONSTRUCTEUR RGB
    // ##################################################################################################

    it("Should build a correct RGB constructor", () => {
        expect(color.getRed()).toBe(17);
        expect(color.getGreen()).toBe(138);
        expect(color.getBlue()).toBe(174);
        expect(color.getHexValue()).toBe("#118AAE");
    })

    it("Should throw an exception if RGB red value is less than 0", () => {
      expect(() => { let color: Color = new Color(-3, 138, 174) }).toThrow(TypeError);
    })

    it("Should throw an exception if RGB red value is more than 255", () => {
      expect(() => { let color: Color = new Color(300, 138, 174) }).toThrow(TypeError);
    })

    it("Should throw an exception if RGB green value is less than 0", () => {
      expect(() => { let color: Color = new Color(17, -11, 174) }).toThrow(TypeError);
    })

    it("Should throw an exception if RGB green value is more than 255", () => {
      expect(() => { let color: Color = new Color(17, 256, 174) }).toThrow(TypeError);
    })

    it("Should throw an exception if RGB blue value is less than 0", () => {
      expect(() => { let color: Color = new Color(17, 138, -5) }).toThrow(TypeError);
    })

    it("Should throw an exception if RGB blue value is more than 255", () => {
      expect(() => { let color: Color = new Color(17, 138, 542) }).toThrow(TypeError);
    })

    // ##################################################################################################
    // CONSTRUCTEUR HEXADECIMAL
    // ##################################################################################################

    it("Shoud build correct hexadecimal constructor", () => {
      color = new Color(undefined, undefined, undefined, "#118AAE");
      expect(color.getHexValue()).toBe("#118AAE");
      expect(color.getRed()).toBe(17);
      expect(color.getGreen()).toBe(138);
      expect(color.getBlue()).toBe(174);
    })

    it("Should throw an exception if hexadecimal value is null", () => {
      expect(() => { let color: Color = new Color(undefined, undefined, undefined, null) }).toThrow(TypeError);
    })

    it("Should throw an exception if hexadecimal value is not correct 1", () => {
      expect(() => { let color: Color = new Color(undefined, undefined, undefined, "118AAE") }).toThrow(TypeError);
    })
})