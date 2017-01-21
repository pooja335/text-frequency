# Word Frequency

## Summary
This app accepts a text document from the user, counts how often each word is used in it, and reports the top 25 most frequently used. Words with the same root word (for example: talk, talks, talked) are counted as the same word. For a more information, see <link>Stemming Rules. 

## Requirements

## Instructions
View the app at pooja335.github.io/word-frequency

To run the unit tests:
1. Download or clone this repository
2. `npm install`
3. `npm test`

## Stemming Rules
This app finds the root of each word by trying to fit it into a broad category of words based on its morphology. Once the word has been placed into a category, the suffix of the word is removed. If more than one of the following rules can be applied to a word, it follows whichever rule comes first on this list. 

1. If a word ends with `-ies` or `-ied`, remove those 3 letters and add `-y`
2. If a word ends with `-oes`, `-ses`, `-zes`, `-xes`, `-ches`, or `-shes`, remove `-es`
3. If a word ends with `-s` and the previous letter is not s, remove `-s`
4. If a word ends with `-ed` after double consonants f, l, s, or z, remove `-ed`
5. If a word ends with `-ing` after double consonants f, l, s, or z, remove `-ing`
6. If a word ends with `-ed` after double consonants other than f, l, s, or z, remove `-ed` and one of the repeated consonants
7. If a word ends with `-ing` after double consonants other than f, l, s, or z, remove `-ing` and one of the repeated consonants
8. If a word ends with `-ed`, remove `-ed`
9. If a word ends with `-ing`, remove `-ing`

## Libraries/Frameworks Used

## Known Issues
- Rule 3 above causes problems for singular words ending with s. For example, bus will get changed to bu. 
- Rules 8 and 9 above cause problems for root words ending with e. For example, skated and skating will get changed to skat. 
