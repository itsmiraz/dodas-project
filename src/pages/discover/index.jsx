import Header from "@/Components/Modules/Header/Header";
import Image from "next/image";
import Link from "next/link";
import discoverimg from "../../assets/images/sandbox.png";
import suggestedimg from "../../assets/images/suggestedimg.png";
const Discover = () => {
  const card = (
    <>
      <div class=" bg-white border border-gray-200 rounded-2xl shadow ">
        <Image src={suggestedimg} alt=""></Image>
        <div class="p-2">
          <h5 class="mb-2 text-2xl font-bold  text-gray-900 ">
            Planetarium Labs
          </h5>
          <p class="mb-3 text-sm font-semibold text-black">
            Planetarium is a new engine specializing in peer-to-peer gaming.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <section>
      <Header />
      <div className="container px-10 mx-auto">
        {/* Search Bar */}
        <form class="flex items-center">
          <div class="relative w-full">
            <div class="absolute inset-y-0 right-0 flex items-center pr-10 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-[#f3f3f3]  text-[#707070] text-lg font-semibold rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
              placeholder="SandBox "
              required
            />
          </div>
        </form>

        {/* Buttons */}
        <div className="my-4 flex">
          <button
            type="button"
            class="text-black hover:text-white bg-[#C9C9C9] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 "
          >
            All
          </button>
          <button
            type="button"
            class="text-black hover:text-white bg-[#C9C9C9] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 "
          >
            Land
          </button>
          <button
            type="button"
            class="text-black hover:text-white bg-[#C9C9C9] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 "
          >
            Avatars
          </button>
          <button
            type="button"
            class="text-black hover:text-white bg-[#C9C9C9] hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2.5 mr-2 mb-2 "
          >
            In Game Assests
          </button>
        </div>

        <div className="grid grid-cols-2  gap-5">
          <Image src={discoverimg} className="w-full" alt="" />
          <div>
            <h1 className="text-xl font-bold">About</h1>
            <p className="text-base font-medium my-4 text-[#4D5156]">
              The Sandbox is a 2D sandbox game for mobile phones and Microsoft
              Windows, developed by the game studio Pixowl and released on May
              15, 2012. It was released for PC on Steam on 29 June 2015. <br />
              The brand was acquired by Animoca Brands in 2018, and its name was
              used for a blockchain-based 3D open world game of the same name
              that launched on November 29 2021.{" "}
              <span className="text-[#1A0DAB] cursor-pointer">Wikipedia</span>
            </p>
          </div>
        </div>

        <div className="border my-4 font-semibold text-black  flex gap-20 w-fit p-6 rounded-2xl">
          <div>
            <p className="my-2">MCap: $194,719,416 USD</p>

            <p className="flex gap-3">
              Collections:{" "}
              <ul class=" space-y-1 list-disc list-inside">
                <li>Land: 100,00</li>
                <li>Avatars: 10,000</li>
                <li>In Game Assets: 200,000</li>
              </ul>
            </p>
            <p className="my-2">Social:</p>
          </div>
          <div>
            <p className="mb-4">Blockchain: Ethereum </p>
            <p className="mb-4">Marketplace: OpenSea, Sandbox Marketplace</p>
            <p className="mb-4">
              Website:{" "}
              <Link href="/" class="">
                https://www.sandbox.game/en/
              </Link>
            </p>
          </div>
        </div>

        <div className="flex my-10 gap-20 font-semibold">
          <div className="space-y-2">
            <p>
              Developer: <span className="text-[#1A0DAB]">PIXOWL INC.</span>{" "}
            </p>
            <p>Initial release date:May 15, 2012</p>
            <p>
              Platforms:{" "}
              <span className="text-[#1A0DAB]">
                {" "}
                Microsoft Windows, Android, iOS{" "}
              </span>{" "}
            </p>
          </div>

          <div className="space-y-2">
            <p>
              Publisher: <span className="text-[#1A0DAB]"> PIXOWL INC. </span>
            </p>
            <p>
              Mode:{" "}
              <span className="text-[#1A0DAB]"> Single-player video game </span>
            </p>
            <p>
              Genres:{" "}
              <span className="text-[#1A0DAB]">
                {" "}
                Sandbox, Open world, Simulation video game, Indie game, Casual
                game, Nonlinear gameplay, Strategy
              </span>
            </p>
          </div>
        </div>

        {/* Suggestions  */}

        <div className="my-10">
          <h1 className="text-3xl font-bold">Suggestions </h1>
                  <div className="grid gap-8 my-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                  {card}
                  {card}
                  {card}
                  {card}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
