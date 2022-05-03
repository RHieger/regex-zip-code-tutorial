# Regular Expressions&mdash;a Rite of Passage for Web Developers

![Photo by ThisIsEngineering (pexels.com)](./images/redheaded-woman-coding.jpg)

<p style="text-align: center; font-weight: bold; margin-top: -10px;
font-size: 13px;">
Photo by ThisIsEngineering (pexels.com)
</p>

##### Intended Audience: Intermediate Developers

## Article Fragments from Outline to Be Completed

## Just Enough Regex

To get an idea of how **regular expressions** work, let's use as our starting point the regular expression used by our mini application. There is something to be said for learning by doing rather than relying heavily on theory.

Let's take a quick look at our **regular expression** and pick it apart piece by piece to understand what is being asked of the **regex engine**. To reiterate, here it is again:

```
/^[0-9]{5}(-[0-9]{4})?/gm
```

Looking at this cryptic line of code, you might be asking yourself, **_"What is this gobbledygook?"_**

I assure you that in a few moments, this will look less intimidating.

Let's break this into component parts and that put it together again.

If we think of **Regex** as a symbolic representation of patterns of characters we wish to be matched, we can begin to classify different kinds of symbolic characters, which is exactly how we will bein to break down this regular expression.

In **JavaScript**, **regular expressions** are represented in one of two ways:

1. An object literal.
2. An object declared with a constructor.

The object literal notation is that we see above minus its declaration. In fact, the code that yhou will be writing soon uses this notation as shown here:

```
const regex = /^[^A-Za-z][0-9]{5}(-[0-9]{4})?/gm;
```

This same regular expression declared using its object constructor looks like this:

```
const regex = new RegExp(
  '^[^A-Za-z][0-9]{5}(-[0-9]{4})?',
  'gm'
);
```

Both of these syntax work identically. **_Is there a time one or the other should be used?_** 

Yes, actually there is. According to the Mozilla Developer Network  

> The literal notation results in compilation of the regular expression when the expression is evaluated. Use literal notation when the regular expression will remain constant. For example, if you use literal notation to construct a regular expression used in a loop, the regular expression won't be recompiled on each iteration.


For more information on this, you can consult this [posting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#literal_notation_and_constructor).

### The Anatomy of a Regular Expression

Now let's break this expression down into its component parts, which may be defined as follows:

1. **Delimiters**
2. **Anchors**
3. **Character Sets and Ranges**
4. **Quantifiers**
5. **Capturing Groups**
6. **Flags**

All six of these components come into play for our regular expression. Let's take these one at a time.

**Delimiters.** In JavaScript **object literal notation,** regular expressions are delimited on either side by forward slashes. Everything that appears between these slashes is a representation of the pattern for which we wish to find matches in our test string.

**Anchors.** An anchor does not match any specific character in a test string. Rather it defines the beginning or end point of the match we wish to see returned by the **regex engine.**

The **caret symbol** (`^`) represents the beginning of the match for which we are searching. For example, if we want to match any instance of the letter `J` at the beginning of our pattern, the syntax would be `^J`. On the other hand, the **dollar sign** ($) represents the end of the match for which we are searching. The **dollar sign** symbol is used at the end of the string pattern and effects the character or character set immediately preceding it.

**Character Sets and Ranges.** A character set is a specified set of characters, which may be literal characters or ranges of characters valid to our desired string pattern. What I mean by this will become clear in a few moments when I pick apart the **regular expresssion** that is the basis for our mini application. Character Sets are enclosed by **square brackets**.

**Quantifiers.** A quantifier specifies the minimum or maximum instances of a given character (or character within a character set) desired in a match. It may also specify an exact number of characters desired in a pattern match.

**Table 2** below shows some uses of thes quantifiers:

[TABLE 2 HERE]

**Capturing Groups.** Notated by the use of parentheses, **capturing groups** set a pattern sequence to be taken as a whole, rather than its constituent parts. In other words, if we have a capturing group such as this...

`([A-G]-0[0-9]{3})`

...what we are saying is **match any complete pattern** that starts with any capital letter `A` through `G`, followed by a hyphen and `0`, then finally exactly 3 digits between `0` and `9`.

**_How does this differ from a plain character set?_** In a character set, unless a quantifier follows it immediately such as in the sequence `[0-9]{3}` above, the **regex engine** will match only 1 character that falls within the range specified.

With a **capturing group,** on the other hand, a sequence is analyzed as a whole and must be matched as a whole. This proves very useful in our mini application, as you will see.

**Flags.** With flags we reach perhaps the easiest to understand of all the syntax thus far described. Flags have impact on the way the **regex engine** parses the test string passed to it.

The JavaScript flavor of **regular expressions** has six flags, but we will confine our examimnation to the three you will probably most often encounter. These flags occur at the end of a **regular expression** after the closing forward slash. They are:

1. `i`&mdash;the case-insensitive flag specifies that alphanumeric characters will be matched whether they are upper case or lower case.
1. `g`&mdash;the global flag specifies that all mmatches from beginning to end of the test string will be returned. By default, the **regex** engine would read the test string from left to right and once it returns the first match, would exit, ignoring any matches beyond the first.
1. `m`&mdash;the multiline flag ensures that the engine continues to search beyond the boundary of a line of text to any lines of text that follow.