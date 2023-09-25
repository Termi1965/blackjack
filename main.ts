controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Dealer_Action()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cards == 0) {
        Draw(Count)
        Cards += 0
        Count += Card
        list[Cards].sayText(convertToText(Card))
        Draw(Count)
        Cards += 1
        Count += Card
        list[Cards].sayText(convertToText(Card))
        Draw(Dcards)
        hidden_card = Card
        Dcards += 1
        hidden_card_no = Dcards
        Dealer += Card
        Dlist[Dcards].sayText(":)")
        Draw(Dcards)
        Dcards += 1
        Dealer += Card
        Dlist[Dcards].sayText(convertToText(Card))
        if (Count == 21 && Dealer < 21) {
            Dlist[hidden_card_no].sayText(convertToText(hidden_card))
            Myscore += 15
            Mysprite5.setImage(img`
                . 6 . . . . . . . . . . . . 6 . 
                6 9 6 . . . . . . . . . . 6 9 6 
                . 6 . . . . . . . . . . . . 6 . 
                . 6 . . . . . . . . . . . . 6 . 
                . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
                . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
                9 6 9 1 1 1 9 9 9 9 1 1 1 9 6 9 
                9 6 9 1 1 f 9 9 9 9 1 f 1 9 6 9 
                9 6 9 1 f f 9 9 9 9 f f 1 9 6 9 
                9 6 9 9 9 9 9 9 9 9 9 9 9 9 6 9 
                . 6 9 9 6 1 1 1 1 1 1 6 9 9 6 . 
                . . 9 9 9 6 6 6 6 6 6 9 9 9 . . 
                . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                `)
            Mysprite5.sayText("You have" + convertToText(Count))
            pause(500)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 500)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.confetti, 500)
            Init()
        }
        if (Count == 21 && Dealer == 21) {
            Dlist[hidden_card_no].sayText(convertToText(hidden_card))
            pause(500)
            Init()
        }
    } else {
        Draw(Count)
        Cards += 1
        Count += Card
        list[Cards].sayText(convertToText(Card))
        pause(500)
    }
    if (Count == 21) {
        Mysprite5.setImage(img`
            . 6 . . . . . . . . . . . . 6 . 
            6 9 6 . . . . . . . . . . 6 9 6 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 . . . . . . . . . . . . 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            . 6 9 9 9 9 9 9 9 9 9 9 9 9 6 . 
            9 6 9 1 1 1 9 9 9 9 1 1 1 9 6 9 
            9 6 9 1 1 f 9 9 9 9 1 f 1 9 6 9 
            9 6 9 1 f f 9 9 9 9 f f 1 9 6 9 
            9 6 9 9 9 9 9 9 9 9 9 9 9 9 6 9 
            . 6 9 9 6 1 1 1 1 1 1 6 9 9 6 . 
            . . 9 9 9 6 6 6 6 6 6 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            `)
        Mysprite5.sayText("You have" + convertToText(Count))
        pause(1000)
        Dealer_Action()
    }
    if (Count > 21) {
        Myscore += -10
        sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.fire, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.confetti, 500)
        Init()
    }
})
function Dealer_Action () {
    while (Dealer < Count) {
        Dlist[hidden_card_no].sayText(convertToText(hidden_card))
        pause(500)
        Draw(Dcards)
        Dealer += Card
        Dcards += 1
        Dlist[Dcards].sayText(convertToText(Card))
        pause(500)
        if (Dealer > 21) {
            Mysprite6.sayText(convertToText(Dealer))
            Myscore += 10
            Flag = 1
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.fire, 500)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.confetti, 500)
        }
    }
    if (Dealer <= 21 && Flag != 1) {
        Mysprite6.sayText(convertToText(Dealer))
        Myscore += -10
        sprites.destroyAllSpritesOfKind(SpriteKind.Player, effects.fire, 500)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.confetti, 500)
    }
    Flag = 0
    Init()
}
function Draw (num: number) {
    Card = randint(1, 13)
    if (Card > 10) {
        Card = 10
    }
    if (Card == 1 && num + 11 <= 21) {
        Card = 11
    }
}
function Init () {
    Kort1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Kort1.setPosition(37, 40)
    Kort2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Kort2.setPosition(47, 52)
    Kort3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Kort3.setPosition(35, 64)
    Kort4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Kort4.setPosition(48, 76)
    Kort5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Kort5.setPosition(37, 88)
    Kort6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Kort6.setPosition(47, 100)
    Kort7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Kort7.setPosition(132, 30)
    Kort8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Kort8.setPosition(121, 42)
    Kort9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Kort9.setPosition(133, 54)
    Kort10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Kort10.setPosition(119, 66)
    Kort11 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Kort11.setPosition(135, 78)
    Kort12 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Kort12.setPosition(120, 90)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Mysprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Mysprite5.setPosition(31, 105)
    Mysprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Mysprite6.setPosition(135, 105)
    list = [
    Kort1,
    Kort2,
    Kort3,
    Kort4,
    Kort5,
    Kort6
    ]
    Dlist = [
    Kort7,
    Kort8,
    Kort9,
    Kort10,
    Kort11,
    Kort12
    ]
    mySprite3.setPosition(43, 25)
    mySprite3.sayText("You  " + convertToText(Myscore))
    mySprite4.setPosition(126, 25)
    mySprite4.sayText("Dealer")
    Count = 0
    Dealer = 0
    Card = 0
    Cards = 0
    Dcards = 0
}
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let Kort12: Sprite = null
let Kort11: Sprite = null
let Kort10: Sprite = null
let Kort9: Sprite = null
let Kort8: Sprite = null
let Kort7: Sprite = null
let Kort6: Sprite = null
let Kort5: Sprite = null
let Kort4: Sprite = null
let Kort3: Sprite = null
let Kort2: Sprite = null
let Kort1: Sprite = null
let Flag = 0
let Mysprite6: Sprite = null
let Mysprite5: Sprite = null
let Myscore = 0
let Dlist: Sprite[] = []
let Dealer = 0
let hidden_card_no = 0
let hidden_card = 0
let Dcards = 0
let list: Sprite[] = []
let Card = 0
let Count = 0
let Cards = 0
game.splash("Blackjack", "A = Hit   B = Stand")
Init()
