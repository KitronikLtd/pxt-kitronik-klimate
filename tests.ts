//Forever loop repeats displaying the temperature, pressure and humidity as a number
basic.forever(() => {
    basic.showNumber(Kitronik_klimate.temperature(Kitronik_klimate.TemperatureUnitList.C))
    basic.showNumber(Kitronik_klimate.pressure(Kitronik_klimate.PressureUnitList.Pa))
    basic.showNumber(Kitronik_klimate.hunidity())
})