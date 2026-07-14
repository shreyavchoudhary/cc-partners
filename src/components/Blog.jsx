import "../styles/Blog.css";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Understanding Corporate Legal Compliance",
    date: "July 2026",
    desc: "Learn how businesses can stay compliant with legal regulations.",
    link: "/blog/corporate-legal-compliance",
  },

  {
    title: "Importance of Professional Legal Advice",
    date: "July 2026",
    desc: "Why consulting experienced legal professionals is important.",
    link: "/blog/legal-advice",
  },

  {
    title: "Property Law: Things You Should Know",
    date: "July 2026",
    desc: "Important property law considerations before transactions.",
    link: "/blog/property-law",
  },
];

function Blog() {
  return (
    <section className="blog-section">

      <div className="blog-title">

        <span>LEGAL INSIGHTS</span>

        <h2 className="blog-font">Latest Articles & Updates</h2>

        <p>
          Stay informed with expert legal insights, industry updates and
          practical guidance.
        </p>

      </div>


      <div className="blog-grid">

        {blogs.map((blog, index) => (

          <div className="blog-card" key={index}>

            <div className="blog-date">
              {blog.date}
            </div>


            <h3>
              {blog.title}
            </h3>


            <p>
              {blog.desc}
            </p>


            <Link to={blog.link} className="read-btn">
              Read More
            </Link>


          </div>

        ))}

      </div>


    </section>
  );
}

export default Blog;