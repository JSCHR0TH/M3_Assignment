//Author: Jana Schroth
//Application: The Word Translator
//Usage: Use simple conditional statements

/*
The Word Translator

Usage: Use simple conditional statements

Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window.
If the user enters anything but those four language codes, the application should default to English. 
The result should be (for example):

Hello World translated in French is: Bonjour le monde
*/

let languageCode = window.prompt ('Enter the language code you want to use to translate "Hello World" (es/de/en/fr): ')

if (languageCode == 'es') {
    alert('"Hello World" translated into Spanish is: Hola mundo!')
} else if (languageCode == 'de') {
    alert('"Hello World" translated into German is: Hallo Welt!')
} else if (languageCode == 'fr') {
    alert('"Hello World" translated into French is: Bonjour le monde!')
} else {
    alert('"Hello World" translated into English is: Hello World!')
}