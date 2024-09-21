document.addEventListener("DOMContentLoaded", function () {
  const lotSizeInput = document.getElementById("lotSize");
  const pricePerStockInput = document.getElementById("pricePerStock");
  const amountToApplyInput = document.getElementById("amountToApply");
  const lotSizeToApplyElement = document.getElementById("lotSizeToApply");
  const totalLotsElement = document.getElementById("totalLots");

  let lotsize = document.getElementById("lotsize");
  let ipoprice = document.getElementById("ipoprice");
  const toggleText = document.getElementById('toggle-area-text');

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

      const totalLots = Math.ceil(calculatedLotSizeToApply);
      totalLotsElement.textContent = totalLots;
    } else {
      lotSizeToApplyElement.textContent = "";
      totalLotsElement.textContent = "";
    }
  }

  function handleButtonClick(clickedAmount) {
    amountToApplyInput.value = clickedAmount;
    calculateLotSizeToApply();
  }

  lotSizeInput.addEventListener("input", calculateLotSizeToApply);
  pricePerStockInput.addEventListener("input", calculateLotSizeToApply);
  amountToApplyInput.addEventListener("input", calculateLotSizeToApply);

  button2.addEventListener("click", function () {
    handleButtonClick(2);
  });

  button10.addEventListener("click", function () {
    handleButtonClick(10);
  });

  function toggleSwitch(){
    if (lotsize.style.display === "block") {
        lotsize.style.display = "none";
        ipoprice.style.display = "block";
        toggleText.innerText = "Switch to Lot Price";
    } else {
        lotsize.style.display = "block";
        ipoprice.style.display = "none";
        toggleText.innerText = "Switch to IPO Price";
    }
  }

  window.addEventListener('load',()=>{
    lotsize.style.display = "block";
    ipoprice.style.display = "none";
    toggleText.innerText = "Switch to IPO Price";
  })

  document.getElementById('toggleButton').addEventListener('click', function() {
    const toggleBtn = this;
    
    toggleBtn.classList.toggle('toggled');
  
    if (toggleBtn.classList.contains('toggled')) {
      toggleText.innerText = "Switch to IPO Price";
      toggleSwitch()
    } else {
      toggleText.innerText = "Switch to Lot Size";
      toggleSwitch()
    }
  });  


});
