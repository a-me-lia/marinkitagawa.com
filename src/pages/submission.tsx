export default function Submission() {
  return (
    <div className="flex flex-col items-center justify-between align-middle">
      <a className="font-bold self">Sign up for updates</a>
      {/*<a className="absolute bottom-5 left-10 mt-[0.2rem] text-white/[0.5] z-50 hover:hidden">IMmari@nerv.company</a>*/}

      <form action="">
        <div className="flex flex-row w-min rounded-full border-slate-600 bg-white border-2  mt-2">
          <label className="absolute mt-[0.2rem] text-black/[0.5]  z-50 hover:hidden"></label>
          <input
            name="email"
            className= "text-slate-600 pl-6 pr-24  rounded-full"
            placeholder="MarinK@gmail.com"
            required
          ></input>
        <button
            type="submit"
            className="ml-[-96px] rounded-full bg-slate-600  px-5 py-1 "
          >
            Submit!
          </button>
        </div>


      </form>
    </div>
  )
}
