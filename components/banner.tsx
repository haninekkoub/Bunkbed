export default function BannerText() {
  return (
    <section className="mt-24 md:mt-48 mb-24">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-60 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
        >
          <div className="relative animate-[herobackground_3s_ease-in-out_infinite]  top-52 -translate-x-10 aspect-[1155/678] w-[36.125rem] rotate-[190deg] gradien  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] " />
        </div>

        <p className="font-Outreque font-bold text-[calc(10000vw/1440)] 4xl:text-8xl text-center sm:leading-[50px] md:leading-[80px] xl:leading-[100px] tracking-tighter">
          We Build
          <span className=" gradienText italic px-4">Fully Customized </span>
          Websites That Wow & <span className="italic">Convert.</span>
        </p>
      </div>
    </section>
  );
}
