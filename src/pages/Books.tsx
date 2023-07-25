import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddIcon from "@mui/icons-material/Add";
import Card from "../components/ui/Card";
import Input from "../components/ui/forms/Input";
import BookImage from "../components/ui/BookImage";
import Button from "../components/ui/Button";
import Select from "../components/ui/forms/Select";
import TextArea from "../components/ui/forms/TextArea";

interface NewBookProps {
  imageURL: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  pages: number;
}

export default function Books() {
  const fileInputRef = useRef(null);
  const [newBookData, setNewBookData] = useState<NewBookProps>({
    imageURL: "",
    title: "",
    author: "",
    genre: "",
    description: "",
    pages: 0,
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<any>
  ) => {
    e.preventDefault();
    console.log(newBookData);

    const form: any = e.target;
    form.reset();
    setNewBookData({
      imageURL: "",
      title: "",
      author: "",
      genre: "",
      description: "",
      pages: 0,
    });
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<any>
  ) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      console.log(fileReader.result);
      setNewBookData({ ...newBookData, imageURL: fileReader.result as string });
    };

    fileReader.readAsDataURL(file);
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (e: ChangeEvent<any>) => {
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {newBookData.imageURL && (
            <BookImage imageURL={newBookData.imageURL} />
          )}
          <input
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
            type="file"
            accept="image"
          />
          <Button
            variant="secondary"
            className="w-full"
            rounded={false}
            type="button"
            onClick={() => {
              const input: any = fileInputRef.current;
              input?.click();
            }}
          >
            Upload Image
          </Button>

          <Input
            title="Title"
            placeholder="Book title"
            name="title"
            onChange={handleChange}
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              name="price"
              onChange={handleChange}
              placeholder="Book price"
              title="Price"
            />
            <Input
              name="pages"
              onChange={handleChange}
              placeholder="Book pages"
              title="Pages"
            />
          </div>

          <Select
            title="Genre"
            name="genre"
            onChange={handleChange}
            options={["Choose a genere", "Drama", "Action", "Self Development"]}
          />

          <Select
            title="Author"
            name="author"
            onChange={handleChange}
            options={["Choose an author", "Popa Liviu", "Ion Creanga"]}
          />

          <TextArea
            title="Description"
            name="description"
            onChange={handleChange}
          />
          <Button variant="primary" rounded={false} className="w-full">
            Add Book
          </Button>
        </form>
      </Card>
    </>
  );
}
