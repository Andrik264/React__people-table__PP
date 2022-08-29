# React - People table

This project was written by React library, using SCSS, Bulma, Bootstrap and also with BEM technology.
In this project were used promises, fetch, BEM, scss, React technologies, Routing, UrlSearchParams, Context.
All information was taken from this [People_table_API](https://mate-academy.github.io/react_people-table/api/people.json).
* [DEMO LINK](https://Andrik264.github.io/React__people-table__PP)

## Description

It is a web-page about some unreal pople.
There are 4 pages:
1. Home page.
  Just a defaut page like dashboard;
2. People page.
  Here is all information about each person listed in the table;
3. Selected person page
  This page is similar to the previous, but the selected person will be highlighted
  and the link will be different. So if you copy the pathname and open it in few days - the page will be exactly the same.
4. Not found page.
  Special page for invalid pathnames.

## Abilities
You are given to do some interesing things, such as:
1. Filtering
  Filtering people by `name`, `motherName` and `fatherName`.
  The entered value into the input uptades URL with `debounce` of 500ms;
2. Sorting
  Sorting by `name`, `sex`, `born` and `died` by clicking on the cell containing column title
  and sorting people in both directions: `asc` and `desc`;
3. Adding a person
  Popup window with a form to add a new person

## Local development

### Dependencies
* Node v12.16.3 and higher
* NPM v6.14.4 and higher

### Installing
* Fork and clone this repository
* Run `npm install` in your terminal
* Run `npm start`
* Switch to a new branch `git checkout -b *any name*`
