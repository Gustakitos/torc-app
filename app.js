const taxPercent = 10.0;
const importedTax = 5.0;

const exceptions = {
  book: "books",
  food: "food",
  medical: "medical",
  pills: "pills",
  chocolate: "chocolate bar",
};

const shouldTaxProduct = (productName) => {
  const isTaxable = !(Object.values(exceptions).includes(productName));
  return isTaxable;
};


const init = (shoppingBasket) => {
  let totalTaxes = 0.0;
  let receiptTotal = 0.0;
  let finalOutput = [];
  for (items of shoppingBasket) {
    const splittedItem = items.split(" ");

    const atIndex = splittedItem.indexOf("at");

    const price = parseFloat(splittedItem[atIndex + 1]);

    const amount = splittedItem[0];

    const productName =
      splittedItem.length === 4 ? splittedItem[1] + " "
        : splittedItem[1] + " " + splittedItem[atIndex - 1];

    const isTaxable = shouldTaxProduct(productName);

    const taxRate = productName.includes("imported") ? taxPercent + importedTax : taxPercent;

    const taxValue = taxRate ? price * (taxRate / 100) : 0;
    totalTaxes = totalTaxes + parseFloat(taxValue.toFixed(2));

    const newPrice = (isTaxable ? (taxValue + price) : (price)) * amount;
    receiptTotal = receiptTotal + parseFloat(newPrice.toFixed(2));


    const output = `${amount} ${productName}: ${newPrice.toFixed(2)}`;
    finalOutput.push(output);
  }
  finalOutput.push(`Sales Taxes: ${totalTaxes.toFixed(2)}`);
  finalOutput.push(`Total: ${receiptTotal.toFixed(2)}`);

  return finalOutput;
}

module.exports = { init }
