import AddNewSubject from "@/components/addNewSubject";
import PopUp from "@/components/popUp";
import Subject from "@/components/subject";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-16">
        <PopUp title={"Add Subject"}>
          <AddNewSubject />
        </PopUp>
      </div>
      <Subject />
    </div>
  );
}
