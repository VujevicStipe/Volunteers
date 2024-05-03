export function validateForm<T>(obj: T): boolean {
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      obj[key as keyof T] === ""
    ) {
      console.log(`Please Enter all Data`);
      return false;
    }
  }
  return true;
}
