# Gentleman HTPC Media Manager

A NodeJS setup to manage files with multi-select options

## Installation

`npm install -g gentleman`

## Usage

Handy when you want to move your files elsewhere instead of just deleting it.

> NOTE: For now only the action `delete` is implemented. The next version will have `move` implemented as well.

To delete your files:

`gentleman delete [movies, series]`

## How does it work

### First run (fresh install)

By running `gentleman delete [movies, series]` you will be presented with the chance to set up your directories to be saved in a configuration file stored in your user folder. On Mac and Linux computers this would be in `~/.gentleman/config.json`.

The first question you'll get is to set your Media directory. Here you should fill in the absolute path to your Media library.

```
This is the first time you're running this.
Please take the time to set up your configuration.
? Path to your Media directory: (/Users/dapperuser/Media)
```

The second question you'll be asked is to set your Movies directory. Usually this one resides inside your Media directory.

```
? Path to your Movies directory: (/Users/dapperuser/Media/Movies)
```

The last question you'll get is to set your TV Series directory. Same as above it assumes you have this inside your Media directory.

```
? Path to your TV Series directory: (/Users/dapperuser/Media/TV Series)
```

### Deleting files/folders

Once you've got it all set up you can start deleting files.

#### Warning: Deleting files is irreversible! You can not undo this!

When you run the command `gentleman delete movies` you will get a list of the movie files/directories that are contained in your Movies folder specified in during your configuration setup.

Example result:

```
? Choose the directories/files you wish to delete: (Press <space> to select)
❯◯ Cras Elit Sit
 ◯ Cursus Adipiscing Consectetur
 ◯ Quam Nullam Etiam
 ◯ Sem Lorem Egestas
 ◯ Ullamcorper Vestibulum Cras.txt
 ◯ Vehicula Magna Ultricies
 ◯ Venenatis Sit Magna
```

After you've selected one or more directories or files you will get a final question making sure you know what's about to happen.

The only thing you have to do here is to answer `y` (yes) or `n` (no). The default preselected answer is `n`. So if you accidentally press [enter] too fast nothing will happen yet.

```
The following list of files/folders are scheduled for demolition:
- Fusce Ornare Tortor → "/Users/dapperuser/Downloads/Temp_Media/Movies/Fusce Ornare Tortor"
- Ornare Vestibulum Adipiscing → "/Users/dapperuser/Downloads/Temp_Media/Movies/Ornare Vestibulum Adipiscing"
- Ullamcorper Vestibulum Cras.txt → "/Users/dapperuser/Downloads/Temp_Media/Movies/Ullamcorper Vestibulum Cras.txt"

? Are you sure you want to delete these files? (y/N)
```

After this the files will be permanently deleted and removed from your Movies directory. If you've executed `gentleman delete series` this would be from your TV Series directory, obviously.

```
✪ Success!

The following directories/files were successfully deleted:
- Cras Elit Sit → "/Users/dapperuser/Downloads/Temp_Media/Movies/Cras Elit Sit"
- Cursus Adipiscing Consectetur → "/Users/dapperuser/Downloads/Temp_Media/Movies/Cursus Adipiscing Consectetur"
- Quam Nullam Etiam → "/Users/dapperuser/Downloads/Temp_Media/Movies/Quam Nullam Etiam"
```

## Why?

When you have a directory with a whole bunch of files or folders, like a huge Media folder, you might want to purge it from some unwanted ones once in a while. For my own purpose I created this script to better manage my Media folder and clean it up once in a while from some old or outdates files.

## Roadmap (a.k.a. Features I still need to do but didn't have the time for yet)

- Moving files, instead of deleting them
-- Renaming target file other than original filename
- Improve configuration file structure
- Add other media types to handle

### Highway Roadmap (a.k.a. The Big Huge Wishlist for when I have too much time on my hands)

- Develop Gentleman API
- Develop Gentleman Web UI

## Credits

### Contributors

Mark de Jong <mark@markdejong.com>

### Thanks & Credits

[Gabriele di Stefano](https://github.com/gabrieleds) for inspiring me to do more with NodeJS.

### License

[MIT License](https://github.com/mistermark/dapper-media-manager/blob/master/LICENSE)
