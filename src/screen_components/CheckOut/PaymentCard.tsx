import React, { useState } from "react";

interface Expired {
  month: string;
  year: string;
}

const CreditCardForm: React.FC = () => {
  const [cardholder, setCardholder] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expired, setExpired] = useState<Expired>({ month: "", year: "" });
  const [securityCode, setSecurityCode] = useState<string>("");
  const [card, setCard] = useState<string>("front");

  const formatCardNumber = () => {
    if (cardNumber.length > 18) {
      return;
    }
    setCardNumber(cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 "));
  };

  const isValid = () => {
    if (
      cardholder.length < 5 ||
      cardNumber === "" ||
      (expired.month === "" && expired.year === "") ||
      securityCode.length !== 3
    ) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    alert(`You did it ${cardholder}.`);
  };

  return (
    <div className="m-4">
      <div
        className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"
        data-card={card}
      >
        <header className="flex flex-col justify-center items-center">
          <div
            className="relative"
            style={{
              opacity: card === "front" ? 1 : 0,
              transform: card === "front" ? "scale(1)" : "scale(0.9)",
            }}
          >
            <img
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
              alt="front credit card"
            />
            <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
              <p
                className="number mb-5 sm:text-xl"
                style={{ marginBottom: cardNumber !== "" ? "0.5rem" : "0" }}
              >
                {cardNumber !== "" ? cardNumber : "0000 0000 0000 0000"}
              </p>
              <div className="flex flex-row justify-between">
                <p>{cardholder !== "" ? cardholder : "Card holder"}</p>
                <div>
                  <span>{expired.month}</span>
                  <span
                    style={{
                      display: expired.month !== "" ? "inline" : "none",
                    }}
                  >
                    /
                  </span>
                  <span>{expired.year}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative"
            style={{
              opacity: card === "back" ? 1 : 0,
              transform: card === "back" ? "scale(1)" : "scale(0.9)",
            }}
          >
            <img
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
              alt=""
            />
            <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12">
              <div className="border border-white w-16 h-9 flex justify-center items-center">
                <p>{securityCode !== "" ? securityCode : "code"}</p>
              </div>
            </div>
          </div>
          <ul className="flex">
            <li className="mx-2">
              <img
                className="w-16"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                alt=""
              />
            </li>
            <li className="mx-2">
              <img
                className="w-14"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                alt=""
              />
            </li>
            <li className="ml-5">
              <img
                className="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                alt=""
              />
            </li>
          </ul>
        </header>
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Card payment
          </h1>
          <div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                maxLength={22}
                value={cardholder}
                onChange={(e) => setCardholder(e.target.value)}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card number"
                value={cardNumber}
                onKeyDown={formatCardNumber}
                onKeyUp={formatCardNumber}
                maxLength={19}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="mb-2">
                <label htmlFor="" className="text-gray-700">
                  Expired
                </label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  value={expired.month}
                  onChange={(e) =>
                    setExpired((prev) => ({ ...prev, month: e.target.value }))
                  }
                >
                  <option value="" selected disabled>
                    MM
                  </option>
                  {/* ... (rest of the options) ... */}
                </select>
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  value={expired.year}
                  onChange={(e) =>
                    setExpired((prev) => ({ ...prev, year: e.target.value }))
                  }
                >
                  <option value="" selected disabled>
                    YY
                  </option>
                  {/* ... (rest of the options) ... */}
                </select>
                <input
                  type="text"
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  maxLength={3}
                  value={securityCode}
                  onFocus={() => setCard("back")}
                  onBlur={() => setCard("front")}
                  onChange={(e) => setSecurityCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-6 p-4">
          <button
            className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
            disabled={!isValid()}
            onClick={onSubmit}
          >
            Pay now
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CreditCardForm;
