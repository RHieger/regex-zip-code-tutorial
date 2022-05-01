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
const regex = /^[0-9]{5}(-[0-9]{4})?/gm;
```

This same regular expression declared using its object constructor looks like this:

```
const regex = new RegExp(
  '^[0-9]{5}(-[0-9]{4})?',
  'gm'
);
```