# pxt-kitronik-klimate

# Kitronik blocks for micro:bit

Blocks that support [Kitronik klimate board for the micro:bit]

## Klimate

* show temperature as number

```blocks
basic.forever(() => {
    basic.showNumber(Kitronik_klimate.temperature(Kitronik_klimate.TemperatureUnitList.C))
})
```

* show pressure as number

```blocks
basic.forever(() => {
    basic.showNumber(Kitronik_klimate.pressure(Kitronik_klimate.PressureUnitList.Pa))
})
```

* show humidity as number

```blocks
basic.forever(() => {
    basic.showNumber(Kitronik_klimate.humidity())
})
```