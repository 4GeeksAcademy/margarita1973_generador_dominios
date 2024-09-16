let pronums = ["the", "my", "our", "your"];
let adjs = ["big", "best", "great", "simple"];
let nouns = ["trip", "adventures", "travel"];
let exts = [".com", ".es", ".org", ".uy"];

for (let pronum of pronums) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      for (let ext of exts) {
        if (noun.endsWith("es") && ext == ".es") {
          console.log(pronum + adj + noun.slice(0, -2) + ".es");
        }
        else {
          console.log(pronum + adj + noun + ext);
        }
      }
    }
  }
}
