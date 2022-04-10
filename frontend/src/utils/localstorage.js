export function saveToLocalStorage(data) {
  const oldData = JSON.parse(localStorage.getItem("recentSearches"));
  if (oldData === null || oldData === undefined) {
    localStorage.setItem("recentSearches", JSON.stringify([data]));
  } else if (oldData.includes(data)) {
    localStorage.setItem("recentSearches", JSON.stringify(oldData));
  } else {
    localStorage.setItem("recentSearches", JSON.stringify([data, ...oldData]));
  }
}
