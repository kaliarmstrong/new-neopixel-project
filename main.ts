let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    strip.show()
    strip.clear()
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
    strip.clear()
})
basic.forever(function () {
    basic.showArrow(ArrowNames.West)
    basic.showString("or")
    basic.showArrow(ArrowNames.East)
    strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
    strip.clear()
})
