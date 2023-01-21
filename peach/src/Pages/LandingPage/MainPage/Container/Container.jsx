import { Box } from "@chakra-ui/react";
import Card from "./Card";

export default function Container({ data }) {
  return (
    <Box
      w="90%"
      m="auto"
      display="grid"
      gridTemplateColumns={"repeat(3,1fr)"}
      gap="20px"
    >
      {data.map((el, index) => {
        return <Card key={index} property={el} />;
      })}
    </Box>
  );
}
