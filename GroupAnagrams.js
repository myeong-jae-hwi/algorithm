function GroupAnagrams(arr) {
  const map = new Map();

  for (word of arr) {
    const key = word.split("").sort().join("");
    console.log(key);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}

console.log(GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
