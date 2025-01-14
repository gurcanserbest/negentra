// @ts-nocheck
import Slider from 'react-slick';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Text, Title, Button3d } from '@negentra/src/components';
import { Container, Image, Flex } from '@chakra-ui/react';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon, ShoppingBagIcon } from '@heroicons/react/solid';

import toys from '@negentra/public/json/toys.json';

const settings = {
  speed: 100,
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 7,
  centerMode: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        infinite: false,
        centerMode: false,
      }
    },
  ],
  className: 'neg-skins-carousel bg-[url(/images/slider-bg.jpg)] h-[500px] md:h-[700px] bg-[length:706px_240px] bg-[center_bottom] bg-no-repeat items-center',
};

export function Toys() {
  const navigate = useNavigate();

  const slider = useRef<Slider>();

  const onNext = useCallback(() => {
    slider.current?.slickNext();
  }, [slider.current]);

  const onPrev = useCallback(() => {
    slider.current?.slickPrev();
  }, [slider.current]);

  return (
    <Container
      id="toys"
      h="100%"
      w="100%"
      minHeight="100vh"
      maxWidth="1920px"
      marginBottom="152px"
    >
      <Container
        w="100%"
        maxW="1410px"
        marginBottom="64px"
      >
        <Flex
          marginBottom="12px"
          justifyContent="center"
        >
          <Title
            textTransform="uppercase"
            className="text-[45px] leading-[1] md:text-[100px] md:leading-[114.5px]"
          >
            Characters
          </Title>
        </Flex>

        <Flex>
          <Text
            textAlign="center"
          >
            Your first action at Sociapol will be to create your character. Every piece of clothing and accessory your character will be wearing has been designed as an NFT, and will therefore belong to only you and your character. You can sell and trade these NFT’s, or purchase our seasonal special collections. The way your character will look depends entirely on, and belongs completely to you!
          </Text>
        </Flex>
      </Container>

      <Slider
        {...settings}
        ref={slider as any}
      >
        {toys && toys.map((toy: string, i: number) => (
          <Flex
            key={'neg-slider-toy' + i}
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{
              // width: `231px`
            }}
            className='w-[250px] md:w-[340px]'
          >
            <Image
              w="231px"
              src={toy}
              loading="lazy"
              className="relative left-[60px] sm:-left-10"
            />
          </Flex>
        ))}
      </Slider>

      <Flex
        width="100%"
        alignItems="center"
        justifyContent="center"
        className="space-x-[16px] mt-[32px] lg:space-x-[36px]"
      >
        <Button3d
          onClick={() => onPrev()}
          cursor="pointer"
          justifyContent="center"
          borderRadius="50%"
          color="#FF6F00"
          bg="#CA6110"
        >
          <ChevronDoubleLeftIcon
            width="24px"
            color="white"
          />
        </Button3d>
        <Button3d
				onClick={() => {
						window.location.href = "https://paras.id/publication/sociapol-636276cb6975ac001c80f2a7";
					  }}
				bg="#CA6110"
				color="linear-gradient(180deg, #FC9F58 0%, #FF6F00 100%)"
				>
            <Flex
              className='w-[70px] lg:w-auto'
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                bg="white"
                marginRight="15px"
                borderRadius="50%"
                alignItems="center"
                justifyContent="center"
                className='w-[34px] h-[18px] md:w-[34px] md:h-[34px]'
              >
                <ShoppingBagIcon
                  color="#FF6F00"
                  className='w-full h-full md:w-[16px] md:h-[16px]'
                />
              </Flex>
              <Text
                color="white"
                fontFamily="Titan One"
                textShadow="0px 2px 0 #AAAAAA"
                className='md:text-[18px] '
              >
                Mint <span className='hidden md:inline-block'>Yours Now</span>
              </Text>
            </Flex>
          </Button3d>
        <Button3d
          onClick={() => onNext()}
          cursor="pointer"
          justifyContent="center"
          borderRadius="50%"
          color="#FF6F00"
          bg="#CA6110"
        >
          <ChevronDoubleRightIcon
            width="24px"
            color="white"
          />
        </Button3d>
      </Flex>
    </Container>
  );
};