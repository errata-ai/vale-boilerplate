# Introduction

Hey everyone! Welcome to this Vale demo project.

Here, we're trying to test out Vale to see it's usefulness in linting documentation.

Should this go well, this could help us move into a Docs as Code workflow.

# What Vale Does

Vale is a CLI tool that scans our files and lints them. It's like the linting tools we use for code, but this time, it works on prose. By running Vale, we can ensure that our Documentation meets a consistent style throughout our project's lifecycle.

Vale handles things like proper spelling, consistent casing, following certain indexes and even some writing conventions.

One rule I liked is when we have to specify or define an acronym before we can use it. For instance, we have to specify Documentation As Code (DAC) before we can use DAC in the rest of the document.

It's rules like this that make me feel like Vale could be a useful tool for us. If we can use tools like this, then following DAC in our projects could become easier. robust and consistent.

# Why Vale, not Grammarly?

At first, it sounds an awful lot like Grammarly. Why can't we use that instead? That way, we can even write our documentation in Confluence.

## Ruleset

Grammarly has a single set of rules. Think of it like a profile. By adding all these rules, they get added to one profile. With Vale, we can set these rules per project. That way, we're not messing up existing rules used everywhere else.

## Coding Terms

When using Vale, we'll be documenting our code. That means the words used may not always exist in a dictionary. Some of them may even have weird casing that's not found in normal prose. We can configure Vale to look out for these. Words like MongoDB, variableName or even GCE-123 can be words that we configure so we all use them properly and consistently.

## Packaging

Vale has a feature, where it can package it's styles, vocabularies and configurations in a zip file. That file must be publicly hosted. Even a release on GitHub should work. Another project with Vale can look for that file, download it and set it up, so we can share configurations across projects. This makes it easy to create a base ruleset for all our projects, while certain niche scenarios can have their own customizations.

# Running Vale

Since Vale is a CLI tool, we need to run it in the Command Line.

We run `vale path/to/file`, replacing `path/to/file` with the path to our file. It could be in the current folder, or a sub-folder. Either way, passing in the path runs Vale on that file.

To run Vale on more than one file at once, we pass the paths in, separating them with a space.
