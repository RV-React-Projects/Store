import { memo, useEffect, useState } from "react";
import { useAppSelector } from "@src/redux/store";
import EmptyCartSVG from "@src/assets/svgs/EmptyCart";
import BreadCrumb from "@src/components/BreadrCrumbs/BreadCrumb";
import _, { map } from "lodash";
import Button from "@material-tailwind/react/components/Button";
import { useNavigate } from "react-router-dom";
import CartItem from "@src/cards/CartItem";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Radio,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Card,
} from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import home1 from "@assets/products/home1.jpg";
import home2 from "@assets/products/home2.jpg";
import CreditCardForm from "@src/screen_components/CheckOut/PaymentCard";

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
    <div className="dark:bg-gray-900  min-h-screen">
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
                  className="rounded-lg border border-blue-gray-100 px-4 mb-2"
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
                      {map(userAddresses, (address, index) => (
                        <div
                          key={index}
                          className={`relative overflow-hidden p-4 shadow dark:shadow-gray-100 rounded-lg hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-300 transition-shadow duration-300 ease-linear w-full lg:w-[32%] min-w-[250px] border-4 border-transparent select-none group ${
                            address?.id === addressID ? "border-primary" : ""
                          } `}
                        >
                          <div className="absolute z-10 right-1 top-1 group-hover:-translate-y-1 lg:-translate-y-10 duration-300">
                            <IconButton
                              aria-label="edit"
                              onClick={() => onDeleteAddress(address?.id)}
                            >
                              <EditIcon className="text-gray" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={() => onEditAddress(address?.id)}
                            >
                              <DeleteIcon className="text-red-400" />
                            </IconButton>
                          </div>
                          <div
                            onClick={() => {
                              setAddressID(address?.id);
                              handleOpen(2);
                            }}
                          >
                            <div className="dark:text-gray-500">
                              <h4 className="dark:text-gray-100">
                                {address?.type}
                              </h4>
                              <p className="line-clamp-3">
                                <i className="ri-map-pin-2-fill text-info dark:text-gray-200" />{" "}
                                {address?.address}
                              </p>
                              <p className="line-clamp-1">
                                <i className="ri-user-fill text-info dark:text-gray-200" />{" "}
                                {address?.name}
                              </p>
                              <p className="line-clamp-1">
                                <i className="ri-mail-fill text-info dark:text-gray-200" />{" "}
                                {address?.email}
                              </p>
                              <p className="line-clamp-1">
                                <i className="ri-phone-fill text-info dark:text-gray-200" />{" "}
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
                  className="mb-2 rounded-lg border border-blue-gray-100 px-4"
                  disabled={!addressID}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-0 transition-colors dark:text-gray-400  ${
                      open === 2
                        ? "text-blue-500  hover:text-blue-700 dark:hover:text-white"
                        : ""
                    }`}
                  >
                    2. Payment Details *
                  </AccordionHeader>
                  <AccordionBody className="pt-0 text-base font-normal">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
              </>
            </div>
            {/* <!-- Sub total --> */}
            <div className="md:w-1/3 sticky top-0 h-full md:mt-0 mt-6">
              <div className="rounded-lg bg-white dark:bg-gray-900 dark:text-gray-200 dark:shadow-sm dark:shadow-white p-5 shadow-md grid gap-2 ">
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Subtotal</p>
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
                  <p className="font-medium">Total</p>
                  <div className="">
                    <p className="mb-1 text-2xl font-bold">$134.98</p>
                    <p className="text-sm text-gray-500">including VAT</p>
                  </div>
                </div>
                {/* <Button
                variant="gradient"
                color="amber"
                size="lg"
                className="w-full my-3 rounded-full"
                onClick={gotoCheckout}
              >
                Checkout
              </Button> */}
              </div>
              {addressID && selectedAddress && (
                <div className="rounded-lg bg-white dark:bg-gray-900 dark:text-gray-200 dark:shadow-sm dark:shadow-white p-5 shadow-md grid gap-2 mt-5 ">
                  <h3 className="font-bold text-xl mb-4">Billing Address</h3>
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex flex-row items-center font-bold">
                      Address<span> :</span>
                    </p>
                    <p className="ml-3">{selectedAddress?.address}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex flex-row items-center font-bold">
                      Email<span> :</span>
                    </p>
                    <p className="ml-3">{selectedAddress?.email}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex flex-row items-center font-bold">
                      Name<span> :</span>
                    </p>
                    <p className="ml-3">{selectedAddress?.name}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex flex-row items-center font-bold">
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
