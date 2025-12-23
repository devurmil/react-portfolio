import { useEffect, useState } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function useKonami() {
  const [index, setIndex] = useState(0);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key.toLowerCase();

      if (key === KONAMI_SEQUENCE[index].toLowerCase()) {
        const nextIndex = index + 1;

        if (nextIndex === KONAMI_SEQUENCE.length) {
          setActivated(true);
          setIndex(0);
        } else {
          setIndex(nextIndex);
        }
      } else {
        setIndex(0);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index]);

  return { activated, setActivated };
}
