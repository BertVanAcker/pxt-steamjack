/**
 * @file pxt-steamjack/steamjack.ts
 * @brief STEAM JACK makecode library.
 * @n [Get the module here](https://github.com/BertVanAcker/pxt-steamjack.git)
 * @n This is a MakeCode graphical programming concept for STEAM.
 *
 * @copyright    [B.MKR](http://www.bmkr.be), 2022
 * @copyright    MIT Lesser General Public License
 *
 * @author [email](bva.bmkr@gmail.com)
 * @date  2022-01-03
*/




/**
 * Custom blocks
 */
//% weight=100 color=#F79226 icon="\f1b8"
namespace SJ_Waarnemen {

    export enum ButtonID {
        A = 0,
        B = 1,
        //% block="A+B"
        AB = 2,
    }
    

    /**
     * Read temperature sensor.
     */

    
    //% blockId=read_Temperature block="Temperatuur"
    export function readTemperature(): number {
        return input.temperature();
    }

    /**
     * Read sound level.
     */
    //% blockId=read_SoundLevel block="Geluidsniveau"
    export function readSoundLevel(): number {
        return input.soundLevel();
    }

    /**
     * Read light level.
     */
    //% blockId=read_LightLevel block="Lichtniveau"
    export function readLightLevel(): number {
        return input.lightLevel();
    }

    /**
     * Read button state.
     */
    //% blockId=read_ButtonState block="Knop |%id| ingedrukt?"
    export function readButtonState(id:ButtonID): boolean {
        if (id == 0){
            return input.buttonIsPressed(Button.A);
        }
        else if (id == 1) {
            return input.buttonIsPressed(Button.B);
        }
        else if (id == 2) {
            return input.buttonIsPressed(Button.AB);
        }
        else
        return false;
    }

    /**
     * Read digital pin state.
     */
    //% blockId=read_DPinState block="Spanningsniveau digital pin |%id|"
    export function readDigitalPinState(id: DigitalPin): number {
        return pins.digitalReadPin(id)
    }
}