"use client";
import fetchData from "@/api/rapid_apis/tweet";
import { formatNumber } from "@/utils/likes_number_converter"
import Tweet_hero from "@/components/blocks/tweet/tweet-hero";
import extract from "@/utils/tweet-id-extractor";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaRegComment, FaTwitter } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { toPng } from 'html-to-image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import toast from "react-hot-toast";


export default function Tweet() {

  const [tweetUrl, settweetUrl] = useState('');
  const [container, setcontainer] = useState({});
  let id;

  // useEffect(() => {
  //   if (container !== null) {
      
  //     console.log(container);
  //   }
  // }, [container]);

  // get id from url
  // ( () =>{
  //   id = extract(tweetUrl);
  //   console.log(id);
  // })();

  //  get data from id
  // (async () => {
  //   const result = await fetchData(id);
  //   console.log(result);
  //   setcontainer(result)
  // })();

  const getData = async () => {
    if(tweetUrl == ""){
      toast.error("url should not be empty.");
      return;
    }
    toast('Generating...', {
      icon: '😲',
    });
    id = extract(tweetUrl);
    const result = await fetchData(id);
    // console.log(result);
    setcontainer(result)
    settweetUrl("");
    toast('Good Job! Check out the image', {
      icon: '🥳',
    });
    // console.log(container)
  }


  // color change
  const [selectedColor, setSelectedColor] = useState('default');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };


  const getColorClass = (color: string) => {
    switch (color) {
      case 'powder':
        return 'bg-gradient-to-r from-violet-200 to-pink-200';
      case 'silver':
        return 'bg-gradient-to-r from-slate-300 to-slate-500';
      case 'holly':
        return 'bg-gradient-to-r from-blue-200 to-cyan-200';
      case 'blueprint':
        return 'bg-gradient-to-r from-indigo-500 to-blue-500';
      default:
        return 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'; // Default to no background color
    }
  };

  const ref = useRef(null);

  const htmlToImageConvert = () => {
    toPng(ref.current, { cacheBust: false })
      .then((dataUrl) => {
        toast('Processing...just a sec', {
          icon: '🫡',
        });
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
        toast.success('Download Complete!')
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <>
      <div className="flex flex-col flex-nowrap items-center justify-center w-full">

        {/* importing hero */}
        <Tweet_hero />

        {/* url input */}
        <form className="w-full flex items-center justify-center">
          <input className="border-2 w-1/2 px-3 py-2 text-xl placeholder:text-xl placeholder:text-gray-600 text-gray-900 rounded-xl shadow-lg" placeholder="tweet url..." value={tweetUrl} onChange={e => settweetUrl(e.target.value)} type="text" />
          <button onClick={(e) => {
            e.preventDefault();
            getData();
          }} className="w-fit bg-blue-500 text-gray-100 px-4 py-2 rounded-xl mx-6 text-lg font-bold" type="submit">Convert</button>
        </form>


        {/* results section */}
        <div className="flex flex-col justify-center items-center gap-24 p-3 mt-11 md:mt-[5%] py-8 w-full ">


          {/* settings */}
          <div className="flex items-center justify-center p-3 border-4 border-dashed rounded gap-9 h-fit w-full md:w-fit md:h-[80%]">

            {/* select gradient */}
            <Select onValueChange={e => handleColorChange(e)}>
              <h3 className="font-bold">Select a gradient</h3>
              <SelectTrigger className="w-3/4">
                <SelectValue placeholder="Gradient" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="powder">Powder</SelectItem>
                <SelectItem value="silver">Silver</SelectItem>
                <SelectItem value="holly">Holly</SelectItem>
                <SelectItem value="blueprint">BluePrint</SelectItem>
              </SelectContent>
            </Select>

            <button onClick={htmlToImageConvert} className="w-fit bg-blue-500 text-gray-100 px-4 py-2 rounded-xl mx-6 text-lg font-bold" type="submit">Download</button>

          </div>


          {/* output */}
          <div ref={ref} className={`min-h-[60%] h-fit md:w-[60%] rounded-md ${getColorClass(selectedColor)} py-28 flex flex-col item-center justify-center`}>
            <div className="bg-white rounded-md shadow-lg px-6 py-4 w-[80%] min-h-36 h-fit md:w-3/5 mx-auto flex flex-col relative justify-start items-start">
              {container.author ? (
                <div className="flex gap-3 items-center">
                  <Image className="rounded-full" height={50} width={50} src={container.author.image} alt="sample" />
                  <div>
                    <h4 className="font-bold text-xl inline">{container.author.name} </h4>
                    {container.author.blue_verified && <Image className="inline mb-1" src={"/badge.png"} height={20} width={20} alt="verified" />}
                    <h5 className="text-sm text-gray-600">{container.author.screen_name}</h5>
                  </div>
                </div>
              )
              :
              <div className="flex gap-3 items-center">
                  <Image className="rounded-full" height={50} width={50} src={'/man2.png'} alt="sample" />
                  <div>
                    <h4 className="font-bold text-xl inline">John Doe </h4>
                    <Image className="inline mb-1" src={"/badge.png"} height={20} width={20} alt="verified" />
                    <h5 className="text-sm text-gray-600">@johnd</h5>
                  </div>
                </div>
              }
              

              {container.text ? (
                <div className="py-2 mt-4">
                  <p className="text-lg font-bold">{container.text}</p>
                </div>
              )
              :
              <div className="py-2 mt-4">
                  <p className="text-lg font-bold">Use social canvas tool to convert your tweets to image.</p>
              </div>
              }

              {container && container.media && container.media.photo && container.media.photo.length > 0 && (
                <Image
                  className="w-full rounded-xl mb-3 mt-1"
                  height={60}
                  width={150}
                  alt="image"
                  src={container.media.photo[0].media_url_https}
                />
              )}


              {container.media && container.media.video && container.media.video.length > 0 && (
                <div className="w-[100%] mx-auto">
                  <video className="w-full rounded-xl mb-3 mt-1" height={90} width={200} src={container.media.video[0].media_url_https} controls autoPlay loop />
                </div>
              )}

              <div className="border-b-2 w-full">
                <p className="text-sm text-gray-700 m-0 pb-3">{container.created_at ? container.created_at.split("+")[0] : "3:21 PM - 4 Dec, 2023"}</p>
              </div>

              <hr />

              <div className="flex gap-5 mt-2">
                <div className="flex gap-2">
                  <CiHeart className="text-md font-bold" /> {container.likes ? formatNumber(container.likes) : "34K"}
                </div>

                <div className="flex gap-2">
                  <FaRegComment /> {container.replies ? formatNumber(container.replies) : "12K"}
                </div>
              </div>

              <FaXTwitter className="absolute top-3 right-3 text-grey-800" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
