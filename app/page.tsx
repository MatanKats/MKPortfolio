export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-6xl md:text-7xl">
            Matan Katsnelson
          </h1>
          <h2 className="max-w-2xl text-2xl font-semibold leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-3xl">
            Full-stack developer and Python developer. Graduated with honors with a bachelor's degree in computer science
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Proficient in full-stack web development with expertise in Python, modern JavaScript frameworks, 
            database design, RESTful APIs, and cloud technologies. Experienced in building scalable applications 
            and delivering clean, efficient code solutions.
          </p>
        </div>
      </main>
    </div>
  );
}
