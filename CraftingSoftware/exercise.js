/*
Given a list of words and a string made up of those words (no spaces), return the original sentence in a list.
If there is more than one possible reconstruction, return any of them.
If there is no possible reconstruction, then return an empty array.
For example:
Given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].
Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
 */


// Prints all possible word breaks of given string
function wordBreak(stringLength, dictionary, stringWithWords)
{
    let answer = "";
    wordBreakUtil(stringLength, stringWithWords, dictionary, answer);
}

function wordBreakUtil(stringLength, stringWithWords, dictionary, answer)
{
    for(let i = 1; i <= stringLength; i++)
    {
        let prefix = stringWithWords.substring(0, i);

        // If dictionary contains this prefix, then we check for remaining string.
        // Otherwise we ignore this prefix (there is no else for this if) and try next
        if(dictionary.includes(prefix))
        {
            if(i === stringLength)
            {
                // Add this element to previous prefix
                answer += prefix;
                console.log(answer);
                return;
            }
            wordBreakUtil(stringLength - i, stringWithWords.substring(i, stringLength), dictionary, answer + prefix + " ");
        }
    }
}
// main function
let stringWithWords = "bedbathandbeyond"; // for first test case
let stringLength = stringWithWords.length;                 // length of first string

// List of strings in dictionary
let dictionary = ["bed","bath","bedbath","and","beyond"];
wordBreak(stringLength, dictionary, stringWithWords);