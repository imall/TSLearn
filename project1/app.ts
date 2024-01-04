const GetReview = (title: string): string | number => {
  if (title === "test") return "test";

  return Math.floor(Math.random() * 5) + 1;
};

function PrintMovieInfo(author: string): string[] {
  return ["Vue Book"];
}
