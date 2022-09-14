import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as DateIcon} from "feather-icons/dist/icons/calendar.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import kaviSammelanImg from "../../images/flagship_events/Kavi samelan.png";
import djImg from "../../images/flagship_events/DJ Night.jpg";
import musicshowImg from "../../images/flagship_events/Folk Music + Puppet show.jpg";
import BookImg from "../../images/flagship_events/Book Signings.jpg";
import InterviewImg from "../../images/flagship_events/Interview with Director.jpg";
import StandupIMG from "../../images/flagship_events/Standup.jpg";
import TreasurehuntImg from "../../images/flagship_events/Treasure Hunt.jpg";
import WorkshopIMG from "../../images/flagship_events/Workshops.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
//make card such that size remains constant for all cards
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;


const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const Rating = tw.span`ml-2 font-bold`;
//const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;
const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: kaviSammelanImg,
      title: "Kavi sammelan",
      dateText: "29/09/22",
    },
    {
      imageSrc: StandupIMG,
      title: "Stand up comedy",
      dateText: "29/09/22",
    },
    {
      imageSrc: musicshowImg,
      title: "Folk Music + Puppet Show",
      dateText: "29/09/22",
    },
    {
      imageSrc: djImg,
      title: "DJ Night",
      dateText: "29/09/22",
    },
    {
      imageSrc: BookImg,
      title: "Book Signings",
      dateText: "29/09/22",
    },
    {
      imageSrc: InterviewImg,
      title: "Interview with Director",
      dateText: "29/09/22",
    },
    {
      imageSrc: TreasurehuntImg,
      title: "Treasure Hunt",
      dateText: "29/09/22",
    },
    {
      imageSrc: WorkshopIMG,
      title: "Workshops",
      dateText: "29/09/22",
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Flagship Events</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
            
                  <IconWithText>
                    <IconContainer>
                      <DateIcon />
                    </IconContainer>
                    <Text>{card.dateText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <Link to={{
                pathname: "/eventDetails",
                search: `?name=${card.title}`,
                state: card
              }}>
                <PrimaryButton>Check out now</PrimaryButton>
              </Link>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
