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
    type: string,
    subjectId: string | null
  };
