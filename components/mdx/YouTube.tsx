export default function YouTube({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className="bottom-1 aspect-video w-full rounded-xl border border-neutral-300"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}
