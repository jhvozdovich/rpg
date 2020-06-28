# **Role Playing Game**

#### Author: **_Jessica Hvozdovich, Nitun Datta_**
#### June 23, 2020

### Description

_This application serves as an introduction to functional programming with pure functions, closures, curried functions, and recursive functions. The RPG uses character creation to implement composition for different character types. Functional programming is used to build the logic of battle mechanics. The game keeps track of state with the level up system while also employing object-oriented programming to keep track of charactr attributes. Inventory is also explored to enhance character mechanics with items, heal, or boost other stats._

### Instructions for use:

1. Open Terminal (macOS) or PowerShell (Windows)
2. To download the project Directory to your desktop enter the following commands:
```
cd Desktop
git clone https://github.com/jhvozdovich/rpg.git
cd rpg
```
3. To view the downloaded files, open them in a text editor or IDE of your choice.
* if you have VSCode for example, when your terminal is within the main project Directory you can open all of the files with the command:
```
code .
```
5. Download node and node package manager if they are not already installed on your device. You can find further instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript-8d3b52cf-3755-481d-80c5-46f1d3a8ffeb/installing-node-js-14f2721a-61e0-44b3-af1f-73f17348c8f4).
5. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
6. The command npm run start will build and open the compiled code in a browser of your choice using a local host.

### Known Bugs

No bugs have been identified at the time of this update.

### Support and Contact Information

Please contact me with any suggestions or questions at jhvozdovich@gmail.com. Thank you for your input!  
_Have a bug or an issue with this application? [Open a new issue](https://github.com/jhvozdovich/rpg/issues) here on GitHub._

### Technologies Used

* JavaScript
* Jest
* jQuery
* Git and GitHub

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **User can enter character name** | User Input:"Name: Coraline" | Output: “Welcome Coraline!” |
| **User can choose from multiple character types** | User Input:"warriors" | Output: “Name: Coraline, Type: warriors” |
| **User can assign different characters different abilities** | User Input:"strength" | Output: “Ability: strength” |
| **User can battle enemies** | User Input:"Fight: Zombie" | Output: “Battle start!” |
| **User can attack** | User Input:"Attack with sword" | Output: “Damage: 5” |
| **User can heal** | User Input:"Heal with berry" | Output: "Health: +3” |
| **User can be damaged** | User Input:"Zombie's Turn: Attack" | Output: “Damage: 4” |
| **User can win** | User Input:"Attack - Zombie Health 0" | Output: “Victory!" |
| **User can lose** | User Input:"Attacked - User Health 0" | Output: “Lose!” |
| **User can gain experience** | User Input:"Win battle" | Output: "Experience +20” |
| **User can gain a level** | User Input:"Win Battle - Gain Experience - 51/50" | Output: "Level 2!” |
| **User can add abilities at higher levels** | User Input:"Level 5 - Choose spell: Fireball" | Output: “Player now knows fireball! Damage: 10" |
| **User can pick up item** | User Input:"Pick up - sword" | Output: “Add sword to inventory” |
| **User can drop item** | User Input:"Drop - berry" | Output: “The berry has been removed from the inventory” |
| **User can use item** | User Input:"Use - Berry" | Output: “Health: +3” |

### Planning
* create multiple character classes
* character abilities
* create multiple enemy types
* create items
* experience tracker for levels
* new ability slots with levels
* new inventory slots/unlockable items
* limited use items (berry) and items that persist (sword)

### Stretch Goals
* User can create multiple characters 
* Sell items

#### License

This software is licensed under the MIT license.

Copyright © 2020 **_Jessica Hvozdovich and Nitun Datta_**
