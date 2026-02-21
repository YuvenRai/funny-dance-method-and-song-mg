let USATA = 0
basic.forever(function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    music.play(music.createSoundExpression(WaveShape.Noise, 377, 377, 255, 0, 732, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . # . # .
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 4887, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # . .
        # . . . #
        . . # . .
        . # . # .
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . . . #
        . . . . .
        . . # . .
        # # . . #
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        . . . . .
        # . # . .
        . . . . .
        # # . . .
        `)
    USATA = USATA
    led.plotBarGraph(
    0,
    1
    )
})
