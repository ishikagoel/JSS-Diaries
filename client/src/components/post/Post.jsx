import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">title for the post</span>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                ssense and I are very glad to invite you to Codeforces Round #726 (Div. 2) which will take place on Friday, June 18, 2021 at 20:05UTC+5.5. The round will be rated for participants with a rating lower than 2100. Division 1 participants are also welcomed to take part in the competition but it will be unrated for them.
            </p>
        </div>
    )
}
