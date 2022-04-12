let n = 0
while (!(input.buttonIsPressed(Button.B))) {
    if (input.buttonIsPressed(Button.A)) {
        n += 1
        if (n == 3) {
            n = 1
        }
        if (n == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            if (n == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Asleep)
            }
        }
    }
}
basic.showString("votre humeur")
basic.showNumber(n)
basic.forever(function () {
	
})
