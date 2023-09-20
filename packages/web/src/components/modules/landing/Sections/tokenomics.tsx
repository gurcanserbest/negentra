import {
  Grid,
  GridItem,
  Container, Flex, ResponsiveValue,
} from '@chakra-ui/react';
import * as CSS from "csstype";
import { Text, Title } from '@negentra/src/components';

import tokenomics from '@negentra/public/json/tokenomics.json';

const data = [
  {
    label: 'Private Sale',
    percentage: '12%',
    tge: '4%',
    cliff: '6 mos',
    vesting: '24 mos MLV'
  },
  {
    label: 'IDO Sale',
    percentage: '3%',
    tge: '8%',
    cliff: '2 mos',
    vesting: '12 mos MLV'
  },
  {
    label: 'IEO Sale',
    percentage: '5%',
    tge: '8%',
    cliff: '2 mos',
    vesting: '12 mos MLV'
  },
  {
    label: 'Team',
    percentage: '15%',
    tge: '-',
    cliff: '6 mos',
    vesting: '36 mos MLV'
  }, 
  {
    label: 'Advisors',
    percentage: '4%',
    tge: '-',
    cliff: '9 mos',
    vesting: '24 mos MLV'
  },
  {
    label: 'Reserve',
    percentage: '15%',
    tge: '-',
    cliff: '9 mos',
    vesting: '39 mos MLV'
  },
  {
    label: 'R&D',
    percentage: '5%',
    tge: '-',
    cliff: '6 mos',
    vesting: '36 mos MLV'
  },
  {
    label: 'Liquidity Pool',
    percentage: '16%',
    tge: '15%',
    cliff: '-',
    vesting: '12 mos MLV'
  },
  {
    label: 'Strategic Partners',
    percentage: '5%',
    tge: '5%',
    cliff: '3 mos',
    vesting: '24 mos MLV'
  },
  {
    label: 'Rewards (Airdrop)',
    percentage: '1%',
    tge: '10%',
    cliff: '-',
    vesting: '24 mos MLV'
  },
  {
    label: 'Marketing',
    percentage: '19%',
    tge: '-',
    cliff: '3 mos',
    vesting: '36 mos MLV'
  }
]

const headers = [
  {
    label: 'ROUND',
    cols: 4,
    textAlign: 'left'
  },
  {
    label: '%',
    cols: 2,
    textAlign: 'center'
  },
  {
    label: 'TGE UNLOCK',
    cols: 2,
    textAlign: 'center'
  },
  {
    label: 'CLIFF',
    cols: 2,
    textAlign: 'center'
  },
  {
    label: 'VESTING',
    cols: 2,
    textAlign: 'center'
  },
];

export function Tokenomics() {
  return (
    <>
      <Container
        id="tokenomics"
        h="100%"
        w="100%"
        maxWidth="1214px"
        className="md:flex items-center flex-col mb-[142px] hidden"
      >
        <Flex
          direction="column"
          alignItems="center"
          marginBottom="68px"
          justifyContent="center"
        >
          <Flex>
            <Title
              textAlign="center"
              textTransform="uppercase"
              className="text-[45px] leading-[1] md:text-[100px] md:leading-[114.5px] mb-5 md:mb-0"
            >
              Tokenomics
            </Title>
          </Flex>

          <Flex>
            <Text
              textAlign="center"
            >
              We have worked with world renowned specialists to create a tokenomics scheme that will ensure our native token SPOL will retain its value and continue to reward users for their actions.
            </Text>
          </Flex>
        </Flex>

        <Flex
          w="100%"
          maxW="100%"
          overflow="auto"
          direction="column"
        >
          <Grid
            w="1170px"
            maxW="1170px"
            templateColumns='repeat(12, 1fr)'
            className="bg-[url(/svg/table-header-bg.svg)] bg-[length:1150px_144px] bg-no-repeat pt-[53px] h-[144px] pl-[51px] pr-[68px]"
          >
            {headers.map(({ label, cols, textAlign }, i) => (
              <GridItem
                colSpan={cols}
                key={'neg-tokenomics-header-' + i}
              >
                <Text
                  color="white"
                  fontSize="22px"
                  fontWeight="400"
                  fontFamily="Titan One"
                  textAlign={textAlign as ResponsiveValue<CSS.Property.TextAlign>}
                >
                  {label}
                </Text>
              </GridItem>
            ))}
          </Grid>

          <Flex
            w="1170px"
            height="564px"
            overflow="auto"
            direction="column"
            boxSizing='border-box'
            className="bg-[url(/svg/table-body-bg.svg)] bg-[length:100%_100%] bg-no-repeat"
          >
            <Flex
              w="1170px"
              height="100%"
              overflow="auto"
              direction="column"
              boxSizing='border-box'
              className="pt-[58px] pl-[51px] pr-[68px] space-y-[20px]"
            >
              {tokenomics.map(({ label, percentage, tge, cliff, vesting }, i) => (
                <Grid
                  w="100%"
                  templateColumns='repeat(12, 1fr)'
                  key={'neg-tokenomics-body-' + i}
                >
                  <GridItem
                    colSpan={4}
                  >
                    <Text
                      color="white"
                      fontSize="22px"
                      fontWeight="700"
                    >
                      {label}
                    </Text>
                  </GridItem>

                  <GridItem
                    colSpan={2}
                  >
                    <Text
                      color="white"
                      fontSize="22px"
                      fontWeight="700"
                      textAlign="center"
                    >
                      {percentage}
                    </Text>
                  </GridItem>

                  <GridItem
                    colSpan={2}
                  >
                    <Text
                      color="white"
                      fontSize="22px"
                      fontWeight="700"
                      textAlign="center"
                    >
                      {tge}
                    </Text>
                  </GridItem>

                  <GridItem
                    colSpan={2}
                  >
                    <Text
                      color="white"
                      fontSize="22px"
                      fontWeight="700"
                      textAlign="center"
                    >
                      {cliff}
                    </Text>
                  </GridItem>

                  <GridItem
                    colSpan={2}
                  >
                    <Text
                      color="white"
                      fontSize="22px"
                      fontWeight="700"
                      textAlign="center"
                    >
                      {vesting}
                    </Text>
                  </GridItem>
                </Grid>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w="100%"
          align="center"
          marginTop="35px"
          justifyContent="space-between"
          className="flex-col justify-start items-center space-y-[12px] sm:flex-row sm:justify-between"
        >
          <Flex
            direction="column"
          >
            <Flex
              align="center"
              marginBottom="10px"
            >
              <Flex
                h="14px"
                w="14px"
                borderRadius="100%"
                background="#9B59B6"
                flexShrink="0"
                marginRight="10px"
              />

              <Text
                color="#333333"
                fontWeight="700"
                fontSize="16px"
                whiteSpace="nowrap"
              >
                MLV: Monthly Linear Vesting
              </Text>
            </Flex>
          </Flex>

          <Flex>
            <Text
              fontSize="16px"
            >
              Total supply of $SPOL is capped at 100.000.000.000
            </Text>
          </Flex>
        </Flex>
      </Container>

      <Flex
          direction="column"
          alignItems="center"
          marginBottom="68px"
          justifyContent="center"
          className='md:hidden'
        >
          <Flex>
            <Title
              textAlign="center"
              textTransform="uppercase"
              className="text-[45px] leading-[1] md:text-[100px] md:leading-[114.5px] mb-5 md:mb-0"
            >
              Tokenomics
            </Title>
          </Flex>

          <Flex>
            <Text
              textAlign="center"
            >
              We have worked with world renowned specialists to create a tokenomics scheme that will ensure our native token SPOL will retain its value and continue to reward users for their actions.
            </Text>
          </Flex>
        </Flex>

      <div className="flex md:hidden flex-col mb-20">
        {data.map(({ label, percentage, tge, cliff, vesting }, i) => (
          <div className={`flex flex-col text-white text-center h-[123px] px-3 ${i % 2 === 0 ? `bg-[#9b59b6]` : `bg-[#ae68a0]`}`}>
            <p className='mt-1 mb-5 font-bold text-left'>{label}</p>

            <div className="flex justify-between">
              <div>
                <p>%</p>
                <p>{percentage}</p>
              </div>

              <div className='border-r border-r-gray-300 w-1 h-10' />

              <div>
                <p>TGE UNLOCK</p>
                <p>{tge}</p>
              </div>

              <div className='border-r border-r-gray-300 w-1 h-10' />

              <div>
                <p>CLIFF</p>
                <p>{cliff}</p>
              </div>

              <div className='border-r border-r-gray-300 w-1 h-10' />

              <div>
                <p>VESTING</p>
                <p>{vesting}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};