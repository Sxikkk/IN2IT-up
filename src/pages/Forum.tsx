import React, { useState } from 'react';
import './Forum.css'

type Post = {
    id: number;
    author: string;
    content: string;
    timestamp: Date;
};

type NewPostFormProps = {
    onAddPost: (post: Omit<Post, 'id'>) => void;
};

const NewPostForm: React.FC<NewPostFormProps> = ({ onAddPost }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (author.trim() && content.trim()) {
            onAddPost({ author, content, timestamp: new Date() });
            setAuthor('');
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="new-post-form">
            <input
                type="text"
                placeholder="Имя..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <textarea
                placeholder="Содержание..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button type="submit">Отправить пост</button>
        </form>
    );
};

const Forum = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const handleAddPost = (newPost: Omit<Post, 'id'>) => {
        const postWithId: Post = {
            ...newPost,
            id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
        };
        setPosts([...posts, postWithId]);
    };

    return (
        <div className="forum">
            <h1>Forum</h1>
            <NewPostForm onAddPost={handleAddPost} />
            <div className="posts">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="post">
                            <p><strong>{post.author}</strong> написал:</p>
                            <p>{post.content}</p>
                            <small>{post.timestamp.toLocaleString()}</small>
                        </div>
                    ))
                ) : (
                    <p>Посты не найдены. Сделай свой!</p>
                )}
            </div>
        </div>
    );
};

export default Forum;
