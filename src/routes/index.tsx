// src/router/about.ts
export const aboutRoute = {
  path: "/about",
  component: About,
};

function About() {
  return (
    <div>
      <div className="h-100 flex justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-start mt-4 bg-[url('/about_us/about_bg.svg')] bg-cover bg-center bg-no-repeat h-50 w-full">
          <h1 className="text-[24px] md:text-[36px] font-bold">About Us</h1>

          <p className="text-[18px] md:text-[24px] text-black-100">
            We assist in creating strategies, as well as in design and
            development.
          </p>
          <p className="text-[18px] md:text-[24px] text-black-100">
            We are values-driven and we take on work based on alignment with our
            values.
          </p>
        </div>
      </div>
    </div>
  );
}
