export default function bannerText() {
  return (
    <section className="mt-[200px] ">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 90% 14%, 75% 18%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 36% 43%, 22% 66%, 0 66%, 17.9% 100%, 34% 87%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative top-10 -translate-x-10 aspect-[1155/678] w-[36.125rem] rotate-[30deg] gradien  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
          {/*  */}
        </div>

        <p className="font-Outreque font-bold text-8xl text-center leading-[100px] tracking-tighter">
          We Build
          <span className=" gradienText italic px-4">Fully Customized </span>
          Websites That Wow & <span className="italic">Convert.</span>
        </p>
      </div>
    </section>
  );
}
