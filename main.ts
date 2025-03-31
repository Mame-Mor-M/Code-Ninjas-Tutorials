namespace SpriteKind {
    export const Decoration = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Obstacle, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Decoration, function (sprite, otherSprite) {
	
})
tiles.setCurrentTilemap(tilemap`Store`)
let Cody = sprites.create(assets.image`Ninja`, SpriteKind.Player)
tiles.placeOnTile(Cody, tiles.getTileLocation(5, 10))
scene.cameraFollowSprite(Cody)
controller.moveSprite(Cody)
let Decoration1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . c a a a c . . . . . . . 
    . . . c c f a b b c . . . . . . 
    . . . b f f b f a a . . . . . . 
    . . . b b a b f f a . . . . . . 
    . . . c b f b b a c . . . . . . 
    . . . . b a f c c . . . . . . . 
    . . . . . b b c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Decoration)
tiles.placeOnTile(Decoration1, tiles.getTileLocation(12, 3))
let Decoration2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . c a a a c . . . . . . . 
    . . . c c f a b b c . . . . . . 
    . . . b f f b f a a . . . . . . 
    . . . b b a b f f a . . . . . . 
    . . . c b f b b a c . . . . . . 
    . . . . b a f c c . . . . . . . 
    . . . . . b b c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Decoration)
tiles.placeOnTile(Decoration2, tiles.getTileLocation(12, 6))
let Decoration3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . c a a a c . . . . . . . 
    . . . c c f a b b c . . . . . . 
    . . . b f f b f a a . . . . . . 
    . . . b b a b f f a . . . . . . 
    . . . c b f b b a c . . . . . . 
    . . . . b a f c c . . . . . . . 
    . . . . . b b c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Decoration)
tiles.placeOnTile(Decoration3, tiles.getTileLocation(12, 9))
let Obstacle1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Obstacle)
tiles.placeOnTile(Obstacle1, tiles.getTileLocation(5, 4))
Obstacle1.setImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `)
scene.cameraShake(4, 500)
sprites.destroy(null)
info.setLife(3)
info.changeLifeBy(-1)
info.setScore(0)
info.changeScoreBy(1)
Obstacle1.setFlag(SpriteFlag.Ghost, true)
if (info.score() >= 3) {
    game.gameOver(true)
}
