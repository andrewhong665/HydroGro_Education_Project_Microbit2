input.onButtonPressed(Button.A, function () {
    if (Counter % 2 > 0) {
        pins.analogWritePin(AnalogPin.P2, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    Counter += 1
})
let WLsensor = 0
let Counter = 0
OLED.init(128, 64)
pins.analogWritePin(AnalogPin.P2, 0)
pins.analogWritePin(AnalogPin.P4, 1023)
Counter = 0
basic.forever(function () {
    WLsensor = pins.analogReadPin(AnalogReadWritePin.P1)
    OLED.writeNumNewLine(WLsensor)
    if (WLsensor > 100) {
        pins.analogWritePin(AnalogPin.P4, 0)
    } else if (WLsensor < 100) {
        pins.analogWritePin(AnalogPin.P4, 1023)
    } else {
    	
    }
})
