export class Color {
    private red: number;
    private green: number;
    private blue: number;
    private hexadecimal: string;

    public constructor(hexadecimal: string);
    public constructor(red: number, green: number, blue: number);

    public constructor(...colorData: any[]) {

        if (colorData.length === 0) {
            throw new TypeError("Color constructor mush have at least one argument");
        }

        if (colorData.length === 1) {
            // Constructeur à un argument 
            let hexadecimal = colorData[0].toString();
            if (/^#[0-9A-F]{6}$/.test(hexadecimal)) {
                this.hexadecimal = hexadecimal;
                this.red = parseInt(hexadecimal.substring(1, 3), 16);
                this.green = parseInt(hexadecimal.substring(3, 5), 16);
                this.blue = parseInt(hexadecimal.substring(5, 7), 16);
            } else {
                throw new TypeError("Hexadecimal value is not correct");
            }
        }

        if (colorData.length === 3) {
            // Constructeur à 3 arguments
            let red = parseFloat(colorData[0]);
            let green = parseFloat(colorData[1]);
            let blue = parseFloat(colorData[2]);
            if ((red < 0 || red > 255) || (green < 0 || green > 255) || (blue < 0 || blue > 255)) {
                throw new TypeError("RGB values must be between 0 and 255");
            } else {
                this.red = red;
                this.green = green;
                this.blue = blue;
                this.hexadecimal = "#" + this.rgbToHex(red) + this.rgbToHex(green) + this.rgbToHex(blue);
            }
        }
    }

    getRed(): number {
        return this.red;
    }

    getGreen(): number {
        return this.green;
    }

    getBlue(): number {
        return this.blue;
    }

    getHexValue(): string {
        return this.hexadecimal;
    }

    /**
     * 
     * @param rgb Un nombre (entre 0 et 255)
     * @returns Une chaîne de caractères (ou nombre en base 16)
     */
    rgbToHex(rgb: number): string {
        let hex = Number(rgb).toString(16).toUpperCase();
        return hex.length === 1 ? "0" + hex : hex;
    }

    setRed(red: number): void {
        if (red !== null) {
            if (red >= 0 && red <= 255) {
                this.red = red;
                this.hexadecimal = this.hexadecimal.substring(0, 1) + this.rgbToHex(red) + this.hexadecimal.substring(3, 7);
            }
            else throw new TypeError("RGB values must be between 0 and 255");
        }
        else throw new TypeError("This method's argument must not be null");
    }

    setGreen(green: number): void {
        if (green !== null) {
            if (green >= 0 && green <= 255) {
                this.green = green;
                this.hexadecimal = this.hexadecimal.substring(0, 3) + this.rgbToHex(green) + this.hexadecimal.substring(5, 7);
            } 
            else  throw new TypeError("RGB values must be between 0 and 255");
        } 
        else throw new TypeError("This method's argument must not be null");
    }

    setBlue(blue: number): void {
        if (blue !== null) {
            if (blue >= 0 && blue <= 255) {
                this.blue = blue;
                this.hexadecimal = this.hexadecimal.substring(0, 5) + this.rgbToHex(blue);
            } 
            else  throw new TypeError("RGB values must be between 0 and 255");
        } 
        else throw new TypeError("This method's argument must not be null");
    }

    setHexValue(hexadecimal: string): void {
        if (hexadecimal !== null) {
            if (/^#[0-9A-F]{6}$/.test(hexadecimal)) {
                this.hexadecimal = hexadecimal;
                this.red = parseInt(hexadecimal.substring(1, 3), 16);
                this.green = parseInt(hexadecimal.substring(3, 5), 16);
                this.blue = parseInt(hexadecimal.substring(5, 7), 16);
            }
            else throw new TypeError("Hexadecimal value is not correct");
        }
        else throw new TypeError("This method's argument must not be null");
    }
}