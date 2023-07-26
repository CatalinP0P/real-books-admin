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
import CustomTable, {
  TableColProps,
} from "../components/ui/tables/CustomTable/CustomTable";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

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

  const cols: TableColProps[] = [
    {
      title: "id",
      sortable: true,
    },
    {
      title: "title",
      sortable: true,
    },
    {
      title: "author",
      sortable: true,
    },
    {
      title: "genre",
      sortable: true,
    },
    {
      title: "pages",
      sortable: true,
    },
    {
      title: "price",
      sortable: true,
    },
    {
      title: "sales",
      sortable: true,
    },
    {
      title: "rentals",
      sortable: true,
    },
  ];

  const [rows, setRows] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self Development",
      pages: 310,
      price: 120,
      sales: 120,
      rentals: 412,
    },
    {
      id: 2,
      title: "Cant Hurt Me",
      author: "David Goggings",
      genre: "Self Development",
      pages: 310,
      price: 220,
      sales: 90,
      rentals: 312,
    },
    {
      id: 3,
      title: "Amintiri din Copilarie",
      author: "Ion Creanga",
      genre: "Action",
      pages: 411,
      price: 60,
      sales: 40,
      rentals: 97,
    },
  ]);

  const removeRow = (id: number) => {
    if (window.confirm("Sure?")) setRows(rows.filter((m) => m.id != id));
  };

  return (
    <>
      <Card icon={<AutoStoriesIcon fontSize="large" />} title={"Books"}>
        <label className="text-4xl font-bold text-neutral-400">
          {rows.length}
        </label>
      </Card>
      <Card
        className="col-span-full"
        icon={<TrendingUpIcon fontSize="large" />}
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
        title="All Books"
        className="col-span-full"
        icon={<AutoStoriesIcon fontSize="large" />}
      >
        <CustomTable rows={rows} cols={cols} removeRow={removeRow} />
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
