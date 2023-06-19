export default function Landing() {
    return (
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1453090927415-5f45085b65c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
          alt="landing photos"
          className="h-4/6 w-full"
        />
  
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
            <h1 className="text-3xl m-5">Welcome To Band Brdige</h1>
            <h2>Let's find your next </h2>
          <button className="btn btn-outline">Find Local Bands</button>
          <button className="btn btn-outline">Find Local Concerts</button>
        </div>
      </div>
    );
  }
