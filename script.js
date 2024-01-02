document.addEventListener("DOMContentLoaded", function () {
  const lotSizeInput = document.getElementById("lotSize");
  const pricePerStockInput = document.getElementById("pricePerStock");
  const amountToApplyInput = document.getElementById("amountToApply");
  const lotSizeToApplyElement = document.getElementById("lotSizeToApply");
  const totalLotsElement = document.getElementById("totalLots");

  function calculateLotSizeToApply() {
    const lotSizeValue = parseFloat(lotSizeInput.value);
    const pricePerStockValue = parseFloat(pricePerStockInput.value);
    const amountToApplyValue = parseFloat(amountToApplyInput.value);

    if (
      !isNaN(lotSizeValue) &&
      !isNaN(pricePerStockValue) &&
      !isNaN(amountToApplyValue)
    ) {
      const divisionResult =
        (amountToApplyValue * 100000) / (pricePerStockValue * lotSizeValue);

      const isNotInteger = divisionResult % 1 !== 0;

      const calculatedLotSizeToApply = isNotInteger
        ? Math.floor(divisionResult) + 1
        : Math.floor(divisionResult);

      lotSizeToApplyElement.textContent =
        calculatedLotSizeToApply * lotSizeValue;
    } else {
      lotSizeToApplyElement.textContent = "";
    }

    const totalLots =
      lotSizeValue && pricePerStockValue && amountToApplyValue
        ? (calculatedLotSizeToApply / lotSizeValue).toFixed(2)
        : "";

    totalLotsElement.textContent = totalLots;
  }

  function handleButtonClick(clickedAmount) {
    amountToApplyInput.value = clickedAmount;
    calculateLotSizeToApply();
  }

  lotSizeInput.addEventListener("input", calculateLotSizeToApply);
  pricePerStockInput.addEventListener("input", calculateLotSizeToApply);
  amountToApplyInput.addEventListener("input", calculateLotSizeToApply);

  document.getElementById("button2").addEventListener("click", function () {
    handleButtonClick(2);
  });

  document.getElementById("button10").addEventListener("click", function () {
    handleButtonClick(10);
  });
});
