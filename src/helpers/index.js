export const getSubString = (text, length) => {
  return text?.length > length ? `${text?.substring(0, length)}...` : text;
};

export const calculateItemsTotal = (items) => {
  return items
    ?.map((item) => ({
      price: item.price,
      count: item.quantity,
    }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};
