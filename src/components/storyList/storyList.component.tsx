import React, { useState, useEffect } from "react";
import axios from "axios";
import { Story } from "./story/story.component";

export const StoryList = () => {
  const [stories, setStories] = useState([]);

  const getTopStories = async () => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((result) => {
        const topStories = result.data.slice(0, 10);
        const promises = topStories.map((story: number) => {
          return axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
            .then((res) => res.data);
        });
        Promise.all(promises).then((data: any) => {
          setStories(data);
        });
      });
  };

  useEffect(() => {
    getTopStories();
  }, []);

  return (
    <section className="c-story-list--section">
      <h2>Top News</h2>
      <Story stories={stories} />
    </section>
  );
};
