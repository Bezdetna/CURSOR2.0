import Retweet from "./img/Retweet.png"
import Like from "./img/Like.png"
import Comment from "./img/Comment.png"
import Upload from "./img/Upload.png"
import Graph from "./img/Graph.png"
import './App.css';


function App() {
  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
  const content = "WTF? Who is Ray? Why she is Skywalker? Luke...?"
  const author = {
    name: "Anakin skywalker",
    photo: "https://images.immediate.co.uk/production/volatile/sites/3/2019/12/Episode_III_Revenge_Christensen07-8bbd9e4.jpg?quality=90&resize=900,600",
    nickname: "@dart_vader"
  }
  return (
    <div className="post-page">
      <section className="post">
        <div className="post-header">
          <img src={author.photo} className='author-photo' alt='author' />

          <p className="name-author">
            <strong>
              {author.name}
            </strong>
          </p>

          <p className="author-nickname">{author.nickname}</p>
          <p>{ }</p>
        </div>
        <div className="post-info">
          <p className="author-content">
            {content}
          </p>
          <img src={RAY_IMAGE} alt = 'Ray' className="content-photo" />
        </div>
        <div className="contact-icon">
          <div className ="info-contact-icon">
            <img src={Retweet} alt="Retweet" className="icon" />
            <p>23</p>
          </div>
          <div className ="info-contact-icon">
            <img src={Comment} alt='Comment' className="icon" />
            <p>42</p>
          </div>
          <div className ="info-contact-icon">
            <img src={Like} alt='Like' className="icon" />
            <p>56</p>
          </div>
          <div className ="info-contact-icon">
            <img src={Graph} alt='Graph' className="icon" />
            <p>1,346</p>
          </div>
          <div className ="info-contact-icon">
            <img src={Upload} alt='Upload' className="icon" />
          </div>
        </div>
      </section>
    </div>
  );
}



export default App;
