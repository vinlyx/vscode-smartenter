'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "smartenter" is now active!');
    const matchChar = vscode.workspace.getConfiguration().get("smartenter.chars");
    let bracketEnd = new Set(matchChar.split(""));

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable_SE = vscode.commands.registerCommand('smartEnter', () => {
        // The code you place here will be executed every time your command is executed
        const editor = vscode.window.activeTextEditor;
        let currentLineText = editor.document.lineAt(editor.selection.active.line).text;

        // Display a message box to the user
        let position = editor.selection.active;
        let nextChar = currentLineText.substring(position.character, position.character+1);
        if (bracketEnd.has(nextChar)) {
            var newPosition = position.with(position.line, position.character+1);
            var newSelection = new vscode.Selection(newPosition, newPosition);
            editor.selection = newSelection;
        }else {
            vscode.commands.executeCommand("type", {
                "source": "keyboard",
                "text": "\n"
            });
        }
        // console.log(position);
        // vscode.window.showInformationMessage("|" + nextChar + "|")
        // vscode.window.showInformationMessage("Done");
        // vscode.commands.executeCommand("lineBreakInsert");
    });
    context.subscriptions.push(disposable_SE);

    let disposable_FE = vscode.commands.registerCommand('forceEnter', () => {
        vscode.commands.executeCommand("type", {
            "source": "keyboard",
            "text": "\n"
        });
    });
    context.subscriptions.push(disposable_FE);
}

// this method is called when your extension is deactivated
export function deactivate() {
}