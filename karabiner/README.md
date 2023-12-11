# My Karabiner keybindings

[Karabiner-Elements](https://karabiner-elements.pqrs.org/) is a free, open-source
utility for building complex keybindings and mappings on MacOS.

## Public rules I recommend

The app is full of rules contributed by folks of varying quality. Here are some I use and recommend:

* PC-Style Shortcuts:
  * PC-Style Home/End
  * PC-Style Copy/Paste
  * PC-Style Control+Up/Down/Left/Right
  * PC-Style Reload(F5/Ctrl+R)
  * PC-Style Browser Zoom (Ctrl+Plus/Minus/0)
  * PC-Style Browser open location (Ctrl+L)
  * PC-Style New Tab
  * PC-Style Undo
  * PC-Style Redo
  * PC-Style Select-All
  * PC-Style Find
  * PC-Style Bold/Italic/Underline (Ctrl+B/I/U)

## My custom rules

This repo includes my custom rules. They are highly specific to my workflow and thus I have not contributed them upstream. However, they maybe great reference for people wanting to do similar things.

To use these:

```shell
cd ~/.config/karabiner/assets/complex_modifications/
ln -s <path_to_checkout>/karabiner/public/json/phil.json
```

Then, in Karabiner settings, to to Complex Modifications, Add Rule, scroll down to "Phil's make Mac more like Linux shortcuts" and add rules you want.

To modify them:
* edit src/json/phil.json
* run Make
