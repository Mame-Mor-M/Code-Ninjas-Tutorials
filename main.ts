sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.y += 5
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
tiles.setCurrentTilemap(tilemap`Dojo`)
let Cody = sprites.create(assets.image`Ninja`, SpriteKind.Player)
tiles.placeOnTile(Cody, tiles.getTileLocation(7, 20))
scene.cameraFollowSprite(Cody)
controller.moveSprite(Cody)
let Obstacle = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 2 . . . . . . . 
    . . . . . . e e 4 e . . . . . . 
    . . . . . . e 2 4 e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . e e 2 2 2 4 e e . . . . 
    . . c f f f c c e e f f e e . . 
    . c c c c e e 2 2 2 2 4 2 e e . 
    c c c c c c e e 2 2 2 4 2 2 e e 
    c c c c c c e e 2 2 2 2 4 2 e e 
    `, SpriteKind.Enemy)
tiles.placeOnTile(Obstacle, tiles.getTileLocation(6, 8))
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
	
})
