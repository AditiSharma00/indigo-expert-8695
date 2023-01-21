import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function CountDownImg() {
  return (
    <Box m="auto" mt="20px" w="100%">
      <Box w="85%" m="auto" mt="20px" pl="2%">
        <Image
          src={
            "https://images-static.nykaa.com/uploads/de3f9b77-6724-4cb4-82dc-8fe2c36562b0.gif"
          }
          alt={"image"}
          borderRadius="3px"
          boxSize="border-box"
          objectFit="contain"
          //   objectFit="contain"

          maxW="100%"
          maxH="100%"
        />
      </Box>
      <Box
        w="90%"
        m="auto"
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        pb="20px"
        backgroundColor="white"
      >
        <Image
          src={
            "https://images-static.nykaa.com/uploads/fad4269e-a68e-4eca-9244-da27880090c7.jpg"
          }
          alt={"image"}
          borderRadius="3px"
          w="49%"
          pt="20px"
          backgroundColor="white"
        />
        <Image
          src={
            "https://images-static.nykaa.com/uploads/59474f07-bbae-4245-9c7b-b07a4c03fa58.jpg"
          }
          alt={"image"}
          borderRadius="3px"
          w="49%"
          pt="20px"
        />
      </Box>
      <Box w="85%" m="auto" mt="30px" pl="2%">
        <Image
          src={
            "https://images-static.nykaa.com/uploads/2030f573-1d09-432d-aacb-24672ba9a0e1.jpg?tr=w-1200,cm-pad_resize"
          }
          alt={"image"}
          borderRadius="3px"
          objectFit="contain"
          maxW="100%"
          maxH="100%"
          boxSize="border-box"
        />
      </Box>
    </Box>
  );
}
