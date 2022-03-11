basic.forever(function () {
    if (SJ_Waarnemen.readButtonState(SJ_Waarnemen.ButtonID.B)) {
        basic.showNumber(SJ_Waarnemen.readAnalogPinState(AnalogPin.P2))
    }
})
