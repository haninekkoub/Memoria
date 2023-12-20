type Subject = {
    id: string,
    name: string
    slug : string
    color: string | null
    
}

type Question = {
    id: string,
    unit: number,
    name: string,
    slug : string
    description: string,
    status: number,
    type: QuestionType,
    subjectName: string | null
  };

  type QuestionType = "DATES" | "TERMINOLOGIE" | "FIGURES";
  

