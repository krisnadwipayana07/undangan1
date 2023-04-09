import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Footer from "@/components/footer";
import { AiOutlineInstagram } from "react-icons/ai";
import Ucapan from "@/components/sections/Ucapan";
import Gift from "@/components/sections/Gift";
import Carosel from "@/components/sections/Carosel";
import { withApollo } from "@/lib/withApollo";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Head>
        <title>Wah Ogik & Diwani - Kondangan</title>
        <meta name="description" content="Website dibuat oleh Kondangan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent
            bgImage="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,253,236,0.8) 0%) , url('/assets/header.webp')"
            bgSize="cover"
            bgPos="center"
            h="80vh"
            textAlign="center"
            fontFamily="Philosopher"
          >
            <ModalBody
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Box display="flex" justifyContent="center" mb="20">
                  <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </Box>
                <Text py="10">Kepada YTH.</Text>
                <Text fontSize="2xl">Nama Undangan</Text>
                <Button
                  mt="5"
                  bg="#6e5d57"
                  color="white"
                  _hover={{
                    bg: "#CEA091",
                  }}
                  fontWeight={500}
                  fontFamily="Philosopher"
                  onClick={handleClose}
                >
                  Buka Undangan
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Box bgColor="black" minH="100vh">
          <Container maxW="container.sm" bgColor="white" px="0" minH="100vh">
            <Box pos="relative" maxW="container.md" minH="100vh">
              <Image
                src="/assets/header.webp"
                alt="header"
                priority
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                pos="absolute"
                bottom="5%"
                left="50%"
                transform="translate(-50%,-50%)"
              >
                <Text
                  fontFamily="Feelgoodnes_sans"
                  color="white"
                  fontWeight={700}
                  fontSize="3xl"
                  textAlign="center"
                  letterSpacing="10px"
                >
                  PAWIWAHAN
                </Text>
                <Text
                  mt="5"
                  fontFamily="Shintaku"
                  color="white"
                  fontWeight={700}
                  fontSize="3xl"
                  textAlign="center"
                >
                  Wah Ogik & Diwani
                </Text>
              </Box>
            </Box>
            <Box
              bgColor="#7b340d"
              textAlign="center"
              color="white"
              py="40"
              px="10"
            >
              <Stack spacing={4}>
                <Text fontFamily="Great Vibes" fontSize="3xl">
                  We&#39;ve Found Love
                </Text>
                <Text fontFamily="Philosopher">
                  “Anvārabhethām anusam-rabhethām, Etam lokam srad-dadhānāh
                  sacante.”
                </Text>
                <Text fontFamily="Philosopher">
                  “Wahai pasangan suami-isteri, kembangkanlah cinta kasih di
                  dalam dirimu, tekun dan tetaplah berkarma dalam menggapai
                  kebahagiaan. Karena hanya orang yang bersungguh-sungguhlah
                  mendapatkan keberhasilan dalam berkeluarga.”
                </Text>
                <Text fontFamily="Philosopher">(Atharvaveda : VI.122.3)</Text>
              </Stack>
            </Box>
            <Box py="10">
              <Text textAlign="center" fontFamily="Kaushan Script">
                Sang Mempelai
              </Text>
              <SimpleGrid columns={[1, 2]} textAlign="center">
                <Box py="10">
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/assets/boy.jpg"
                      alt="header"
                      priority
                      width={200}
                      height={200}
                      style={{ objectFit: "cover", borderRadius: "100px" }}
                    />
                  </Box>
                  <Stack spacing={3}>
                    <Text pt="10" fontFamily="Alkatra" fontWeight={700}>
                      Gusti Ngurah Yogi Pratama S.Ak
                    </Text>
                    <Link href="https://www.instagram.com/yogi_pratamaa16">
                      <IconButton borderRadius="20px">
                        <AiOutlineInstagram size={30} />
                      </IconButton>
                    </Link>
                  </Stack>
                </Box>
                <Box py="10">
                  <Box display="flex" justifyContent="center">
                    <Image
                      src="/assets/girl.jpg"
                      alt="header"
                      priority
                      width={200}
                      height={200}
                      style={{ objectFit: "cover", borderRadius: "100px" }}
                    />
                  </Box>
                  <Stack spacing={3}>
                    <Text pt="10" fontFamily="Alkatra" fontWeight={700}>
                      Ni Made Ani Diwani S.M
                    </Text>
                    <Link href="https://www.instagram.com/anidiwani">
                      <IconButton borderRadius="20px">
                        <AiOutlineInstagram size={30} />
                      </IconButton>
                    </Link>
                  </Stack>
                </Box>
              </SimpleGrid>
            </Box>
            <Box
              color="white"
              textAlign="center"
              bgColor="#4E4928"
              py="20"
              px="5"
            >
              <Text py="5" fontFamily="Great Vibes" fontSize="39px">
                Om Swastiastu
              </Text>
              <Text py="5" fontSize="1.1em" fontFamily="Philosopher">
                Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa,
                perkenankanlah kami mengundang Bapak/Ibu/Saudara/i untuk
                berkenan hadir di acara Manusa Yadnya Pawiwahan kami yang akan
                dilaksanakan pada:
              </Text>
              <Box
                px="5"
                py="10"
                borderRadius="10px"
                bgImage="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8016456582633054) 0%), url('/assets/background1.jpg')"
                bgSize="cover"
                bgPos="center"
                color="black"
                fontFamily="Philosopher"
              >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/assets/wedding-ring.webp"
                    alt="weeding-ring"
                    width={100}
                    height={100}
                  />
                </Box>
                <Text letterSpacing="0.5em" fontWeight={700} fontSize="2em">
                  RESEPSI
                </Text>
                <Divider py="2" borderColor="black" />
                <HStack
                  gridAutoColumns={2}
                  divider={<StackDivider borderColor="black" />}
                  py="7"
                >
                  <Box w="50%">
                    <Text>RABU</Text>
                    <Text fontSize="1.7em">April</Text>
                    <Text fontSize="2em">26</Text>
                    <Text fontSize="1.7em">2023</Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="1.7em">14.00</Text>
                    <Text fontSize="1.7em">WITA</Text>
                    <Text>sampai Selesai</Text>
                  </Box>
                </HStack>
                <Divider py="2" borderColor="black" />
                <Text mt="10" fontFamily="Kaushan Script" fontSize="1.5em">
                  Tegal Tugu, Kec. Gianyar, Kab. Gianyar
                </Text>
                <Link href="https://goo.gl/maps/bzn3KZep3Kn4UNzg8">
                  <Button
                    mt="5"
                    bg="#4b3f3b"
                    color="white"
                    _hover={{
                      bg: "#CEA091",
                    }}
                    fontWeight={500}
                    borderRadius="100px"
                  >
                    LIHAT LOKASI
                  </Button>
                </Link>
              </Box>
            </Box>
            <Carosel />
            <Ucapan />
            <Gift />
            <Box
              h="100vh"
              bgImage="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.20) 0%), url('/assets/sampai-jumpa.jpg')"
              bgSize="cover"
              bgPos="center"
            >
              <Text
                pt="7"
                textAlign="center"
                fontFamily="Philosopher"
                color="white"
              >
                Sampai Jumpa Di :
              </Text>
              <Text
                textAlign="center"
                fontFamily="Kaushan Script"
                fontSize="5xl"
                color="white"
              >
                Hari Spesial Kami
              </Text>
            </Box>
            <Footer />
          </Container>
        </Box>
      </main>
    </>
  );
}

export default withApollo()(Home);
