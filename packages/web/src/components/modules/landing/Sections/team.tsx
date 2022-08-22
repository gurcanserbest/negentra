import { Container, Flex, Grid } from '@chakra-ui/react';
import { PersonCard, Text, Title } from '@negentra/src/components';

import team from '@negentra/public/json/team.json';

export function Team() {
  return (
    <Container
      id="team"
      maxWidth="1500px"
      marginBottom="125px"
      className="flex flex-col items-center"
    >
      <Flex
        marginBottom="12px"
      >
        <Title
          textTransform="uppercase"
          className="text-[80px] leading-[1] sm:text-[100px] leading-[114.5px]"
        >
          Our Team
        </Title>
      </Flex>

      <Flex
        maxWidth="1184px"
        marginBottom="50px"
      >
        <Text
          textAlign="center"
        >
          The Sociapol team consists of experienced game designers, VR and AR specialists and blockchain enthusiasts that are working tirelessly to bring you the most enjoyable user experience.
        </Text>
      </Flex>

      <Grid
        width="100%"
        rowGap="30px"
        justifyContent="center"
        className="grid-cols-[repeat(auto-fill,242px)]"
      >
        {team && team.map((person, i) => (
          <PersonCard
            {...person}
            key={'neg-team-card' + i}
          />
        ))}
      </Grid>
    </Container>
  );
};