import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Typewriter } from 'react-simple-typewriter'



export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);


  return (
    <section>
      <div className="mx-auto bg-[url('/bird.jpg')] bg-no-repeat bg-cover">
        <div className="flex flex-col gap-6 p-28 px-3 md:pl-6 mx-auto">

          <div className="md:flex gap-1 text-3xl md:text-[40px] text-white font-bold">
            <p>Your perfect place for articles on </p>
            <p className="text-emerald-300">
              <Typewriter
                words={['WILDLIFE', 'BOTANY', 'DEEPSEA']}
                loop={false}
                cursor
                typeSpeed={300}
                deleteSpeed={80}
                delaySpeed={2000}
              />
            </p>
          </div>
          <p className="text-gray-500 text-sm sm:text-base md:w-[50%] text-white">
            Discover the beauty of nature with our captivating blog! Explore breathtaking landscapes, fascinating wildlife, and hidden gems of botanical wonder. Join us on a journey of inspiration and awe as we celebrate the wonders of the natural world. Start exploring today!
          </p>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
          >
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View all post</button>
          </Link>
        </div>
      </div>


      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 mx-auto">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
