# Text-Splitter

A web application for splitting text into individual elements based on user-defined criteria.

## Features

*   **Input**: The user can input a large block of text into a textarea.
*   **Split Options**: The user can choose how to split the text:
    *   By Characters: Split the text into sections of a specified length (e.g., 10 characters).
    *   By Words: Split the text at word boundaries (e.g., by spaces, periods, or other punctuation marks).
    *   By Sentences: Split the text at sentence boundaries (e.g., by periods, exclamation points, or question marks).
    *   By New Lines: Split the text into sections separated by new lines.
*   **Split Options for Characters**: When splitting by characters, the user can choose to split at a specific number of characters or a percentage of the total length.
*   **Output**: The resulting split text is displayed in a list of buttons, each representing an individual section. Clicking on a button copies its value to the clipboard.

## How it Works

1.  The user inputs a block of text into the textarea and selects one of the split options (Characters, Words, Sentences, or New Lines).
2.  If the user chooses to split by characters, they can select either a fixed number of characters per split or a percentage of the total length.
3.  The application then splits the input text according to the selected criteria and displays the resulting sections as buttons.
4.  When a button is clicked, its value is copied to the clipboard, and a toast notification appears for 3.5 seconds.

## Code Structure

The code consists of four main files:

*   `index.html`: The HTML file that defines the user interface and layout of the application.
*   `script.js`: The JavaScript file that contains all the functionality for splitting text and handling user interactions.
*   `style.css`: The CSS file that contains the styling of the user interface.

## Notes

The code uses a combination of built-in JavaScript functions and custom implementations to achieve its goals. The `split()` method is used extensively throughout the application, with some modifications made to handle specific use cases.

Overall, Text-Splitter provides an easy-to-use interface for splitting text based on various criteria, making it suitable for applications with character limits.
