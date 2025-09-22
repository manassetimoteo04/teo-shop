export default function generateSlug(name: string): string {
  return name.toLocaleLowerCase().replaceAll(" ", "_");
}
