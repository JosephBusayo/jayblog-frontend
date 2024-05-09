export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Evans&apos;s Blog
          </h1>
          <div className="text-md text-gray-500  flex flex-col gap-6">
            <p>
              A passionate software engineer, I embrace both life and
              technical challenges with determination. Each obstacle is an
              opportunity for growth, and I tackle them head-on, armed with
              resilience and curiosity. A lifelong learner, I thrive on the
              continuous evolution of technology, constantly seeking to expand
              my knowledge and skills. From debugging code to navigating the
              complexities of life, I approach each challenge with optimism and
              a willingness to adapt. Through perseverance and dedication, I
              strive to overcome obstacles and achieve success in both my
              personal and professional endeavors.
            </p>
            <p>
              On this blog, you will find regular weekly articles and tutorials
              on topics such as web development, software engineering, and
              programming languages. Evans is always learning new things and
              exploring newer technologies as well, so be sure to check back
              often for new content
            </p>
            <p>
              We encourage you to leave comments on your post and engage with
              other readers. You can like other people&apos;s comments and reply
              to the as well. We believe tht a community of learners can help
              each other grow and improve.
            </p>
              <span className="italic text-end">
                Don&apos;t mind leaving a suggestion about the blog design!
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}
