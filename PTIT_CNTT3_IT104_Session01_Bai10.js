const groupAnagrams = (words) => {
  const map = new Map();

  words.forEach(word => {
    const sorted = word.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  });

  return Array.from(map.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));