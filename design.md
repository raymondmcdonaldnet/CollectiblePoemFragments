# Plugin design

Basic, informal plugin design document.

## Features

- Adds a custom collectibles scene accessible from the command menu (customizable command name)
- Collectible scene displays list or grid of collectibles (optionally hide uncollected collectibles or just gray them out) as images with captions
- Collectibles scene optionally allows opening a pop-up window to see what collectibles form together (a poem in my game, could be a puzzle in other games; break into separate plugin?)\
- Optionally toggle designated switches (customize in plugin settings) based on percentage of collectibles collected or when all are collected (robust enough to allow for "uncollecting" collectibles later with granular options for if they are all collected or have been collected at some point)

## Plugin parameters

- Enable plugin (boolean, extra check to ensure plugin should be enabled; also allows toggling plugin with a plugin command)
- Designated collectibles (list of integers representing which items in the database are the game's collectibles)
- Collectible userdata (list of strings, should be parallel with designated collectibles, represents user data for each collectible to be used in any way desired)
- Hide uncollected collectibles (boolean, determine if unobtained collectibles should be hidden (if enabled) or grayed out on the collectibles scene)
- Enable switch toggling functionality (boolean, enable system for toggling switches based on collectibles collected)
- First switch designation (integer, the index of the switch to toggle when next parameter collectibles collected percentage is met)
- Is first switch reversible (boolean, whether the first switch should be toggled if collectible percentage goes below threshold)
- First switch collected percentage (number, the percentage of collectibles to collect to toggle the first designated switch)
- Second switch designation (integer)
- Is second switch reversible (boolean)
- Second switch collected percentage (number)
- Third switch designation (integer)
- Is third switch reversible (boolean)
- Third switch collected percentage (number)
- Fourth switch designation (integer)
- Is fourth switch reversible (boolean)
- Fourth switch collected percentage (number)
- Fifth switch designation (integer)
- Is fifth switch reversible (boolean)
- Fifth switch collected percentage (number)
- (Add more like first five switch parameters if you feel it necessary)

## Plugin commands

- RMN_CollectiblePoemFragments EnablePlugin (true/false) (allows enabling/disabling plugin at runtime)
- RMN_CollectiblePoemFragments AddCollectibleIndex (integer) (allows adding new collectible items to the list at runtime, prompts list to be sorted and userdata list to be updated accordingly)
- RMN_CollectiblePoemFragments RemoveCollectibleIndex (integer) (allows removing collectible items from the list at runtime, prompts list to be sorted and userdata list to be updated accordingly)
- RMN_CollectiblePoemFragments UpdateCollectibleUserdata (integer) (string) (allows modifying designated collectible index userdata at runtime)
