import React from "react";
import { IStory } from "../../story.model";
import { Link } from "react-router-dom";

interface IStoryListProps {
  stories: IStory[];
}

export const Story = ({ stories }: IStoryListProps) => {
  return (
    <section className="c-story--section">
      {stories.map((story) => (
        <div key={story.id}>
          <h4>{story.title}</h4>
          <p>Story by: {story.by}</p>
          {story.url && (
            <p>
              Read full story here: <a href={story.url}>{story.url}</a>
            </p>
          )}
          <p>Score: {story.score}</p>
          {story.kids && (
            <Link
              className="c-alert-banner-page-link"
              to={`/comments/${story.id}`}
            >
              See top comments
            </Link>
          )}
        </div>
      ))}
    </section>
  );
};
