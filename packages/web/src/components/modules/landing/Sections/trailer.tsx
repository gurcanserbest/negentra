import { Container } from '@chakra-ui/react';

export function Trailer() {
  return (
    <Container
      display="flex"
      marginTop="160px"
      maxWidth="1410px"
      position="relative"
      alignItems="center"
      marginBottom="180px"
      justifyContent="center"
      className="max-w-[1000px] overflow-hidden"
    >
      <div
        className="z-[1] relative w-full max-w-[1280px] aspect-video overflow-hidden"
      >
        <div
          className="scale-[.9] w-full max-w-[1280px] overflow-hidden aspect-video overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <iframe
            id="ytplayer"
            width="100%"
            height="100%"
            loading="lazy"
            frameBorder="0"
            src="https://www.youtube.com/embed/PDfTTYOx_lk?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1"
          />
        </div>

        <div
          className="neg-trailer bg-[url(/images/yt-video-frame.png)] bg-[length:100%_100%] w-full h-full absolute pointer-events-none"
        />
      </div>
    </Container>
  );
};