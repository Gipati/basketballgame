namespace SpriteKind {
    export const biler = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (level == 3) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 1))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (level == 4) {
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 11))
        scene.cameraFollowSprite(mySprite)
        level = 5
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 9 9 2 2 2 2 2 2 2 2 2 . . . . 
            2 9 9 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            f 1 f . . . . f 1 f . . . . . . 
            f f f . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.biler)
        mySprite2.scale += 2.3
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 14))
        mySprite3 = sprites.create(img`
            ....ffffff.........ccc..
            ....ff22ccf.......cc4f..
            .....ffccccfff...cc44f..
            ....cc24442222cccc442f..
            ...c9b4422222222cc422f..
            ..c999b2222222222222fc..
            .c2b99111b222222222c22c.
            c222b111992222ccccccc22f
            f222222222222c222ccfffff
            .f2222222222442222f.....
            ..ff2222222cf442222f....
            ....ffffffffff442222c...
            .........f2cfffc2222c...
            .........fcc2ffffffff...
            ..........fc2ffff.......
            ...........fffff........
            `, SpriteKind.biler)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(15, 10))
    }
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level5`)
        level = 4
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 2))
        scene.cameraFollowSprite(mySprite)
    }
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
        level = 3
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 12))
        scene.cameraFollowSprite(mySprite)
    }
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        level = 2
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
        scene.cameraFollowSprite(mySprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 3))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.biler, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 15))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(false)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let level = 0
level = 1
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
mySprite.changeScale(0.3, ScaleAnchor.Middle)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
forever(function () {
    if (level == 5) {
        for (let index = 0; index < 130; index++) {
            mySprite2.x += -1
            pause(10)
        }
        for (let index = 0; index < 130; index++) {
            mySprite2.x += 1
            pause(10)
        }
    }
})
forever(function () {
    if (level == 5) {
    	
    }
})
