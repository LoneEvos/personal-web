'use client';

import { useEffect, useMemo, useState } from 'react';

interface TextTypeProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}

export function TextType({
  phrases,
  className,
  typingSpeed = 58,
  deletingSpeed = 32,
  pauseMs = 1450,
}: TextTypeProps) {
  const safePhrases = useMemo(
    () => phrases.filter((phrase) => phrase.trim().length > 0),
    [phrases]
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = safePhrases[phraseIndex] ?? '';
  const visibleText = currentPhrase.slice(0, visibleLength);

  useEffect(() => {
    if (safePhrases.length === 0) return;

    const isComplete = visibleLength === currentPhrase.length && !isDeleting;
    const isEmpty = visibleLength === 0 && isDeleting;
    const delay = isComplete ? pauseMs : isDeleting ? deletingSpeed : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % safePhrases.length);
        return;
      }

      setVisibleLength((length) => length + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [
    currentPhrase.length,
    deletingSpeed,
    isDeleting,
    pauseMs,
    safePhrases.length,
    typingSpeed,
    visibleLength,
  ]);

  return (
    <span className={className}>
      {visibleText}
      <span className="ml-1 inline-block h-[1em] w-px translate-y-0.5 animate-pulse bg-teal" />
    </span>
  );
}
