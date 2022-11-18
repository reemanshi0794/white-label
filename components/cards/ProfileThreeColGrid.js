import { ReactComponent as GithubIcon } from '../../assets/images/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/images/linkedin-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter-icon.svg';
import {
  Container,
  ContentWithPaddingXl,
} from '../../components/misc/Layouts.js';
// const HeadingContainer = tw.div``;
// const Heading = tw(SectionHeading)``;
// const Subheading = tw(SubheadingBase)`text-center mb-3`;
// const Description = tw(SectionDescription)`mx-auto text-center`;

// const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
// const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`;
// const CardImage = styled.div`
//   ${(props) =>
//     css`
//       background-image: url('${props.imageSrc}');
//     `}
//   ${tw`w-64 h-64 bg-contain bg-center rounded`}
// `;
// const CardContent = styled.div`
//   ${tw`flex flex-col items-center mt-6`}
//   .position {
//     ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
//   }
//   .name {
//     ${tw`mt-1 text-xl font-medium text-gray-900`}
//   9
// `;

// const CardLinks = styled.div`
//   ${tw`mt-6 flex`}
//   .link {
//     ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
//     .icon {
//       ${tw`fill-current w-6 h-6`}
//     }
//   }
// `;

export default ({
  heading = 'Meet These Fine Folks.',
  subheading = 'Our Team',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  cards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
      position: 'Founder',
      name: 'Adam Cuppy',
      links: [
        {
          url: 'https://twitter.com',
          icon: TwitterIcon,
        },
        {
          url: 'https://linkedin.com',
          icon: LinkedinIcon,
        },
        {
          url: 'https://github.com',
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
      position: 'Sr. Designer',
      name: 'Charlotte Hale',
      links: [
        {
          url: 'https://twitter.com',
          icon: TwitterIcon,
        },
        {
          url: 'https://linkedin.com',
          icon: LinkedinIcon,
        },
        {
          url: 'https://github.com',
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
      position: 'Jr. Designer',
      name: 'Silvester Wize',
      links: [
        {
          url: 'https://twitter.com',
          icon: TwitterIcon,
        },
        {
          url: 'https://linkedin.com',
          icon: LinkedinIcon,
        },
        {
          url: 'https://github.com',
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
      position: 'Lead Developer',
      name: 'Himali Turn',
      links: [
        {
          url: 'https://twitter.com',
          icon: TwitterIcon,
        },
        {
          url: 'https://linkedin.com',
          icon: LinkedinIcon,
        },
        {
          url: 'https://github.com',
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80',
      position: 'Sr. Developer',
      name: 'Troye Sivan',
      links: [
        {
          url: 'https://twitter.com',
          icon: TwitterIcon,
        },
        {
          url: 'https://linkedin.com',
          icon: LinkedinIcon,
        },
        {
          url: 'https://github.com',
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80',
      position: 'Quality Assurance',
      name: 'Holo Wo',
      links: [
        {
          url: 'https://twitter.com',
          icon: TwitterIcon,
        },
        {
          url: 'https://linkedin.com',
          icon: LinkedinIcon,
        },
        {
          url: 'https://github.com',
          icon: GithubIcon,
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <div>
          {subheading && (
            <h5 className="font-bold text-primary-500 text-center mb-3">
              {subheading}
            </h5>
          )}
          {heading && (
            <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl mx-auto text-center">
              {description}
            </p>
          )}
        </div>
        <div className="flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              className="mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center"
              key={index}
            >
              {/* <div className={`background-image: url('${card.imageSrc}') w-64 h-64 bg-contain bg-center rounded`} 
              imageSrc={card.imageSrc} /> */}
              <div>
                <img
                  src={card.imageSrc}
                  alt=""
                  className="w-64 h-64 bg-contain bg-center rounded"
                />
              </div>
              <div className="flex flex-col items-center mt-6">
                <span className="uppercase font-bold tracking-widest text-xs text-primary-500">
                  {card.position}
                </span>
                <span className="mt-1 text-xl font-medium text-gray-900">
                  {card.name}
                </span>
                <div className="mt-6 flex">
                  {card.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      className="mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300"
                      href={link.url}
                    >
                      {/* <link.icon className="fill-current w-6 h-6" /> */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
};
