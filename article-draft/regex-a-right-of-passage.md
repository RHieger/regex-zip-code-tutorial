# Regular Expressions&mdash;a Right of Passage for Web Developers

![Photo by ThisIsEngineering (pexels.com)](./images/redheaded-woman-coding.jpg)

<p style="text-align: center; font-weight: bold; margin-top: -10px;
font-size: 13px;">
Photo by ThisIsEngineering (pexels.com)
</p>

##### Intended Audience: Intermediate Developers

## Introduction

The entire software engineering profession, regardless of discipline, eventually faces a challenge along the learning pathway. When a budding or even an experienced developer encounters this challenge, it presents as somewhat of a monolithic barrier. It is almost as if that moment is the discovery of a new and threatening four letter word (though it's really five letters)&mdash;**regex.**

Speaking for myself, when I first encountered **regex,** or **regular expressions** as they are also known, my experience was a disheartening struggle to learn what seemed a mysterious language that, despite its obvious strength, whose utility was not at all obvious.

The purpose of this tutorial is to provide a working demo web application that will search out and display valid zip codes extracted from a test string including characters that in no way comprise a valid zipcode.

But first, let's dive a bit into what regular expressions are.

### What are Regular Expressions?

In a nutshell, what are regular expressions, and what do they do? Well, this is a complex question that is somewhat difficult to answer simply. Perhaps a brief historic perspective on this seemingly arcane language would help to clarify what it is, and even more importantly, what it is capable of doing.

#### The Origin of Regular Expressions

Regular expressions have their roots in a 1951 paper by mathemtician Stephen Cole Kleene entitled **_Representation of Events in Nerve Nets and Finite Automata._** The theories defined in this paper are far beyond the scope of this tutorial, but should you be interested in exploring this theory, you can download the paper [here](https://www.rand.org/content/dam/rand/pubs/research_memoranda/2008/RM704.pdf).

The ideas explored in this paper led to exploration of means to match patterns of characters in character sets or strings in a document.

Practical application of Kleene's theories came into their own around 1968 when they were used to facilitate pattern matching in text editors, and by compilers in their lexical analysis for source code. For more on this, you might want to consult this [article](https://en.wikipedia.org/wiki/Regular_expression).

Of course, a thorough exploration of regular expressions would be impractical for this tutorial. This would deserve a full-fledged course. But I will cover the basics that are needed to realize our project. And this will give a substantial taste of how regular expressions are used and just how important they can be in web applications in particular. 

#### Some Regular Expression Basics

You will often hear mention of Regex engines and there are many different flavors of regular expressions. The table below summarizes some of the better-known engines:


| Regex Engine (Library) | Where It is Used |
| :--------------------- | ---------------- |
| **PCRE** (Perl Compatible Regular Expressions) | This implementation of regular expressions derives from the Perl language often used for server-side scripts in web applications. Perl is compatible to the POSIX standard established in relation to the UNIX operating system.<br /><br />The PCRE implementation found its way into PHP, the Apache HTTP Server, C and C++ languages, to name a few. |
| **FREJ** (Fuzzy Regular Expressions for Java) | This implementatiuon is a library specific to the Java programming language. |
| **EXMAScript** (JavaScript Regular Expressions) | This is the reference library standard used by most JavaScript engines across many browsers. |
| **XRegExp** (Extended JavaScript Regular Expressions | This library, which may be usedc with JavaScript, is a superset of the standard implementation of regular expressions in the JavaScript engine. Coded and maintained by **Steven Levithan,** the releases of this library may be found [here](https://github.com/slevithan/xregexp/releases). |
