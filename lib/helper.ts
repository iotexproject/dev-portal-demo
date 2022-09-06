export const helper = {
  promise: {
    async sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async runAsync<T, U = Error>(
      promise: Promise<T>
    ): Promise<[U | null, T | null]> {
      return promise
        .then<[null, T]>((data: T) => [null, data])
        .catch<[U, null]>((err) => [err, null]);
    },
  },
  string: {
    toFixString(str: string, length: number) {
      if (str && str.length > length) {
        return str.substr(0, length) + "...";
      } else {
        return str;
      }
    },
    truncate(
      fullStr: string,
      strLen: number,
      separator: string | undefined
    ): string {
      if (fullStr.length <= strLen) return fullStr;

      separator = separator || "...";

      let sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2);

      return (
        fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars)
      );
    },
  },
};
