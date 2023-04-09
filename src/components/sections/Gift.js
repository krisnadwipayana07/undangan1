import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

export default function Gift() {
  const [openGift, setOpenGift] = useState(false);

  return (
    <>
      <Box
        my="10"
        mx="7"
        bg="chocolate"
        py="16"
        px="10"
        borderRadius="20px"
        boxShadow="dark-lg"
        color="white"
      >
        <Box display="flex" justifyContent="center">
          <Image src="/assets/gift.png" alt="gift" width={100} height={100} />
        </Box>
        <Text fontFamily="Great Vibes" fontSize="30px" textAlign="center">
          Wedding Gift
        </Text>
        <Text textAlign="center" fontFamily="Philosopher" mt="20px">
          Kehadiran Anda adalah hadiah tersendiri. Tetapi jika Anda ingin member
          kami sesuatu, silakan ketuk tautan berikut untuk melihat detailnya.
        </Text>
        <Box display="flex" justifyContent="center">
          <Button
            mt="5"
            variant="outline"
            fontFamily="Philosopher"
            color="white"
            _hover={{
              bg: "#CEA091",
            }}
            fontWeight={500}
            borderRadius="100px"
          >
            Send Gift
          </Button>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
}
