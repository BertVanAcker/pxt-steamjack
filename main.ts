basic.forever(function () {
    if (SJ_Waarnemen.readButtonState(SJ_Waarnemen.ButtonID.B)) {
        basic.showIcon(IconNames.Heart)
    }
})
