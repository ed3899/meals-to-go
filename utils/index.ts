/**
 * @abstract Generate numbers range start..stop, with increase step
 * @param start 
 * @param stop 
 * @param step 
 * @returns An array of numbers
 */
export const range = (start: number, stop: number, step: number) =>
   Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
   );
