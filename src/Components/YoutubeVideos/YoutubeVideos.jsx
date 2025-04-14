import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import items from "./file/data";
import "./youtube.css";
const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyAoHm_QgepdK2rcGuv1ce7368yAy3oT1QE`; //api key from youtube
function YoutubeVideos() {
  const [videos, setVideos] = useState([]); //setVideo helps us to collect videos, empty arrey indicates mount once not to change when refresh.

  useEffect(() => { //fetch data using call back method, then change it to json
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items); //what happens here(data.items)? update the videos and enter datas.
      })
      .catch(() => {
        console.log("Something went wrong");
      }); 
  }, []); //change the fetched data to json format, looks like json but not json format. Convert this text to json formt to use it.
  // APIs often return data in JSON format (JavaScript Object Notation), which is a lightweight data format that is easy to read and parse. However, JavaScript does not automatically convert the response into an object. line 12[] means only run this code once when the component mounts.

  console.log(videos);

  return (
    <section className="allVideowrapper">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper video-title-wraper">latest video</div>
           </div>
            {items?.map((singleVideo, index) => {
              let vidId = singleVideo.id.videoId; //single video received the data fro items.
              let videoLink = `https://www.youtube.com/watch?v=${vidId}`; //vivId differenciate one video from the other.
              return ( //the map item has to be returned to make it work, the structure is the same for all videos.
                <div key={index} className="col-sm-12 col-md-6 col-lg-4"> 
                  <div className="single-video-wraper"> 
                    <div className="video-thumbnail">
                      <a href={videoLink} target="_blank">
                        <img
                          src={singleVideo.snippet.thumbnails.high.url} 
                          alt="thumbnail" 
                        />
                      </a>
                    </div>
{/*when you click the thumbnail it will take you to the video page.*/}
                    <div className="video-info-wraper">
                      <div className="video-title"> 
                        <a href={videoLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>

                      <div className="video-description">
                        {singleVideo.snippet.description}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
                  </div>
      </div>
    </section>
  );
}

export default YoutubeVideos;
