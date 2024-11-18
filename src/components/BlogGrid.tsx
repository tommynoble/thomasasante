import React from 'react';

const posts = [
  {
    title: 'Breaking Your Mental Box Image',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1674',
    date: 'Sept 12, 2023'
  },
  {
    title: 'Thoughts on Modern User Flow',
    image: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&q=80&w=1674',
    date: 'Aug 28, 2023'
  },
  {
    title: 'The Side Patterns of Finance Ads',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=1674',
    date: 'Aug 15, 2023'
  }
];

const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <a
          key={index}
          href="#"
          className="group block bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
        >
          <div className="aspect-[16/9] overflow-hidden bg-zinc-800">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <h3 className="text-lg font-semibold group-hover:text-purple-500 transition-colors">
              {post.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export default BlogGrid;