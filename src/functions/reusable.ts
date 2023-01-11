function randomNumbers(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max+1);
    let result = Math.floor(Math.random() * (max - min) + min);
    if (result >= max) {
        result = max-1;
    }
    return result;
}

export function generateColors() {
    let red = randomNumbers(0,255);
    let green = randomNumbers(0,255);
    let blue = randomNumbers(0,255);
    let color = `rgb(${red},${green},${blue})`;
    let colorA = `rgba(${red},${green},${blue},0.5)`;
    return {color, colorA};
}