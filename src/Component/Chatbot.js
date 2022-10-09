import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Hey!",

    // This calls the next id
    // i.e. id 1 in this case
    trigger: "1",
  },
  {
    id: "1",

    // This message appears in
    // the bot chat bubble
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: "4",
  },

  {
    id: "4",

    // Here we want the user
    // to enter input
    user: true,
    trigger: "5",
  },

  {
    id: "5",
    message: "Please send the details via mail.Thank you!",

    // options: [
    //   // When we need to show a number of
    //   // options to choose we create alist
    //   // like this
    //   //   { value: 1, label: "Product related query" },
    //   //   { value: 2, label: "Payment issue" },
    //   //   { value: 3, label: "Offers & Discount" },
    //   //   { value: 4, label: "Order status" },

    // ],
    end: true,
  },
];

// Creating our own theme
const theme = {
  background: "black",
  headerBgColor: "brown",
  headerFontSize: "20px",
  botBubbleColor: "brown",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "white",
  userFontColor: "black",
};

// Set some properties of the bot
const config = {
  //   botAvatar: "img.png",

  floating: true,
};

const Chatbot = () => {
  return (
    <>
      <div className="App">
        <ThemeProvider theme={theme}>
          <ChatBot
            // This appears as the header
            // text for the chat bot
            headerTitle="Welcome!"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
      </div>
    </>
  );
};

export default Chatbot;
