export class Color {
    private red: number;
    private green: number;
    private blue: number;
    private hexadecimal: string;

    constructor(red?: number, green?: number, blue?: number, hexadecimal?: string) {
        if (hexadecimal) {
            if (/^#[0-9A-F]{6}$/.test(hexadecimal)) {
                this.hexadecimal = hexadecimal;
                this.red = parseInt(hexadecimal.substring(1, 3), 16);
                this.green = parseInt(hexadecimal.substring(3, 5), 16);
                this.blue = parseInt(hexadecimal.substring(5, 7), 16);
            } else {
                throw new TypeError("Hexadecimal value is not correct");
            }
        } else if (red && green && blue) {
            if ((red < 0 || red > 255) || (green < 0 || green > 255) || (blue < 0 || blue > 255)) {
                throw new TypeError("RGB values must be between 0 and 255");
            }
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.hexadecimal = "#" + this.rgbToHex(red) + this.rgbToHex(green) + this.rgbToHex(blue);
        } else {
            throw new TypeError("Color constructor mush have at least one argument");
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
}