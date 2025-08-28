// import { Header, Image, Text } from "@/components";
import { Header, Image, Text } from "@/components/Header";
const Home = () => {
  return (
    <div>
      <div className="flex gap-3 pt-10 pl-10 w-[400px] h-[290px] ">
        <Image src="https://i1.wp.com/www.instantshift.com/assets/uploads/2019/01/everything-about-animation.jpg"></Image>
        <Image src="https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Kung-Fu-Panda.jpg"></Image>
        <Image src="https://www.fathomentertainment.com/wp-content/uploads/1400.167.still_.laika_.0002-1-1-scaled.jpg"></Image>
      </div>
      <div className="text-white flex gap-40">
        <Header head="Header"></Header>
        <Header head="Header"></Header>
      </div>
      <div className="text-white flex gap-8">
        <Text sub="An animated cartoon, or simply a cartoon, is an animated film, usually short, that features an exaggerated visual style. This style is often inspired by comic strips, gag cartoons, and other non-animated art forms. Cartoons frequently include anthropomorphic animals, superheroes, or the adventures of human protagonists. The action often revolves around exaggerated physical humor, particularly in predator/prey dynamics (e.g. cats and mices, coyotes and birds), where violent pratfalls such as falls, collisions, and explosions occur, often in ways that would be lethal in the real life."></Text>
        <Text sub="An animated cartoon, or simply a cartoon, is an animated film, usually short, that features an exaggerated visual style. This style is often inspired by comic strips, gag cartoons, and other non-animated art forms. Cartoons frequently include anthropomorphic animals, superheroes, or the adventures of human protagonists. The action often revolves around exaggerated physical humor, particularly in predator/prey dynamics (e.g. cats and mices, coyotes and birds), where violent pratfalls such as falls, collisions, and explosions occur, often in ways that would be lethal in the real life."></Text>
      </div>
    </div>
  );
};
export default Home;

// import { Box, Round } from "@/components";

// const Home = () => {
//   return (
//     <div className="flex gap-3">
//       <Box color="pink"></Box>
//       <Round color="green"></Round>
//       <Round color="pink"></Round>
//       <Box color="lightblue"></Box>
//       <Round color="yellow"></Round>
//       <Box color="pink"></Box>
//       <Round color="yellow"></Round>
//     </div>
//   );
// };
// export default Home;

// return (
//   <>
//     <div>
//       <div className=" w-[450] h-[540] bg-gray-800 rounded-4xl m-40 p-10 ">
//         <h3 className="text-2xl  text-indigo-400 font-semibold">Enterprise</h3>
//         <p className=" gap-x-2  mt-4 flex items-baseline font-semibold text-white gap-2">
//           <span className=" text-5xl ">$99</span>
//           <span className="text-gray-400 text-base">/month</span>
//         </p>
//         <p className="mt-6 text-base/7 text-gray-300">
//           Dedicated support and infrastructure for your company.
//         </p>
//         <ul className="mt-8 flex flex-col gap-3">
//           {[1, 2, 3, 4, 5].map((el) => {
//             return (
//               <li className="flex gap-2">
//                 <svg
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   data-slot="icon"
//                   aria-hidden="true"
//                   class="h-6 w-5 flex-none"
//                 >
//                   <path
//                     d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
//                     clip-rule="evenodd"
//                     fill-rule="evenodd"
//                   ></path>
//                 </svg>
//                 Unlimited products
//               </li>
//             );
//           })}
//         </ul>

//         <button className="mt-8 bg-indigo-500 block rounded md py-2.5 w-full text-center font-semibold text-white text-sm">
//           Get started today
//         </button>
//       </div>
//     </div>
//   </>
// );
// // }

// //  git init
// // doorooso 2dhiin copydood tavina
// // git add .
// // git origion
// // git push
