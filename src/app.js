/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronums = ["the", "my", "our", "your"];
  let adjs = ["big", "best", "great", "simple"];
  let nouns = ["trip", "adventures", "travel"];
  let exts = [".com", ".es", ".org", ".uy"];
  let domains = [];
  for (let pronum of pronums) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let ext of exts) {
          if (noun.endsWith("es") && ext == ".es") {
            domains.push(pronum + adj + noun.slice(0, -2) + ".es");
          } else {
            let domain = pronum + adj + noun + ext;
            domains.push(domain);
          }
        }
      }
    }
  }
  document.getElementById("domainlist").innerText = domains;
};
