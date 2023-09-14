export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("ryanhuan")) {
    return (
      "AndrewID: ryanhuan"
    );
  }

  return "";
}
