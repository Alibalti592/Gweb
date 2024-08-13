// components/Post.js
const Post = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.user.avatar}
          alt="Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="font-bold">{post.user.name}</h2>
          <p className="text-gray-600 text-sm">{post.user.title}</p>
        </div>
      </div>
      <p className="mb-4">{post.content}</p>
      <img
        src="/images/article-icon.svg"
        alt="Post Image"
        className="w-full rounded-md"
      />

      <div className="flex justify-between mt-4">
        <button className="text-blue-600">
          {" "}
          <img src="/images/like-icon.svg"></img>
        </button>
        <button className="text-blue-600">
          <img src="/images/comment-icon.svg"></img>
        </button>
        <button className="text-blue-600">
          {" "}
          <img src="/images/share-icon.svg"></img>
        </button>
      </div>
    </div>
  );
};

export default Post;
