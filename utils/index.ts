import { getRandomBytes } from "expo-random";

/**
 * @abstract Generate a range of number from start to stop, with increase step
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

/**
 * @abstract Generates a random string
 * @requires getRandomBytes from "expo-random"
 * @param bytes_
 * @returns
 */
export const genRandomString = (bytes_: number) =>
   getRandomBytes(bytes_).join();
