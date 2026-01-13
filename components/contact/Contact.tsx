import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section className="flex justify-center px-4 py-20 bg-black" ref={ref}>
      <div className="w-full max-w-xl rounded-md border border-border shadow-lg p-8 space-y-8 bg-white text-emerald-900">
        
        <header className="text-center space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-xl">
            Reach out through any of the channels below
          </p>
        </header>

        <div className="space-y-6">
          {/* Name */}
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-xl">Name</span>
            <span className="text-sm sm:text-xl">Ezzaldeen Al-shaibani</span>
          </div>

          {/* Phone */}
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-xl">WhatsApp</span>
            <a
              href="https://wa.me/905013575567"
              className="text-sm sm:text-xl text-blue-600 hover:underline"
            >
              +90 501 357 55 67
            </a>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <span className="text-sm sm:text-xl">Email</span>
            <a
              href="mailto:ezzaldeen.alshaibani@gmail.com"
              className="text-sm sm:text-xl text-blue-600 hover:underline"
            >
              ezzaldeen.alshaibani@gmail.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
});

Contact.displayName = "Contact"

export default Contact;
