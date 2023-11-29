export default function Box(unitId: any) {
  const defaultBoxes = [1, 2, 3];

  return (
    <div>
      {defaultBoxes.map((i) => (
        <div key={i} style={{ backgroundColor: unitId ? "white" : "black" }}>
          {unitId || "No Unit"}
        </div>
      ))}
    </div>
  );
}
