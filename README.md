# Hugo Theme: Mild

Mild is a theme for hugo which is ported from [simpleness](https://github.com/RainerChiang/simpleness).

![screenshot](images/screenshot.png)

## Live Demo

## Features

- MathJax suport
- Google Analytics support
- Comment systems include: disqus, valine
- Table of content

## TODO

- [ ] Pagination for posts

## Quick Start

### 1. Install Hugo

[Download](https://github.com/gohugoio/hugo/releases) the appropriate version for your platform. 

I used [hugo_extended_0.75.1_Linux-64bit.deb](https://github.com/gohugoio/hugo/releases/download/v0.75.1/hugo_extended_0.75.1_Linux-64bit.deb) to develop this theme.

### 2. Create a New Site

```shell
hugo new site myBlog
```

### 3. Use hugo theme mild

```shell
cd myBlog
git init
git submodule add https://github.com/mildronize/mild-theme.git themes/mild
```

copy the content of exampleSite

```shell
cp themes/mild/exampleSite/config.toml .
cp -r themes/mild/exampleSite/content .
```

build site

```shell
hugo server
```

then, open http://localhost:1313/ in your browser。

## Local Development

```
cd exampleSite/
hugo server --themesDir ../..
```

## Original Author
- Rainer Chiang