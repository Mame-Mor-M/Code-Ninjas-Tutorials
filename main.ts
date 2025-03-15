let Cody = sprites.create(assets.image`Ninja`, SpriteKind.Player)
scene.cameraFollowSprite(Cody)
controller.moveSprite(Cody)
tiles.setCurrentTilemap(tilemap`Dojo`)
