import React from "react";
import {HStack, Icon, Link, Stack, Text} from "@chakra-ui/react";
import {BsArrowReturnRight} from "react-icons/bs";

interface QuestionNecessary {
  question: string;
  answer: undefined;
  date: undefined;
}
interface QuestionOptional {
  question: string;
  answer: string;
  date: Date;
}

const QuestionBox = ({question, answer, date}: QuestionNecessary | QuestionOptional) => {
  const [reportAnswer, setReportAnswer] = React.useState("none");
  const [reportQuestion, setReportQuestion] = React.useState("none");

  return (
    <Stack paddingX={2}>
      <HStack
        onMouseEnter={() => setReportQuestion("initial")}
        onMouseLeave={() => setReportQuestion("none")}
      >
        <Text>{question}</Text>
        <Link color="secondary.500" display={reportQuestion} fontSize="sm">
          Denunciar
        </Link>
      </HStack>
      {answer && date && (
        <HStack
          color="blackAlpha.600"
          pl={4}
          onMouseEnter={() => setReportAnswer("initial")}
          onMouseLeave={() => setReportAnswer("none")}
        >
          <Icon as={BsArrowReturnRight} height={5} width={5} />
          <Text>{answer}</Text>
          <Text fontSize="sm">{date.toLocaleDateString("pt-PT")}</Text>
          <Link color="secondary.500" display={reportAnswer} fontSize="sm">
            Denunciar
          </Link>
        </HStack>
      )}
    </Stack>
  );
};

export default QuestionBox;
