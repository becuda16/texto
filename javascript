let text = document.querySelector('.text');
let spans = text.innerText.split('').map((letter, i) => {
    return `<span style="transition-delay:${i*40}ma; filter:hue-rotate(${letter}
    </span
}