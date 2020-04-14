import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Comments } from "./comments/comments.component";

export const StoryComments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const getTopComments = async () => {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res) => {
        const topComments = res.data.kids.slice(0, 20);
        const promises = topComments.map((id: number) => {
          return axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then((res) => res.data);
        });
        Promise.all(promises).then((data: any) => {
          setComments(data);
        });
      });
  };

  useEffect(() => {
    getTopComments();
  }, []);

  return (
    <section className="c-story-comments--section">
      <Comments comments={comments} />
    </section>
  );
};
