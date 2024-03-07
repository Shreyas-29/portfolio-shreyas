import { useRef, useEffect } from 'react';

const useCardEffect = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current) {
            const blob = cardRef.current.querySelector('.blob');

            window.addEventListener('mousemove', (event) => {
                if (blob) {
                    const cardRect = cardRef.current?.getBoundingClientRect();
                    const x = event.clientX - cardRect?.left!;
                    const y = event.clientY - cardRect?.top!;

                    // @ts-ignore
                    blob.style.opacity = '1';
                    // @ts-ignore
                    blob.style.transform = `translate(${x - cardRect?.width! / 2}px, ${y - cardRect?.height! / 2}px)`;
                }
            });

            return () => window.removeEventListener('mousemove', (event) => { }); // Cleanup
        }
    }, []);

    return cardRef;
};

export default useCardEffect;
