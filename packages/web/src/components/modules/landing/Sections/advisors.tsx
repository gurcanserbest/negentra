import { Container, Flex, Grid } from '@chakra-ui/react';
import advisors from '@negentra/public/json/advisors.json';
import { PersonCard, Title, Text } from '@negentra/src/components';

export function Advisors() {
  return (
    <Container
      id="advisors"
      maxWidth="1500px"
      marginBottom="125px"
      className="flex flex-col items-center"
    >
      <Flex
        marginBottom="12px"
      >
        <Title
          textTransform="uppercase"
          className="text-[45px] leading-[1] md:text-[100px] md:leading-[114.5px] mb-5 md:mb-0"
        >
          Advisors
        </Title>
      </Flex>

      <Flex
        marginBottom="50px"
      >
        <Text
          maxWidth="1184px"
          textAlign="center"
        >  
		The Sociapol advisory team comprises accomplished professionals spanning diverse domains. They're dedicated to providing invaluable insights to elevate every facet of the project.
        </Text>
      </Flex>

      <Grid
        width="100%"
        rowGap="30px"
        justifyContent="center"
        className="grid-cols-[repeat(auto-fill,242px)]"
      >
        {advisors && advisors.map((person: object, i: number) => (
          <PersonCard
            {...person}
            key={'neg-advisors-card' + i}
          />
        ))}
      </Grid>
    </Container>
  );
};