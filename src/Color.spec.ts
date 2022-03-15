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

    it("Should build correct hexadecimal constructor", () => {
      color = new Color("#118AAE");
      expect(color.getHexValue()).toBe("#118AAE");
      expect(color.getRed()).toBe(17);
      expect(color.getGreen()).toBe(138);
      expect(color.getBlue()).toBe(174);
    })

    it("Should throw an exception if hexadecimal value is null", () => {
      expect(() => { let color: Color = new Color(null) }).toThrow(TypeError);
    })

    it("Should throw an exception if hexadecimal value is not correct 1", () => {
      expect(() => { let color: Color = new Color("118AAE") }).toThrow(TypeError);
    })

    it("Should throw an exception if hexadecimal value is not correct 2", () => {
      expect(() => { let color: Color = new Color("#118AA") }).toThrow(TypeError);
    })

    it("Should throw an exception if hexadecimal value is not correct 3", () => {
      expect(() => { let color: Color = new Color("#118AAE1") }).toThrow(TypeError);
    })

    it("Should throw an exception if hexadecimal value is not correct 4", () => {
      expect(() => { let color: Color = new Color("#118AAG") }).toThrow(TypeError);
    })

    it("Should throw an exception if hexadecimal value is not correct 5", () => {
      expect(() => { let color: Color = new Color("#118aae") }).toThrow(TypeError);
    })

    // ##################################################################################################
    // GETTERS
    // ##################################################################################################

    it("Testing getRed method", () => {
      expect(color.getRed()).toBe(17);
      expect(color.getGreen()).toBe(138);
      expect(color.getBlue()).toBe(174);
      expect(color.getHexValue()).toBe("#118AAE");
    })

    it("Testing getGreen method", () => {
      expect(color.getGreen()).toBe(138);
      expect(color.getRed()).toBe(17);
      expect(color.getBlue()).toBe(174);
      expect(color.getHexValue()).toBe("#118AAE");
    })

    it("Testing getBlue method", () => {
      expect(color.getBlue()).toBe(174);
      expect(color.getRed()).toBe(17);
      expect(color.getGreen()).toBe(138);
      expect(color.getHexValue()).toBe("#118AAE");
    })

    it("Testing getHexValue method", () => {
      expect(color.getHexValue()).toBe("#118AAE");
      expect(color.getRed()).toBe(17);
      expect(color.getGreen()).toBe(138);
      expect(color.getBlue()).toBe(174);
    })

    // ##################################################################################################
    // SETTER
    // ##################################################################################################

    // RED
    it("Testing setRed method", () => {
      color.setRed(54);
      expect(color.getRed()).toBe(54);
      expect(color.getGreen()).toBe(138);
      expect(color.getBlue()).toBe(174);
      expect(color.getHexValue()).toBe("#368AAE");
    })

    it("Should throw an exception if the sedRed method's parameter is null", () => {
      expect(() => color.setRed(null)).toThrow(TypeError);
    })

    it("Should throw an exception if the sedRed method's parameter is less than 0", () => {
      expect(() => color.setRed(-3)).toThrow(TypeError);
    })

    it("Should throw an exception if the sedRed method's parameter is more than 255", () => {
      expect(() => color.setRed(261)).toThrow(TypeError);
    })

    // GREEN
    it("Testing setGreen method", () => {
      color.setGreen(255);
      expect(color.getRed()).toBe(17);
      expect(color.getGreen()).toBe(255);
      expect(color.getBlue()).toBe(174);
      expect(color.getHexValue()).toBe("#11FFAE");
    })

    it("Should throw an exception if the setGreen method's parameter is null", () => {
      expect(() => color.setGreen(null)).toThrow(TypeError);
    })

    it("Should throw an exception if the setGreen method's parameter is less than 0", () => {
      expect(() => color.setGreen(-12)).toThrow(TypeError);
    })

    it("Should throw an exception if the setGreen method's parameter is more than 255", () => {
      expect(() => color.setGreen(994)).toThrow(TypeError);
    })

    // BLUE
    it("Testing setBlue method", () => {
      color.setBlue(150);
      expect(color.getRed()).toBe(17);
      expect(color.getGreen()).toBe(138);
      expect(color.getBlue()).toBe(150);
      expect(color.getHexValue()).toBe("#118A96");
    })

    it("Should throw an exception if the setBlue method's parameter is null", () => {
      expect(() => color.setBlue(null)).toThrow(TypeError);
    })

    it("Should throw an exception if the setBlue method's parameter is less than 0", () => {
      expect(() => color.setBlue(-1)).toThrow(TypeError);
    })

    it("Should throw an exception if the setBlue method's parameter is more than 255", () => {
      expect(() => color.setBlue(333)).toThrow(TypeError);
    })

    // HEXADECIMAL
    it("Testing setHexValue method", () => {
      color.setHexValue("#A955B4");
      expect(color.getRed()).toBe(169);
      expect(color.getGreen()).toBe(85);
      expect(color.getBlue()).toBe(180);
      expect(color.getHexValue()).toBe("#A955B4");
    })

    it("Should throw an exception if the setHexValue method's parameter is null", () => {
      expect(() => color.setHexValue(null)).toThrow(TypeError);
    })

    it("Should throw an exception if the setHexValue method's parameter is not correct 1", () => {
      expect(() => color.setHexValue("A955B4")).toThrow(TypeError);
    })

    it("Should throw an exception if the setHexValue method's parameter is not correct 2", () => {
      expect(() => color.setHexValue("#A955B")).toThrow(TypeError);
    })

    it("Should throw an exception if the setHexValue method's parameter is not correct 3", () => {
      expect(() => color.setHexValue("#A955B41")).toThrow(TypeError);
    })

    it("Should throw an exception if the setHexValue method's parameter is not correct 4", () => {
      expect(() => color.setHexValue("#A955G4")).toThrow(TypeError);
    })

    it("Should throw an exception if the setHexValue method's parameter is not correct 5", () => {
      expect(() => color.setHexValue("#a955b4")).toThrow(TypeError);
    })
})