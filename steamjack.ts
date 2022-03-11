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

    /**
         * Read temperature sensor.
         */

    
    //% blockId=read_Temperature block="Temperatuur"
    export function readTemperature(): number {
        return input.temperature()
    }

}