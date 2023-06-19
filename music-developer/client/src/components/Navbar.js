export default function NavBar() {
  return (
    <>
      <div className="navbar justify-between px-10 bg-black">
        <a className="text-white normal-case text-xl">BandBridge</a>
        <div className="navbar-end">
          <a className="btn btn-outline rounded text-white w-44">Login / Sign Up</a>
        </div>
      </div>
    </>
  );
}
