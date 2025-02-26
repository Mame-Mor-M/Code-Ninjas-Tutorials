```template
namespace SpriteKind {
    export const OwnedItem = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    Shop_Sign.sayText("Welcome to the " + Fake_Name, 1000, false)
    sprite.setPosition(130, 250)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Door tile`, function (sprite, location) {
    Shop_Sign.sayText("Welcome to the " + Fake_Name, 1000, false)
    sprite.setPosition(130, 225)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (info.score() < 4) {
        otherSprite.follow(sprite, 40)
        otherSprite.setKind(SpriteKind.OwnedItem)
        sprite.sayText("Purchased: Ninja Star", 1000, false)
    } else {
        otherSprite.sayText("Not enough coins")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let Fake_Name = ""
let Shop_Sign: Sprite = null
tiles.setCurrentTilemap(tilemap`Store`)
let Cody = sprites.create(assets.image`Ninja`, SpriteKind.Player)
tiles.placeOnTile(Cody, tiles.getTileLocation(8, 4))
Shop_Sign = sprites.create(assets.image`Sign`, SpriteKind.Enemy)
tiles.placeOnTile(Shop_Sign, tiles.getTileLocation(9, 11))
scene.cameraFollowSprite(Cody)
controller.moveSprite(Cody)
Fake_Name = "N1nnja Sh00p"
let Real_Shop_Name = "Ninja Shop"
let NinjaStar = sprites.create(assets.image`Ninja Star`, SpriteKind.Projectile)
tiles.placeOnTile(NinjaStar, tiles.getTileLocation(4, 7))
```

# Time to Decorate!

## Time to Decorate! @showdialog
Hello ninjas, it's time to decorate! 

As Cody makes his way back to the center he creates a map pinpointing the locations where each decoration will be placed. Your task is to make sure all decorations are placed in the correct location

## Step 1
It's a mess in here! 

Add more obstacle sprites around the dojo that Cody must avoid to reach the ninja lab. Use the given assets or create sprites of things you may see around the dojo.

## Step 2
Cody wants to place ninja stars all along the board but some whiteboard pieces are missing, fix the code so that Cody can get to the whiteboard.

Complete the tilemap so that there are no empty squares.

## Step 3
The obstacles don't do anything! Edit the code to make sure overlapping an obstacle decreases player health.

## Step 4
The Dojo is finally complete and now it's time to decorate! Cody wants to place down all the decorations he bought. 

Fix the code so that Cody can drop his decorations off at each designated location.


## Step 5 @showdialog
THE ANSWER IS ATTACK