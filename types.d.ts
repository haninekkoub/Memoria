type Subject = {
    "id": string,
    "name": string,
}

type Question = {
    id: string,
    unit: number,
    name: string,
    description: number,
    status: number,
    type: string,
    subjectId: string | null
  };
