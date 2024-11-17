
// const NewsCardDetail = (data) => {

//     const { newsCard } = data;
//     console.log(newsCard)

//     return (
//         <div>
//             <div className="border border-solid border-gray-300 rounded-lg mb-10">
//                 <div className="flex items-center justify-between bg-slate-100 rounded-t-lg p-7 w-full">
//                     <div className="flex items-center gap-4">
//                         <img
//                             className="w-11 h-11 rounded-full"
//                             src={newsData.author.img}
//                             alt="" />
//                         <div>
//                             <h2 className="text-base font-semibold">{newsData.author.name}</h2>
//                             <h4 className="text-[#706F6F]">{newsData.author.published_date}</h4>
//                         </div>
//                     </div>
//                     <div className="flex gap-3">
//                         <CiBookmark className="size-7" />
//                         <BsShare className="size-7" />
//                     </div>
//                 </div>
//                 <div className="p-7">
//                     <div>
//                         <h2 className="text-xl font-bold mb-7">{newsData.title}</h2>
//                         <img
//                             className="w-full"
//                             src={newsData.image_url}
//                             alt="" />
//                         <p className="text-base font-normal text-[#706F6F] mt-8">{newsData.details}</p>
//                         <Link to={`/news/${newsData._id}`} className="text-[#f36609] text-lg font-semibold">Read More</Link>
//                     </div>
//                     <div className="divider"></div>
//                     <div className="flex justify-between items-center gap-3">
//                         <div className="flex items-center gap-3">
//                             {
//                                 [...Array(5)].map((_, i) => (<AiFillStar
//                                     key={i}
//                                     className={`text-yellow-500 size-7 ${i < Math.round(newsData.rating.number) ? "" : "opacity-50"}`}></AiFillStar>))
//                             }
//                             <h2>{newsData.rating.number}</h2>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <IoEye className="size-7" />
//                             <h2 className="text-base font-medium">{newsData.total_view}</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewsCardDetail;