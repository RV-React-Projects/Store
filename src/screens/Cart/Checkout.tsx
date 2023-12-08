import { memo, useEffect, useState } from "react";
import { useAppSelector } from "@src/redux/store";
import EmptyCartSVG from "@src/assets/svgs/EmptyCart";
import BreadCrumb from "@src/components/BreadrCrumbs/BreadCrumb";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import { CreditCardIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const breadcrumbData = [
  { name: "Cart", path: "/cart" },
  { name: "Chechout", path: "/cart/checkout" },
];

const userAddresses = [
  {
    id: "1",
    type: "Home",
    name: "Ranvijay Kumar Singh H",
    address:
      "6Th Cross Main Road, Virgo Nagar Post Avalhalli, Bangalore, 560049",
    phone: "9066561669",
    email: "ranvijay@gmail.com",
  },
  {
    id: "2",
    type: "Home",
    name: "Ranvijay Kumar H",
    address:
      "6Th Cross Main Road, Virgo Nagar Post Avalhalli, Bangalore, 560049",
    phone: "9066561669",
    email: "rv@gmail.com",
  },
  {
    id: "3",
    type: "Home",
    name: "Ranvijay ",
    address:
      "6Th Cross Main Road, Virgo Nagar Post Avalhalli, Bangalore, 560049 6Th Cross Main Road, Virgo Nagar Post Avalhalli, Bangalore, 560049",
    phone: "9066561669",
    email: "kumar@gmail.com",
  },
];

interface iconProps {
  id?: number;
  open?: number;
}

function formatCardNumber(value: string) {
  const val = value.replace(/[^0-9]/gi, "");

  if (/^\d+$/.test(val)) {
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) return parts.join(" ");
    else return val;
  } else return "";
}

function formatExpires(value: string) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

function formatCVV(value: string) {
  return value.replace(/[^0-9]/g, "");
}

function Icon(props: iconProps) {
  const { id, open } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ChackOut() {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const { cart } = useAppSelector((state) => state.cart);
  const [addressID, setAddressID] = useState<string | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [open, setOpen] = useState<number>(1);

  const [cardEmail, setCardEmail] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpires, setCardExpires] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [showAccessModal, setShowAccessModal] = useState(false);

  const onClickAccessModal = () => {
    setShowAccessModal(!showAccessModal);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (addressID) {
      const findAddress = _.find(
        userAddresses,
        (address) => address?.id === addressID
      );
      findAddress && setSelectedAddress(findAddress);
    }
  }, [addressID]);

  function gotoCheckout() {
    navigate("/cart/checkout");
  }

  function onDeleteAddress(id: string) {}
  function onEditAddress(id: string) {}

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="dark:bg-gray-900  min-h-screen pb-20">
      {!cart ? (
        <div className="padding_div">
          <BreadCrumb data={breadcrumbData} />
          <h2 className="my-8 text-4xl font-medium dark:text-gray-200">
            Checkout
          </h2>
          <div className="mx-auto max-w-full justify-center md:flex md:space-x-6 ">
            <div className="md:w-2/3">
              <>
                <Accordion
                  open={open === 1}
                  icon={<Icon id={1} open={open} />}
                  className="rounded-lg border border-blue-gray-100 px-4 mb-4 shadow-md dark:shadow-gray-600"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-0 transition-colors dark:text-gray-400  ${
                      open === 1
                        ? "text-blue-500  hover:text-blue-700 dark:hover:text-white"
                        : ""
                    }`}
                  >
                    1. Select an Address *
                  </AccordionHeader>
                  <AccordionBody className="pt-0 text-base font-normal">
                    <div className="w-full flex flex-row flex-wrap gap-3 p-1">
                      {_.map(userAddresses, (address, index) => (
                        <div
                          key={index}
                          className={`relative overflow-hidden rounded-lg hover:shadow-md shadow hover:shadow-gray-400 dark:shadow-gray-700 dark:hover:shadow-gray-600 transition-shadow duration-300 ease-in-out w-full lg:w-[32%] min-w-[250px] select-none group ${
                            address?.id === addressID
                              ? "border-primary shadow-none hover:shadow-none"
                              : ""
                          } `}
                        >
                          <span
                            className={`absolute inset-x-0 bottom-0 h-2 w-full ${
                              address?.id === addressID
                                ? "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                : ""
                            }  `}
                          />
                          <div className="absolute z-10 right-1 top-1 group-hover:-translate-y-1 lg:-translate-y-10 duration-300">
                            <IconButton
                              aria-label="edit"
                              onClick={() => {
                                onDeleteAddress(address?.id);
                                onClickAccessModal();
                              }}
                            >
                              <EditIcon className="text-gray dark:text-gray-100" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={() => {
                                onEditAddress(address?.id);
                                onClickAccessModal();
                              }}
                            >
                              <DeleteIcon className="text-red-400" />
                            </IconButton>
                          </div>
                          <div
                            onClick={() => {
                              setAddressID(address?.id);
                              handleOpen(2);
                            }}
                            className="p-3"
                          >
                            <div className="dark:text-gray-500">
                              <h4 className="dark:text-gray-100 text-gray-900">
                                {address?.type}
                              </h4>
                              <p className="line-clamp-3">
                                <i className="ri-map-pin-2-fill text-gray-900 dark:text-gray-200" />{" "}
                                {address?.address}
                              </p>
                              <p className="line-clamp-1">
                                <i className="ri-user-fill text-gray-900 dark:text-gray-200" />{" "}
                                {address?.name}
                              </p>
                              <p className="line-clamp-1">
                                <i className="ri-mail-fill text-gray-900 dark:text-gray-200" />{" "}
                                {address?.email}
                              </p>
                              <p className="line-clamp-1">
                                <i className="ri-phone-fill text-gray-900 dark:text-gray-200" />{" "}
                                {address?.phone}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="m-2">
                      <Button
                        variant="gradient"
                        size="lg"
                        className="rounded-full my-4"
                      >
                        Add a new Address +
                      </Button>
                      <p className="text-error">* Max you can add 5 Address</p>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 2}
                  icon={<Icon id={2} open={open} />}
                  className="rounded-lg border border-blue-gray-100 shadow-md dark:shadow-gray-600"
                  disabled={!addressID}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-0 transition-colors dark:text-gray-400 px-4 ${
                      open === 2
                        ? "text-blue-500  hover:text-blue-700 dark:hover:text-white"
                        : ""
                    }`}
                  >
                    2. Payment Details *
                  </AccordionHeader>
                  <AccordionBody className="pt-0 text-base font-normal p-0 m-0">
                    <Card className="w-full bg-transparent">
                      <CardHeader
                        floated={false}
                        shadow={false}
                        className="grid place-items-center lg:py-10 p-6 text-center bg-gray-900 m-2 mx-4 shadow-md dark:shadow-gray-800"
                      >
                        <div className="mb-0 p-6 text-white">
                          <CreditCardIcon className="h-24 w-h-24 text-white " />
                        </div>
                        <Typography
                          variant="h5"
                          className="text-white text-2xl font-medium"
                        >
                          Payment Card Details
                        </Typography>
                      </CardHeader>
                      <CardBody>
                        <div className="!overflow-x-hidden !overflow-y-visible">
                          <div className="p-0">
                            <form className="mt-2 flex flex-col gap-4">
                              <div>
                                <Typography
                                  variant="small"
                                  className="mb-2 font-medium dark:text-gray-400"
                                >
                                  Your Email{" "}
                                  <span className="text-error">*</span>
                                </Typography>
                                <Input
                                  inputMode="email"
                                  value={cardEmail}
                                  onChange={(e) => setCardEmail(e.target.value)}
                                  type="email"
                                  placeholder="name@mail.com"
                                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-primary dark:text-white text-lg"
                                  labelProps={{
                                    className:
                                      "before:content-none after:content-none",
                                  }}
                                  crossOrigin={undefined}
                                />
                              </div>
                              <div className="my-3">
                                <Typography
                                  variant="small"
                                  className="mb-2 font-medium dark:text-gray-400"
                                >
                                  Card Details{" "}
                                  <span className="text-error">*</span>
                                </Typography>
                                <Input
                                  inputMode="numeric"
                                  maxLength={19}
                                  value={formatCardNumber(cardNumber)}
                                  onChange={(e) =>
                                    setCardNumber(e.target.value)
                                  }
                                  icon={
                                    <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
                                  }
                                  placeholder="0000 0000 0000 0000"
                                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-primary dark:text-white"
                                  labelProps={{
                                    className:
                                      "before:content-none after:content-none",
                                  }}
                                  crossOrigin={undefined}
                                />
                                <div className="my-4 flex items-center gap-4 flex-1">
                                  <div className="flex-1">
                                    <Typography
                                      variant="small"
                                      className="mb-2 font-medium dark:text-gray-400"
                                    >
                                      Expires{" "}
                                      <span className="text-error">*</span>
                                    </Typography>
                                    <Input
                                      inputMode="numeric"
                                      maxLength={5}
                                      value={formatExpires(cardExpires)}
                                      onChange={(event) =>
                                        setCardExpires(event.target.value)
                                      }
                                      containerProps={{
                                        className: "min-w-[72px]",
                                      }}
                                      placeholder="00/00"
                                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-primary dark:text-white "
                                      labelProps={{
                                        className:
                                          "before:content-none after:content-none",
                                      }}
                                      crossOrigin={undefined}
                                    />
                                  </div>
                                  <div>
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="mb-2 font-medium dark:text-gray-400"
                                    >
                                      CVC <span className="text-error">*</span>
                                    </Typography>
                                    <Input
                                      inputMode="numeric"
                                      value={formatCVV(cvv)}
                                      onChange={(e) => setCvv(e.target.value)}
                                      maxLength={3}
                                      containerProps={{
                                        className: "min-w-[72px]",
                                      }}
                                      placeholder="000"
                                      className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-primary dark:text-white"
                                      labelProps={{
                                        className:
                                          "before:content-none after:content-none",
                                      }}
                                      crossOrigin={undefined}
                                    />
                                  </div>
                                </div>
                                <Typography
                                  variant="small"
                                  className="mb-2 font-medium dark:text-gray-400"
                                >
                                  Holder Name{" "}
                                  <span className="text-error">*</span>
                                </Typography>
                                <Input
                                  inputMode="text"
                                  placeholder="Name on the Card"
                                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-primary dark:text-white"
                                  labelProps={{
                                    className:
                                      "before:content-none after:content-none",
                                  }}
                                  crossOrigin={undefined}
                                />
                              </div>
                              <Button
                                variant="gradient"
                                color="amber"
                                size="lg"
                                className="rounded-full"
                              >
                                Pay Now
                              </Button>
                              <Typography
                                variant="small"
                                color="gray"
                                className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60 dark:text-gray-300"
                              >
                                <LockClosedIcon className="-mt-0.5 h-4 w-4" />{" "}
                                Payments are secure and encrypted
                              </Typography>
                            </form>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </AccordionBody>
                </Accordion>
              </>
            </div>
            {/* <!-- Sub total --> */}
            <div className="md:w-1/3 sticky top-0 h-full md:mt-0 mt-6">
              <div className="rounded-lg bg-white dark:bg-gray-900 dark:text-gray-200 dark:shadow-sm dark:shadow-white p-5 shadow-md grid gap-2 ">
                <h3 className="font-semibold text-xl mb-4 underline">
                  Cart Details
                </h3>
                <div className="flex justify-between">
                  <p className="text-lg font-medium">Subtotal</p>
                  <p className="text-lg font-bold">$129.99</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-medium">Discount</p>
                  <p className="text-base font-bold">- $4.99</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-medium">Shipping</p>
                  <p className="text-base font-bold">$4.99</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-medium">Offer Discount</p>
                  <p className="text-base font-bold">- $4.99</p>
                </div>
                <hr className="my-4" />
                <div className="flex flex-row justify-between">
                  <p className="font-bold text-lg">Total</p>
                  <div className="">
                    <p className="mb-1 text-2xl font-bold">$134.98</p>
                    <p className="text-sm text-gray-500">including VAT</p>
                  </div>
                </div>
              </div>
              {addressID && selectedAddress && (
                <div className="rounded-lg bg-white dark:bg-gray-900 dark:text-gray-200 dark:shadow-sm dark:shadow-white p-5 shadow-md grid gap-2 mt-5 ">
                  <h3 className="font-semibold text-xl mb-4 underline">
                    Billing Address
                  </h3>
                  <div className="flex flex-row items-start justify-between">
                    <p className="flex flex-row items-center font-semibold">
                      Address<span> :</span>
                    </p>
                    <p className="ml-3">{selectedAddress?.address}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex flex-row items-center font-semibold">
                      Email<span> :</span>
                    </p>
                    <p className="ml-3">{selectedAddress?.email}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex flex-row items-center font-semibold">
                      Name<span> :</span>
                    </p>
                    <p className="ml-3">{selectedAddress?.name}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex flex-row items-center font-semibold">
                      Contact Number<span>:</span>
                    </p>
                    <p className="ml-3">{selectedAddress?.phone}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center align-middle min-h-screen">
          <EmptyCartSVG
            color1={isDarkMode ? "#FFEED9" : undefined}
            color2={isDarkMode ? "#4F6F52" : undefined}
            color3={isDarkMode ? "#FAF6F0" : undefined}
            color4={isDarkMode ? "#B6BBC4" : undefined}
          />
          <h1 className="font-medium text-4xl dark:text-white mt-10">
            Your Cart is Empty!
          </h1>
        </div>
      )}
    </div>
  );
}

export default memo(ChackOut);
