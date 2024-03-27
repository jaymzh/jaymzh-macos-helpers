# MacOS stuff

I'm forced to use a Mac at work, here's where I document (and sometimes write) stuff to make it less painful.

## Keybindings

I use [Karabiner-Elements](https://karabiner-elements.pqrs.org/) to do complex keybindings and key modifications with a simple interface to map more common Linux-y keybindings to MacOSX. You can read about my setup and see my custom keybindings in [karabiner/README.md](karabiner/README.md).

## Virtual Desktops with Multiple Monitors

Virtual Desktop defaults in MacOS are pretty broken when you have multiple monitors. Each monitor becaomes a virtual desktop, and then when you make additional virtual desktops they can be assigned to either monitor rather. But you can change this. Here's the settings I recommend:

- System Settings
  - Desktop & Dock
    - Mission Control
      - `Automatically rearrange Spaces based on most recent use` - **DISABLE** - otherwise keyboard shortcuts and moving around becomes unpredictable
      - `Displays have separate Spaces` - **DISABLE** - In Linux switching between virtual desktops does so on all monitors, not one at a time.
        - **NOTE**: Disabling this often **enables** `Mirroring` in `Displays`, so you’ll want to go turn that off, again.
  - Keyboard
    - Keyboard Shortcuts
      - Mission Control
        - Expand the `Mission Control` section
          - Set keyboard shortcuts for your desktops, I use Command-1, Command-2, etc.

## Windows getting re-arranged

Obviously, when you connect or disconnect from monitors, windows will move around. In my experience, if you have two monitors connected to a laptop and come back and wake up the laptop, it can wake up one monitor before the others, doing this again.

The best solution I've found to this is [Moom](https://manytricks.com/moom/). Moom allows you to save window layouts and easily return to them which can making life much easier. You can trigger "arranging" via keyboard shortcut, do it from the toolbar, or trigger on certain other events. It currently can't seem to move Slack though, I have a bug open on it. Moom is $10, but it's well worth it.

### Vertical and Horizontal Maximization

One thing that was unsolved for me for a long-time, actually is solvable with a somewhat hidden feature in Moom.

If you make a "Resize" action in Moom, and click the *middle* dot, you can set one dimention as "=" and another dimention as "100%" giving you either vertical or horizontal mximization of a window.

You can then make a "revert to original dimentions" action.

You can see examples of this in `Moom > Moom Help > Custom Controls > 6) Resize > Special Modes`.

## Focus Follows Mouse

The UNIX/X11 standard is that focus follows the mouse pointer, not the click. OS X does not support this natively, but you can get it.

Various tiling window managers support some version of this, but I didn't want a tiling WM. I found [AutoRaise](https://github.com/sbmpost/AutoRaise).

```bash
brew tap dimentium/autoraise
brew install autoraise --with-dexperimental_focus_first
brew services start autoraise
```

If you want focus-without-raise, then do:

```bash
mkdir ~/.config/AutoRaise
echo 'delay=0' >> ~/.config/AutoRaise/config
brew services restart autoraise
```

## Notifications

Why doesn't google calendar notify you for your meetings even though that tab can notify? Because you have to go tell MacOS that Chrome can notify.

* System Preferences
  * Notifications
    * select `Google Chrome` **and** `Google Chrome Helper`

## Unsolved problems

* highlight-to-copy/middle-click-to-paste - this works in Terminal only
* send-window-to-back
* send-window-to-another-desktop
* alt-click to drag windows
