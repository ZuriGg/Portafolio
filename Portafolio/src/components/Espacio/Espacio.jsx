import React, { useEffect, useRef } from "react";
import "./Espacio.css";

export default function Espacio() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const stars = [];

        const getConfig = () => {
            const width = window.innerWidth;
            // Ajustes según tamaño de pantalla
            if (width < 480) {
                return { numStars: 400, maxSize: 1 }; // móvil pequeño
            } else if (width < 768) {
                return { numStars: 800, maxSize: 1.5 }; // móvil grande / tablet
            } else if (width < 1200) {
                return { numStars: 1500, maxSize: 1.7 }; // portátil
            } else {
                return { numStars: 2000, maxSize: 1.7 }; // escritorio
            }
        };

        const resizeCanvas = () => {
            const { width, height } = canvas.getBoundingClientRect();
            const { numStars, maxSize } = getConfig();

            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            stars.length = 0;
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * maxSize,
                    opacity: Math.random(),
                    speed: 0.002 + Math.random() * 0.08,
                });
            }
        };

        resizeCanvas();

        let animationId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                star.opacity += star.speed;
                if (star.opacity > 1 || star.opacity < 0) star.speed *= -1;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });
            animationId = requestAnimationFrame(animate);
        }

        animate();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="espacio-fondo" />;
}
