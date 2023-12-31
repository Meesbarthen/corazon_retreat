export default function VideoContainer() {
  return (
    <div className="p-2 md:py-12 shadow-2xl bg-white flex flex-col items-center">
      <div className="max-w-2xl flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold leading-10 tracking-tight text-gray-900 my-6 md:mb-12">
          Check onze trailer
        </h2>
        <video
          muted={false}
          playsInline={true}
          controls={true}
          src="/corazon_trailer.mp4"
          className="rounded-lg"></video>
      </div>
    </div>
  );
}
