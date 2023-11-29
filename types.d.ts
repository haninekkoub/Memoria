type Subject = {
    id: string,
    name: string
}

type Question = {
    id: string,
    unit: number,
    name: string,
    description: String,
    status: number,
    type: QuestionType,
    subjectId: string | null
  };

  enum QuestionType {
    DATES = 'DATES',
    TERMINOLOGIE = 'TERMINOLOGIE',
    FIGURES = 'FIGURES',
  };
  