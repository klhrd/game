function 可不可以吃東西 () {
    if (頭.isTouching(food)) {
        幾節身體 += 1
        food.delete()
        food = game.createSprite(randint(0, 4), randint(0, 4))
        if (幾節身體 == 1) {
            身體1 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        } else if (幾節身體 == 2) {
            身體2 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        } else if (幾節身體 == 3) {
            身體3 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        } else if (幾節身體 == 4) {
            身體4 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        } else if (幾節身體 == 5) {
            身體5 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        } else if (幾節身體 == 6) {
            身體6 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        } else if (幾節身體 == 7) {
            身體7 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        } else if (幾節身體 == 8) {
            身體8 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        } else if (幾節身體 == 9) {
            身體9 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
        }
    }
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    頭.set(LedSpriteProperty.Direction, 180)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    頭.set(LedSpriteProperty.Direction, 0)
})
function 動一節身體 (哪一節身體: number) {
    if (哪一節身體 >= 1) {
        身體1.set(LedSpriteProperty.X, 每一節身體的動作X[1])
        身體1.set(LedSpriteProperty.Y, 每一節身體的動作Y[1])
    } else if (哪一節身體 >= 2) {
        身體2.set(LedSpriteProperty.X, 每一節身體的動作X[2])
        身體2.set(LedSpriteProperty.Y, 每一節身體的動作Y[2])
    } else if (哪一節身體 >= 3) {
        身體3.set(LedSpriteProperty.X, 每一節身體的動作X[3])
        身體3.set(LedSpriteProperty.Y, 每一節身體的動作Y[3])
    } else if (哪一節身體 >= 4) {
        身體4.set(LedSpriteProperty.X, 每一節身體的動作X[4])
        身體4.set(LedSpriteProperty.Y, 每一節身體的動作Y[4])
    } else if (哪一節身體 >= 5) {
        身體5.set(LedSpriteProperty.X, 每一節身體的動作X[5])
        身體5.set(LedSpriteProperty.Y, 每一節身體的動作Y[5])
    } else if (哪一節身體 >= 6) {
        身體6.set(LedSpriteProperty.X, 每一節身體的動作X[6])
        身體6.set(LedSpriteProperty.Y, 每一節身體的動作Y[6])
    } else if (哪一節身體 >= 7) {
        身體7.set(LedSpriteProperty.X, 每一節身體的動作X[7])
        身體7.set(LedSpriteProperty.Y, 每一節身體的動作Y[7])
    } else if (哪一節身體 >= 8) {
        身體8.set(LedSpriteProperty.X, 每一節身體的動作X[8])
        身體8.set(LedSpriteProperty.Y, 每一節身體的動作Y[8])
    } else if (哪一節身體 >= 9) {
        身體9.set(LedSpriteProperty.X, 每一節身體的動作X[9])
        身體9.set(LedSpriteProperty.Y, 每一節身體的動作X[9])
    }
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    頭.set(LedSpriteProperty.Direction, 270)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    頭.set(LedSpriteProperty.Direction, 90)
})
function 身體一起動 () {
    動一節身體(幾節身體)
}
let y = 0
let x = 0
let 身體9: game.LedSprite = null
let 身體8: game.LedSprite = null
let 身體7: game.LedSprite = null
let 身體6: game.LedSprite = null
let 身體5: game.LedSprite = null
let 身體4: game.LedSprite = null
let 身體3: game.LedSprite = null
let 身體2: game.LedSprite = null
let 身體1: game.LedSprite = null
let 每一節身體的動作Y: number[] = []
let 每一節身體的動作X: number[] = []
let food: game.LedSprite = null
let 幾節身體 = 0
let 頭: game.LedSprite = null
joystickbit.initJoystickBit()
頭 = game.createSprite(2, 2)
幾節身體 = 0
food = game.createSprite(randint(0, 4), randint(0, 4))
每一節身體的動作X = []
每一節身體的動作Y = []
basic.forever(function () {
    if (x < 0) {
        x += 5
    } else if (y < 0) {
        y += 5
    } else if (x > 4) {
        x += -5
    } else if (y > 4) {
        y += -5
    }
    頭.set(LedSpriteProperty.X, x)
    頭.set(LedSpriteProperty.Y, y)
})
basic.forever(function () {
    if (頭.get(LedSpriteProperty.Direction) == 0) {
        y += -1
    } else if (頭.get(LedSpriteProperty.Direction) == 90) {
        x += 1
    } else if (頭.get(LedSpriteProperty.Direction) == 180) {
        y += 1
    } else if (頭.get(LedSpriteProperty.Direction) == 270) {
        x += -1
    }
    可不可以吃東西()
    basic.pause(500)
})
basic.forever(function () {
    每一節身體的動作X.unshift(x)
    每一節身體的動作Y.unshift(y)
    basic.pause(500)
})
basic.forever(function () {
    身體一起動()
    basic.pause(500)
})
