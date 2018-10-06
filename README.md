# Smart Enter

Smart Enter is a VS code extension to replace the default action of 'Enter' button to jump out of bracket.

## Features

Usually when you type `'{'` in VS Code, the editor will automatically give you `'{}'` and put the cursor in side the bucket like `'{|}'`. So you will have to press right-arrow to move your cursor to `'{}|'` which is not so convenience.

This extension replace the default action of 'Enter' button to move the cursor out of bracket or specific characters, such as:
```
) ] } > " ' : ; / |
```

## Repository
[Source Code on Github](https://github.com/vinlyx/vscode-smartenter)

## Extension Settings

This extension contributes the following settings:

* `smartenter.chars`: A string of characters that will enable smart enter

## Keybindings
* `enter`: Active smart enter function.
* `ctrl+enter`: Force to active origin enter instead of smart enter

## Known Issues

None

## Release Notes


### 0.1.0

Initial release


-----------------------------------------------------------------------------------------------------------

