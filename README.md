# The Odin Project: Restaurant Page Project

Practicing DOM manipulation by dynamically rendering a simple restaurant homepage

Check out the [project](https://joominchoi.github.io/restaurant-page/)

**Course reference pages:** \
[Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)

- If you're in a development environment and want to watch for changes and automatically trigger a rebuild
  - *npx webpack --watch*
- Then run 
  - *open dist/index.html*

## Learnings
- Setting active and inactive components by the addition and removal of classes
- I initially thought that the above will allow me to replicate the function explained in the first
point in the recapping section below. I believe this is achievable but I think it will be
overengineering and I kept the removal and addition of the 'active' classname of the active tab
just for reference.
- Double check, triple check variable names, file names, classnames, ids etc when program is not running is expected

## Recapping
- Removing content from one tab to be replaced by content from another tab does not have to be
overcomplicated or overengineered. It can be as simple as setting the main.textContent = "" and then
appending desired content with  main.appendChild(createHome())