export default function Status({
  statusCounts,
  questionStatus,
}: {
  statusCounts: number;
  questionStatus: number;
}) {
  let backgroundColor: string;

  if (questionStatus === statusCounts) {
    backgroundColor = "gray";
  } else if (questionStatus > statusCounts!) {
    backgroundColor = "green";
  } else {
    backgroundColor = "red";
  }

  return (
    <div className="h-4 w-4 rounded-full" style={{ backgroundColor }}></div>
  );
}
