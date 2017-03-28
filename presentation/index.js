// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Image,
  Slide,
  Text,
  Link,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/fonts/fonts.css");

const images = {
  atomDesign: require("../assets/atomic-design.png"),
  chemicalEq: require("../assets/chemical-equation.png"),
  htmlTable: require("../assets/html-periodic-table.png"),
  polymerElements: require("../assets/polymer-elements.png"),
  angular: require("../assets/angular-icon.svg"),
  comps: require("../assets/components.png"),
  compsConnected: require("../assets/components-connected.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#EEE",
    secondary: "#1F2022",
    tertiary: "#b52e31",
    quartenary: "#CECECE"
  },
  {
    primary: "Roboto",
    secondary: "Track"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={1}
            fit
            caps
            lineHeight={2}
            textFont="secondary"
            textColor="secondary"
          >
            Atomic components design
          </Heading>
          <Text textColor="tertiary" size={1} fit bold>
            Comment architecturer ses composants en Angular
          </Text>
        </Slide>

        {/*Intro*/}
        <Slide
          transition={["fade"]}
          bgImage={images.atomDesign}
          bgColor="#f6f5de"
        />
        <Slide transition={["fade"]} bgColor="#f6f5de">
          <Heading size={2} textColor="#78776A" textFont="secondary" caps>
            Concept ancien
          </Heading>
          <Appear>
            <Text textColor="secondary" size={1} fit bold>
              Brad Frost a écrit <b>Atomic Design</b> en 2013&nbsp;
              <Link
                size={1}
                href="http://bradfrost.com/blog/post/atomic-web-design/"
              >
                http://bradfrost.com/blog/post/atomic-web-design/
              </Link>
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.htmlTable}
          bgColor="#f6f5de"
        />
        <Slide
          transition={["fade"]}
          bgImage={images.chemicalEq}
          bgColor="#f6f5de"
        />
        <Slide
          transition={["fade"]}
          bgImage={images.atomDesign}
          bgColor="#f6f5de"
        />
        <Slide
          transition={["fade"]}
          bgImage={images.polymerElements}
          bgColor="#f6f5de"
        />

        {/*Angular*/}
        <Slide
          textColor="tertiary"
          bgImage={images.angular}
          transition={["zoom"]}
        >
          <Heading size={2} textColor="secondary" textFont="secondary" caps>
            Angular
          </Heading>
          <Text>
            ?
          </Text>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} caps textFont="secondary">
            Un concept <br />↔<br /> Un composant
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="markup"
          code={require("!raw-loader!../assets/code/bad-separation.html")}
          ranges={[
            { loc: [0, 13], title: "comment.html" },
            { loc: [0, 3], title: "Un bouton d'activation" },
            { loc: [4, 8], title: "Un formulaire" },
            { loc: [8, 12], title: "Une liste" },
            { loc: [0, 13], title: "Mauvaise séparation" }
          ]}
        />
        <Slide
          transition={["fade"]}
          bgImage={images.comps}
          bgSize="contain"
          bgRepeat="no-repeat"
        />
        <CodeSlide
          transition={[]}
          lang="markup"
          code={require("!raw-loader!../assets/code/better-separation.html")}
          ranges={[
            { loc: [0, 7] },
            { loc: [0, 3], title: "Un bouton d'activation" },
            { loc: [4, 5], title: "Un formulaire" },
            { loc: [5, 6], title: "Une liste" }
          ]}
        />
        <Slide
          transition={["fade"]}
          bgImage={images.compsConnected}
          bgSize="contain"
          bgRepeat="no-repeat"
        />

        <Slide transition={["fade"]}>
          <Heading size={3} caps textFont="secondary">
            Smart / Dumb
          </Heading>
          <Appear>
            <Text size={3} textColor="secondary">
              Container / Presentational
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]}>
          <BlockQuote>
            <Quote textColor="secondary" size={2}>
              Container components:<br />
              Are concerned with how things work.
            </Quote>
            <Cite>Dan Abramov</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]}>
          <BlockQuote>
            <Quote textColor="secondary" size={2}>
              Presentational components:<br />
              Are concerned with how things look.
            </Quote>
            <Cite>Dan Abramov</Cite>
          </BlockQuote>
          <Link
            size={1}
            href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"
          >
            https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
          </Link>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="javascript"
          code={require("!raw-loader!../assets/code/dumb.ts")}
          ranges={[
            { loc: [1, 2], title: "<app-comment>" },
            { loc: [3, 11], title: "Le template" },
            { loc: [13, 16], title: "In/Out", note: "Pas d'état" }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="javascript"
          code={require("!raw-loader!../assets/code/smart.ts")}
          ranges={[
            { loc: [1, 2], title: "<app-comments>" },
            { loc: [3, 8], title: "Le template" },
            { loc: [11, 13], title: "Etat" },
            { loc: [15, 23], title: "Une logique métier" }
          ]}
        />
      </Deck>
    );
  }
}
