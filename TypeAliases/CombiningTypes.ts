type cardDate = {
  cardDate: Date;
};

type cardNumber = {
  cardNumber: string;
};

// combining them using & (good practice)
type cardDetails = cardDate & cardNumber;

// a hack way to add more (bad)
type hackCardDetails = cardDate &
  cardNumber & {
    cvv: number;
  };


let hackedCard: hackCardDetails = {
  cardDate: new Date(),
  cardNumber: "12",
  cvv: 12,
};
