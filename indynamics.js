textSpan.addEventListener("click", () => {
    if (textSpan.style.textDecoration === "line-through") {
        textSpan.style.textDecoration = "none";
    } else {
        textSpan.style.textDecoration = "line-through";
    }
});
