/**
 * Runs on homepage of CoinMarketCap
 */
Object.values(document.querySelectorAll("tr > td a.cmc-link"))
  .map((link) => {
    const logoSrc = link
      .querySelector("img.coin-logo")
      ?.src?.replace("64x64", "128x128");
    if (!logoSrc) return;
    if (!logoSrc.endsWith(".png")) return;

    const name = link.querySelector("p[font-weight=semibold]").innerText;
    const symbol = link.querySelector(".coin-item-symbol").innerText;

    return {
      name,
      logoSrc,
      symbol,
    };
  })
  .filter((x) => x);
