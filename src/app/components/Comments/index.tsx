import React, {useState, MutableRefObject as MTO} from "react";
import {Heading, Stack} from "@chakra-ui/react";

import AskInput from "./AskInput";
import QuestionBox from "./QuestionBox";
import FAQ from "./FAQ";

const initialState = [
  {question: "Como se llama la tienda ??"},
  {
    question: "Genial por dónde mandan los productos por Andreani o algún correo",
    answer: "Por correo argentino.",
    date: new Date(2021, 4, 15),
  },
  {
    question: "Hola buen día hacen envíos a Río cuarto Córdoba y que costó tiene",
    answer: "Hola hacemos envios y el mismo es sin costo. Saludos.",
    date: new Date(2021, 4, 8),
  },
];

const Comments = () => {
  const [questions, setQuestions] = useState(initialState);

  const addQuestion = (input: MTO<any>) => {
    if (input) {
      if (input && input.current.value) {
        setQuestions([
          {
            question: input.current.value,
          },
          ...questions,
        ]);

        input.current.value = "";
      }
    }
  };

  return (
    <Stack spacing={8}>
      <Heading as="h3" variant="thin_gray">
        Preguntas y respuestas
      </Heading>

      <FAQ />

      <AskInput handleClick={addQuestion} />

      <Stack spacing={4}>
        <Heading as="h4" color="blackAlpha.800" fontSize="lg">
          Últimas realizadas
        </Heading>
        {questions.map((question, idx) => (
          <QuestionBox key={idx} {...question} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Comments;
