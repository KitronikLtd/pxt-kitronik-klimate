# pxt-kitronik-klimate

# Kitronik blocks for micro:bit

Blocks that support [Kitronik kits and shields for the micro:bit](https://www.kitronik.co.uk/microbit.html)
This package is for the [Kitronik Klimate Board] (hhtp://www.kitronik.co.uk/5636)

## Klimate

* read the temperature as a number measured in degrees C

```blocks
basic.forever(() => {
    basic.showNumber(Kitronik_klimate.temperature(Kitronik_klimate.TemperatureUnitList.C))
})
```

* read the pressure as a number measured in Pascals

```blocks
basic.forever(() => {
    basic.showNumber(Kitronik_klimate.pressure(Kitronik_klimate.PressureUnitList.Pa))
})
```

* read the humidity as a number measured in Percentage

```blocks
basic.forever(() => {
    basic.showNumber(Kitronik_klimate.humidity())
})
```
## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


```package
pxt-kitronik-klimate=github:KitronikLtd/pxt-kitronik-klimate
```