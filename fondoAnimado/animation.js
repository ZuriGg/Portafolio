/* document.addEventListener('DOMContentLoaded', () => {
    const grass = document.getElementById('grass');
    const numberOfBlades = 50; // Número de líneas de césped que deseas

    for (let i = 0; i < numberOfBlades; i++) {
        const blade = document.createElement('div');
        blade.classList.add('blade');

        // Genera una altura aleatoria entre 50px y 150px
        const height = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
        blade.style.height = `${height}px`;

        // Posiciona aleatoriamente en el contenedor
        const left = Math.floor(Math.random() * 100); // Posición horizontal en porcentaje
        const top = Math.floor(Math.random() * (grass.clientHeight - height)); // Posición vertical en píxeles
        blade.style.left = `${left}%`;
        blade.style.top = `${top}px`;

        grass.appendChild(blade);
    }
 */

const briznas = document.querySelectorAll(".blade");

briznas.forEach((briznas) => {
    const delayAleatorio = Math.random() * 2;

    const duracionAleatoria = 2.5 + Math.random() * 1.5;

    const alturaAleatoria = 2 + Math.random() * 1;

    briznas.style.delayAleatorio = `${delayAleatorio}s`;
    briznas.style.duracionAleatoria = `${duracionAleatoria}s`;

    briznas.style.height = `${alturaAleatoria}vh`;
});
