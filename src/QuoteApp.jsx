import { useState } from "react";
import {
  AuthorBox,
  ButtonsBox,
  TwitterButton,
  PrimaryButton,
  QuoteBox,
  TextBox,
} from "./components";
import { generateNumRandomByArr } from "./helpers/generateNumRandomArr";
import { useGetQuotes } from "./hooks/useGetQuotes";

function QuoteApp() {
  const [quoteNum, setQuoteNum] = useState(0);
  const { quotes, isLoading } = useGetQuotes();
  const { author, quote } = isLoading || quotes[quoteNum];
  const handleClick = () => {
    setQuoteNum(generateNumRandomByArr(quotes));
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 text-gray-900">
      <div className="container flex items-center justify-center">
        <QuoteBox>
          <TextBox text={quote} />
          <AuthorBox author={author} />
          <ButtonsBox>
            <TwitterButton quote={quote} author={author} />
            <PrimaryButton text="New Quote" handleClick={handleClick} />
          </ButtonsBox>
        </QuoteBox>
      </div>
    </div>
  );
}

export default QuoteApp;
