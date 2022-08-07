const liRefs = document.querySelector("#categories")
console.log(`Number of categories: ${liRefs.children.length}`);
[...liRefs.children].forEach(elem =>
    console.log(`Category: ${elem.children[0].textContent}
Elements: ${elem.children[1].children.length}`))