// intentionally importing from package_1 to create a dependency
import isOdd from "package_1";

export default function isEven(num: number) {
  // opposite of isOdd == isEven
  return !isOdd(num);
}
