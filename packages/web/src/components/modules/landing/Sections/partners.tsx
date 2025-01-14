import Slider from 'react-slick';
import { Title } from '@negentra/src/components';
import { Container, Flex, Image } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

import partners from '@negentra/public/json/partners.json';

export function Partners() {
  const settings = {
    rows: 2,
    speed: 100,
    infinite: true,
    slidesToShow: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  };

  return (
    <Container
      id="partners"
      minHeight="1124px"
      maxWidth="1920px"
      paddingTop="150px"
      marginBottom="40px"
      className="bg-[url(/svg/partners-bg.svg)] bg-[length:1920px_1007px] bg-no-repeat"
    >
      <Container
        maxW="1410px"
      >
        <Flex
          w="100%"
          mx="auto"
          alignItems="center"
          justifyContent="center"
        >
          <Flex>
            <Title
              color="white"
              className="text-[45px] leading-[1] md:text-[100px] md:leading-[114.5px] mb-5 md:mb-0"
            >
              Partners
            </Title>
          </Flex>
        </Flex>

        <Slider
          {...settings}
          className="mx-[80px]"
        >
          {partners && partners.map((logo: string, i: number) => (
            <Container
              paddingY="12px"
              key={'partners-item' + i}
              className="flex items-center justify-center"
            >
              <Flex
                h="196px"
                w="100%"
                px="24px"
                background="white"
                borderRadius="19px"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={logo}
                  className='md:max-w-[190px]'
                  w="auto"
                  loading="lazy"
                />
              </Flex>
            </Container>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};