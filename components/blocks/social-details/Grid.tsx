// // import { cn } from "@/utils/cn";
// // import React from "react";
// // import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// // import {
// //     IconArrowWaveRightUp,
// //     IconBoxAlignRightFilled,
// //     IconBoxAlignTopLeft,
// //     IconClipboardCopy,
// //     IconFileBroken,
// //     IconSignature,
// //     IconTableColumn,
// // } from "@tabler/icons-react";

// // interface gridProps {
// //     data: any[];
// // }

// // const Grid: React.FC<gridProps> = ({ data }) => {

// //     // console.log(data);
// //     const { linkedin, twitter, facebook, youtube, instagram, github, snapchat, tiktok } = data;

// //     return (
// //         <BentoGrid className="max-w-4xl mx-auto mt-12">
// //             {items.map((item, i) => (
// //                 <BentoGridItem
// //                     key={i}
// //                     title={item.title}
// //                     description={item.description}
// //                     header={item.header}
// image: "",
//     //                     icon={item.icon}
//     //                     className={i === 3 || i === 6 ? "md:col-span-2" : ""}
//     //                 />
//     //             ))}
//     //         </BentoGrid>
//     //     );
//     // }
//     // const Skeleton = () => (
//     //     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
//     // );
//     // const items = [
//     //     {
//     //         title: "Instagram",
//     //         description: {instagram},
//     //         header: <Skeleton />,
//     image: "",
//         //         icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//         //     },
//         //     {
//         //         title: "Facebook",
//         //         description: {facebook},
//         //         header: <Skeleton />,
//         image: "",
//             //         icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//             //     },
//             //     {
//             //         title: "LinkedIn",
//             //         description: {LinkedIn},
//             //         header: <Skeleton />,
//             image: "",
//                 //         icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//                 //     },
//                 //     {
//                 //         title: "Twitter",
//                 //         description:
//                 //             {twitter},
//                 //         header: <Skeleton />,
//                 image: "",
//                     //         icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//                     //     },
//                     //     {
//                     //         title: "Youtube",
//                     //         description: {youtube},
//                     //         header: <Skeleton />,
//                     image: "",
//                         //         icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//                         //     },
//                         //     {
//                         //         title: "SnapChat",
//                         //         description: {snapchat},
//                         //         header: <Skeleton />,
//                         image: "",
//                             //         icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//                             //     },
//                             //     {
//                             //         title: "GitHub",
//                             //         description: {github},
//                             //         header: <Skeleton />,
//                             image: "",
// //         icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
// //     },
// // ];


// // export default Grid;


import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";

interface GridProps {
    data: any;
}

const Grid: React.FC<GridProps> = ({ data }) => {
    const items = [
        {
            // title: "Instagram",
            title: data.instagram ? <a target="_blank" className="text-red-500 font-bold underline" href={data.instagram}>Instagram</a> : "Data not Found",
            header: "Instagram",
            image: "/logos/instagram.jpg",
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            // title: "Facebook",
            title: data.facebook ? <a target="_blank" className="text-red-500 font-bold underline" href={data.facebook}>Facebook</a> : "Data not Found",
            header: "Facebook",
            image: "/logos/facebook.png",
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            // title: "LinkedIn",
            title: data.linkedin ? <a target="_blank" className="text-red-500 font-bold underline" href={data.linkedin}>LinkedIn</a> : "Data not Found",
            header: "LinkedIn",
            image: "/logos/linked-in.png",
            icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
            // title: "Twitter",
            title: data.twitter ? <a target="_blank" className="text-red-500 font-bold underline" href={data.twitter}>Twitter</a> : "Data not Found",
            header: "Twitter",
            image: "/logos/twitter.jpg",
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
        {
            // title: "YouTube",
            title: data.youtube ? <a target="_blank" className="text-red-500 font-bold underline" href={data.youtube}>YouTube</a> : "Data not Found",
            header: "YouTube",
            image: "/logos/youtube.png",
            icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        },
        {
            // title: "Snapchat",
            title: data.snapchat ? <a target="_blank" className="text-red-500 font-bold underline" href={data.snapchat}>Snapchat</a> : "Data not Found",
            header: "Snapchat",
            image: "/logos/Snapchat.jpg",
            icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
        },
        {
            // title: "GitHub",
            title: data.github ? <a target="_blank" className="text-red-500 font-bold underline" href={data.github}>GitHub</a> : "Data not Found",
            header: "GitHub",
            image: "/logos/github.png",
            icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        },
        {
            // title: "TikTok",
            title: data.tiktok ? <a target="_blank" className="text-red-500 font-bold underline" href={data.tiktok}>TikTok</a> : "Data not Found",
            header: "TikTok",
            image: "/logos/tiktok.png",
            icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        },
    ];

    return (
        <BentoGrid className="max-w-4xl mx-auto mt-12">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    // description={item.description}
                    header={item.header}
                    image={item.image}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
};

export default Grid;
