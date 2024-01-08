function CreateCustomer(name: string, age?: number) {
  return {
    name,
    age,
  };
}

function GetBookByTitle(title: string = "Vue Book"): string | number {
  if (title === "test") return "test";

  return Math.floor(Math.random() * 5) + 1;
}

function GetPopulorBook(title: string = GetMostPopularBook()): string | number {
  if (title === "test") return "test";

  return Math.floor(Math.random() * 5) + 1;
}

function GetMostPopularBook(): string {
  return "Vue Book";
}

// 如果是 rest 參數，資料型別是陣列，而且只能有一個，而且必須是最後一個參數
function GetBooksReadForCust(name: string, ...bookIDs: number[]): string[] {
  console.warn(name, bookIDs);
  return ["Vue Book"];
}

const GetReview = (title: string): string | number => {
  if (title === "test") return "test";

  return Math.floor(Math.random() * 5) + 1;
};

function PrintMovieInfo(author: string): string[] {
  return ["Vue Book"];
}
