function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  const result =  isIndex ? "Holberton School" : "Holberton School main dashboard";
  return result;
}

export { getFullYear, getFooterCopy };