const Post = ({ postTitle, author, children }) => {
    return (
    <div style={{ marginBottom: "20px" }}>
        <h2>{postTitle}</h2>
        <p>{author}</p>
        <p>{children}</p>
    </div>
    );
};

export default Post;
