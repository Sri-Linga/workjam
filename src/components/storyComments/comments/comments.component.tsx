import React from "react";
import { IComment } from "../../story.model";

interface ICommentsProps {
  comments: IComment[];
}

export const Comments = ({ comments }: ICommentsProps) => {
  return (
    <section className="c-story--section">
      {comments.map((comment: any) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}
    </section>
  );
};
