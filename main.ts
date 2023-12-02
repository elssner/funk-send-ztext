input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    radio.sendString("4 Der Schneemann")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendString("0 Geschneit hat es")
})
radio.setGroup(12)
radio.setTransmitPower(7)
basic.showString("B")
