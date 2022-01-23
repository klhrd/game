function 可不可以吃東西 () {
    if (頭.isTouching(food)) {
        幾節身體 += 1
        food.delete()
        food = game.createSprite(randint(0, 4), randint(0, 4))
        身體1 = game.createSprite(頭.get(LedSpriteProperty.X), 頭.get(LedSpriteProperty.Y))
    }
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    頭.set(LedSpriteProperty.Direction, 180)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    頭.set(LedSpriteProperty.Direction, 0)
})
function 動一節身體 (哪一節身體: number) {
    if (哪一節身體 <= 1) {
        身體1.set(LedSpriteProperty.X, 每一節身體的動作X[1])
        身體1.set(LedSpriteProperty.Y, 每一節身體的動作Y[1])
    }
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    頭.set(LedSpriteProperty.Direction, 270)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    頭.set(LedSpriteProperty.Direction, 90)
})
function 身體一起動 () {
    if (幾節身體 == 1) {
        動一節身體(1)
    }
}
let y = 0
let x = 0
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
    每一節身體的動作X.unshift(x)
    每一節身體的動作Y.unshift(y)
    身體一起動()
    basic.pause(500)
})
