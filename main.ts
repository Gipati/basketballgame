tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . 4 f f 4 4 . . . . . . 
    . . . . 4 4 4 f f 4 4 . . . . . 
    . . . 4 4 4 4 4 f f 4 4 . . . . 
    . . 4 f 4 4 4 4 4 f 4 4 4 . . . 
    . . 4 f f 4 4 4 4 f f 4 4 . . . 
    . . 4 4 f f f 4 4 4 f f 4 . . . 
    . . . 4 4 4 f f 4 4 4 4 . . . . 
    . . . . 4 4 4 f f f 4 . . . . . 
    . . . . . 4 4 4 4 f . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
mySprite.changeScale(1, ScaleAnchor.Middle)
scene.cameraFollowSprite(mySprite)
