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
  angular: require("../assets/angular-icon.svg")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#EEE",
    secondary: "#1F2022",
    tertiary: "#42affa",
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
        <Slide textColor="tertiary" bgImage={images.angular} transition={["zoom"]}>
          <Heading size={2} textColor="secondary" textFont="secondary" caps>
            Angular
          </Heading>
          <Text>
            ?
          </Text>
        </Slide>
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
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("!raw-loader!../assets/code.example1")}
          ranges={[
            { loc: [0, 10], title: "Presentational component" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [8, 10] }
          ]}
        />
      </Deck>
    );
  }
}
