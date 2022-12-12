// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003010101010101010101010101040404030303010101010101010101010404040303030101010101010303030101040401010101010101010303030303010101010101010101010101010303030101010101010103030101010101010101010101010103030303010101010101010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020201010101010101010101010102020202020101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
2 . . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 2 2 . . . . . . 2 2 2 . . . . 
. . . . . . . . 2 2 2 2 2 . . . 
. . . . . . . . . . 2 2 2 . . . 
. . . . 2 2 . . . . . . . . . . 
. . . 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 2 . . . . 
. . . . . . . . . . 2 2 . . . . 
. . . . . . . . . . 2 2 2 . . . 
. . . . . . . . . 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.hazardWater,sprites.castle.tilePath5,myTiles.tile3,sprites.dungeon.hazardLava1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
