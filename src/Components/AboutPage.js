export function About() {
  return (
    <div className=" ease-in flex flex-col items-center duration-300 mt-14 md:mt-0">
      <h1 className="text-3xl text-center ease-in font-bold mb-5 md:mt-8">About</h1>

      <h1 className="text-2xl text-center font-bold">
        Welcome to my portfolio website!
      </h1>
      <div className="p-3 md:w-3/5">
        <p className="text-xl text-center p-4 font-semibold">
          Hi, I'm Vishal Sharma, a Delhi-based web developer with a passion for
          creating user-friendly websites and applications. I am proficient in
          various web development tools and frameworks, including HTML, CSS,
          JavaScript, and ReactJs.
        </p>
        <h2 className="text-xl font-bold pt-10  p-2">Education</h2>
        <ul className="leading-loose list-disc p-2">
          <li>
            Currently pursuing a Bachelor of Computer Applications (BCA) in Arts
            at Indira Gandhi National Open University,
          </li>
          <li>
            Senior Secondary (XII) in Arts from Government Boys Senior Secondary
            School (CBSE board) in 2017, achieving a high percentage of marks,
            demonstrating academic excellence and a strong work ethic.
          </li>
          <li>
            Secondary (X) from Government Boys Senior Secondary School (CBSE
            board) in 2015, receiving multiple academic and sports awards,
            reflecting my strong leadership, teamwork, and communication skills.
          </li>
        </ul>
        <h2 className="text-xl font-bold pt-10 p-2">Training</h2>
        <ul className="leading-loose list-disc p-2">
          <li>
            Web Design Development course at ARENA ANIMATION, Delhi. During this
            training, I have developed personal projects, including a portfolio
            website and an e-commerce platform, showcasing my coding skills and
            attention to detail.
          </li>
        </ul>
        <h2 className="text-xl font-bold pt-10 p-2">Skills</h2>
        <ul className="leading-loose list-disc p-2">
          <li>Advanced in HTML.</li>
          <li>Advanced in CSS.</li>
          <li>Advanced in Bootstrap.</li>
          <li>Intermediate in JavaScript, jQuery, and React.</li>
          <li>Intermediate in jQuery.</li>
          <li>Intermediate in ReactJs.</li>
          <li>Intermediate in Adobe Photoshop.</li>
        </ul>
        <h2 className="text-xl font-bold pt-10 p-2">Work Samples</h2>
        <p className="leading-loose p-2">
          <p>Check out my work samples on GitHub and Behance:</p>
          <p>
            On GitHub, I have developed personal projects, such as a social
            media app and a weather dashboard, showcasing my coding skills,
            problem-solving abilities, and innovation. I have also contributed
            to various open-source projects, collaborating with other developers
            and showcasing my teamwork and communication skills.
          </p>
          <a
            href="https://github.com/vishalking758"
            rel="noreferrer"
            target="_blank"
            className="font-bold mb-10 flex jystify-center items-center"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
            (GitHub)
          </a>
          <p>
            On Behance, I have designed graphic projects, such as logos,
            posters, and flyers, showcasing my visual design skills, creativity,
            and attention to detail. I have also developed personal projects,
            such as a social media app and a weather dashboard, showcasing my
            coding skills, problem-solving abilities, and innovation.
          </p>
          <a
            href="https://www.behance.net/vshlshrm"
            rel="noreferrer"
            target="_blank"
            className="font-bold mb-10 flex jystify-center items-center"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
            (Behance)
          </a>
        </p>
        
      </div>
      <p className="text-center text-white p-3  font-semibold dark:text-gray-800 dark:bg-white bg-gray-800 mt-10 h-13">
        Thank you for visiting my portfolio website. If you have any questions
        or would like to discuss a potential project, please feel free to
        contact me via email or phone.
      </p>
    </div>
  );
}
