```template
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

```
# Time to Decorate!

## Time to Decorate! @showdialog
Hello ninjas, it's time to decorate! 

As Cody makes his way back to the center he creates a map pinpointing the locations where each decoration will be placed. Your task is to make sure all decorations are placed in the correct location

## Step 1: It's a Mess in Here!
Add more obstacle sprites around the dojo that Cody must avoid to reach the ninja lab. Use the given assets or create sprites of things you may see around the dojo.

## Step 2: Complete the Tilemap
Cody wants to place ninja stars all along the board but some whiteboard pieces are missing, fix the code so that Cody can get to the whiteboard.

Complete the tilemap so that there are no empty squares.

## Step 3: Make Obstacles Interactive
The obstacles don't do anything! Edit the code to make sure overlapping an obstacle decreases player health.

## Step 4: Time to Decorate!
The Dojo is finally complete and now it's time to decorate! Cody wants to place down all the decorations he bought. 

Fix the code so that Cody can drop his decorations off at each designated location.

## CONGRATULATIONS!!! @showdialog
You completed the second riddle! Make sure to submit your solution link on the Anniversary website, a sensei will check your submission ASAP!
