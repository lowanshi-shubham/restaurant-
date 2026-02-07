export default function NewsLetter() {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <div className="w-full bg-slate-900 px-2 text-center text-white py-20 flex flex-col items-center justify-center">
        <p className="text-indigo-500 font-medium">Get updated</p>
        <h1 className="max-w-lg font-semibold text-4xl/[44px] mt-2">
          Subscribe to our newsletter & get the latest news
        </h1>
        <div className="mt-12 w-full flex justify-center px-4">
  <div
    className="w-full max-w-xl 
               flex flex-col sm:flex-row 
               items-stretch 
              
               border border-slate-300 
               rounded-2xl 
               shadow-sm 
               overflow-hidden"
  >
    <input
      type="email"
      placeholder="Enter your email address"
      className=" bg-transparent
      flex-1 px-5 py-4 
                 outline-none 
                 text-sm"
    />

    <button
      className="bg-indigo-600 
                 hover:bg-indigo-700 
                 transition 
                 text-white 
                 px-6 
                 py-4 
                 text-sm 
                 font-medium"
    >
      Subscribe Now
    </button>
  </div>
</div>

      </div>
    </>
  );
}
