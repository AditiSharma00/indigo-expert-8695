import {
  Box,
  Text,
  Flex,
  Input,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";
import { MdCreditCard } from "react-icons/md";
import { SiPhonepe, SiPaypal } from "react-icons/si";
import { Link } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/react";

const Checkout = () => {
  let item = JSON.parse(localStorage.getItem("onprocess"));

  console.log(item);
  return (
    <>
      <Box>
        <Flex
          m={"auto"}
          mt={"40px"}
          w={"40%"}
          justifyContent={"space-around"}
          bg={"gray.400"}
          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        >
          <Box w={"40%"}>
            {" "}
            <img
              style={{
                width: "100%",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                marginLeft: "20px",
              }}
              src={item.image}
              alt=""
            />
            <Text fontSize={"20px"} fontWeight={"extrabold"}>
              Name-{item.title}
            </Text>
            <Text fontSize={"20px"} fontWeight={"extrabold"}>
              Price-{item.price}
            </Text>
            <Text fontSize={"12px"} fontWeight={"bold"}>
              Description-{item.description}
            </Text>
          </Box>

          {/* Checkout Pageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */}
          <VStack
            border={"3px solid turquoise"}
            p={"35px"}
            m={"20px"}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          >
            <Text
              fontStyle={"italic"}
              color="rgb(102,153,0)"
              fontWeight={"bold"}
              fontSize={"30px"}
              mb={"30px"}
            >
              Pay And Enjoy
            </Text>

            <Flex w={"80%"} justifyContent={"space-between"} gap={"10"}>
              <FormControl id="firstName" isRequired>
                <FormLabel color={"#d3cefc"}>First Name</FormLabel>
                <Input type="text" variant={"filled"} placeholder="name" />
              </FormControl>

              <FormControl id="firstName" isRequired>
                <FormLabel color={"#d3cefc"}>Last Name</FormLabel>
                <Input type="text" variant={"filled"} placeholder="surName" />
              </FormControl>
            </Flex>
            <Flex justifyContent={"space-around"} gap={"2"} p={"20px"}>
              <Input
                mt={"10px"}
                w={"70%"}
                id="ccn"
                variant="filled"
                type="tel"
                inputmode="numeric"
                pattern="[0-9\s]{13,19}"
                autocomplete="cc-number"
                maxlength="19"
                placeholder="cred-it-card-number"
                isRequired
              />
              <Input
                mt={"10px"}
                w={"20%"}
                type="text"
                name="expiry"
                id="expiry"
                isRequired
                placeholder="XX / XX"
              />
            </Flex>

            <Flex justifyContent={"space-around"} p={"30px"}>
              <Input
                w={"30%"}
                type={"text"}
                variant="filled"
                placeholder="CvC"
              />
              <Link to="/">
                <Button
                  w={"100%"}
                  bg="rgb(0,213,255)"
                  onClick={(e) => {
                    alert("Payment Successfull");
                    localStorage.setItem(
                      "checkoutDetails",
                      JSON.stringify(item)
                    );
                  }}
                >
                  Pay Now-{item.price}
                </Button>
              </Link>
            </Flex>

            <hr />
            <Flex>
              <MdCreditCard />
              <SiPhonepe />
              <SiPaypal />
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};
export default Checkout;
