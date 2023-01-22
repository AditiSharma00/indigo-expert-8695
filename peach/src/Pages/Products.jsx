import axios from "axios";
import React, { useState, useEffect } from "react";
import { useReducer } from "react";
import { SimpleGrid, Image, Text, Flex, Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let initialState = {
  product: [],
  isLoading: false,
  isError: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Sucess": {
      return {
        ...state,
        product: action.payload,
        isLoading: false,
        isError: false,
      };
    }
    case "Failed": {
      return {
        ...state,

        isError: true,
      };
    }
    case "Loading": {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};

const Products = () => {
  let [page, setPage] = useState(1);
  let [data, setData] = React.useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const fecthData = (page) => {
    dispatch({ type: "Loading" });
    axios
      .get(
        `https://63cd29dcfba6420d4d69a33b.mockapi.io/products?limit=10&page=${page}`
      )
      .then((res) => {
        setData(res.data);
        dispatch({ type: "Sucess", payLoad: res.data });
      })
      .catch((err) => {
        dispatch({ type: "Failed" });
      });
  };
  console.log(data);
  useEffect(() => {
    fecthData(page);
  }, [page]);

  if (state.isLoading) {
    return (
      <>
        <Text fontWeight={"extrabold"} fontSize={"40px"}>
          Loading.....
        </Text>
      </>
    );
  }

  return (
    <div>
      <SimpleGrid
        backgroundColor={"#F4F4F4"}
        columns={{ base: "2", md: "3" }}
        gap={25}
        mt={"30px"}
        mb={"50px"}
        p={"30px"}
        ml={"50px"}
        mr={"50px"}
      >
        {
          // console.log(state.product)
          data?.map((item) => (
            <Box border={"1px solid pink"}>
              <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                  <Image
                    src={item.image}
                    h={"30%"}
                    border={"1px solid pink"}
                    width={"100%"}
                    borderRadius={"20px"}
                    boxShadow={
                      "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                    }
                    objectFit={"cover"}
                    objectPosition={"center"}
                  />
                </Link>

                <Text fontSize={"30px"} fontWeight={"bold"}>
                  {item.title}
                </Text>

                <Button
                  color={"pink"}
                  background={"gray"}
                  width={"100%"}
                  onClick={(e) => {
                    let obhj = {
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      description: item.description,
                    };
                    localStorage.setItem("onprocess", JSON.stringify(obhj));
                  }}
                >
                  <Link to="/checkout">Add to Cart</Link>
                </Button>
              </div>
            </Box>
          ))
        }
      </SimpleGrid>

      <div
        style={{
          width: "20%",
          margin: "auto",
        }}
      >
        <Button
          isDisabled={page === 0}
          onClick={() => setPage(page - 1)}
          ml={"100px"}
        >
          Prev
        </Button>
        <Button>{page}</Button>
        <Button
          isDisabled={page === 2}
          onClick={(e) => {
            setPage(page + 1);
            console.log(e);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default Products;
