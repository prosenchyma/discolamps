let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    strip.setPixelColor(0, neopixel.rgb(102, 84, 94))
    strip.setPixelColor(1, neopixel.rgb(163, 145, 147))
    strip.setPixelColor(2, neopixel.rgb(170, 111, 115))
    strip.setPixelColor(3, neopixel.rgb(238, 169, 144))
    strip.setPixelColor(4, neopixel.rgb(246, 224, 181))
    strip.show()
    while (true) {
        strip.rotate(1)
        strip.show()
        basic.pause(250)
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    strip.clear()
    strip.show()
})
