import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddIcon from "@mui/icons-material/Add";
import Card from "../components/ui/Card";
import Input from "../components/ui/forms/Input";

interface NewBookProps {
  imageURL: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  pages: number;
}

export default function Books() {
  const [newBookData, setNewBookData] = useState<NewBookProps>({
    imageURL: "",
    title: "",
    author: "",
    genre: "",
    description: "",
    pages: 100,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<any>
  ) => {
    e.preventDefault();
    console.log(newBookData);
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<any>
  ) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setNewBookData({ ...newBookData, imageURL: fileReader.result as string });
    };

    fileReader.readAsDataURL(file);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<any>
  ) => {
    const { name, value } = e.target;

    setNewBookData({ ...newBookData, [name]: value });
  };

  return (
    <>
      <Card icon={<AutoStoriesIcon fontSize="large" />} title={"Books"}>
        <label className="text-4xl font-bold text-neutral-400">131</label>
      </Card>
      <Card
        className="col-span-full"
        icon={<AutoStoriesIcon fontSize="large" />}
        title="Best Sellers"
      >
        <div className="flex flex-row gap-4 w-full overflow-x-auto">
          <div className="flex flex-col gap-2">
            <div className="w-[250px] h-[300px] relative">
              <div className="absolute left-0 top-0 w-full h-full bg-neutral-600">
                <div className="h-full w-[175px] bg-neutral-500 mx-auto" />
              </div>
            </div>
            <div className="flex flex-row w-full text-xl text-neutral-400 justify-between">
              <label>300 Sales</label>
              <label>610 Rents</label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-[250px] h-[300px] relative">
              <div className="absolute left-0 top-0 w-full h-full bg-neutral-600">
                <div className="h-full w-[175px] bg-neutral-500 mx-auto" />
              </div>
            </div>
            <div className="flex flex-row w-full text-xl text-neutral-400 justify-between">
              <label>300 Sales</label>
              <label>610 Rents</label>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-[250px] h-[300px] relative">
              <div className="absolute left-0 top-0 w-full h-full bg-neutral-600">
                <div className="h-full w-[175px] bg-neutral-500 mx-auto" />
              </div>
            </div>
            <div className="flex flex-row w-full text-xl text-neutral-400 justify-between">
              <label>300 Sales</label>
              <label>610 Rents</label>
            </div>
          </div>
        </div>
      </Card>

      <Card
        className="col-span-2"
        icon={<AddIcon fontSize="large" />}
        title="Add a book"
      >
        <form onSubmit={handleSubmit}>
          <Input title="Title" placeholder="Book title" />
        </form>
      </Card>
    </>
  );
}
