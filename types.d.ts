type Subject = {
    id: string,
    name: string
}

type Question = {
    id: string,
    unit: number,
    name: string,
    description: string,
    status: number,
    type: QuestionType,
    subjectId: string | null
  };

  type QuestionType = "DATES" | "TERMINOLOGIE" | "FIGURES";
  

