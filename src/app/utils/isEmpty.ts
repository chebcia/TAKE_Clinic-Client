const EMPTY_LENGTH = 0;

const isEmpty = (value: undefined | null | string | any[]): boolean => {
  if (!value) {
    return false;
  }

  switch (typeof value) {
    case "string":
      return value.length > EMPTY_LENGTH;
    case "object":
      return value.length > EMPTY_LENGTH;
  }

  return false;
}

export default isEmpty;
