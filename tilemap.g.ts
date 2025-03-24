// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Store":
            case "level2":return tiles.createTilemap(hex`100010000202010101010101050a0101010102020202010504040404070707000901020202020103070707070707070009010202020201030707070707070700090102020202010307070707070707000901020202020103070707070707070009010202020201030707070707070700090102020202010307070707070707000901020202020103070707070707070009010202020201030707070707070700090102020202010607070808080808000b0102020202010103090101010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
. . 2 2 2 2 2 2 . . 2 2 2 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 . . . . . . . . 2 . 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile6":
            case "tile8":return tile8;
            case "Hardwood LEFT":
            case "tile1":return tile1;
            case "HARDWOOD TOP":
            case "tile2":return tile2;
            case "HARDWOOD LEFT CORNER":
            case "tile3":return tile3;
            case "HARDWOOD BOTTOM LEFT CORNER":
            case "tile4":return tile4;
            case "HARDWOOD MIDDLE":
            case "tile5":return tile5;
            case "HARDWOOD BOTTOM":
            case "tile6":return tile6;
            case "HARDWOOD RIGHT":
            case "tile7":return tile7;
            case "HARDWOOD RIGHT CORNER":
            case "tile9":return tile9;
            case "HARDWOOD RIGHT BOTTOM CORNER":
            case "tile10":return tile10;
            case "Door tile":
            case "tile11":return tile11;
            case "myTile0":
            case "tile12":return tile12;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
