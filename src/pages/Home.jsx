import React from "react";

const Home = () => {
  return (
    <div className="container">
      <section className="card my-5" style={{ background: "#c0181885" }}>
        <div className="card-body my-2 gap-5">
          <h5 className="card-title fs-3 text-white">About</h5>
          <p className="card-text m-2 p-1 text-white">
            Welcome to my Studio Ghilbli wiki page!
          </p>
          <p className="card-text m-2 p-1 text-white">
            Studio Ghibli acclaimed Japanese animation film studio that was
            founded in 1985 by animators and directors Miyazaki Hayao and
            Takahata Isao and producer Suzuki Toshio. Studio Ghibli is known for
            the high quality of its filmmaking and its artistry. Its feature
            films won both critical and popular praise and influenced other
            animation studios. The headquarters are in Tokyo.
          </p>
          <p className="m-2 p-1 text-white">
            This Studio Ghibli WiKi was created using the Studio Ghibli API to
            pull in data about the films and characters and React. Please enjoy
            exploring these beloved features.
          </p>

          <a
            href="https:/www.britannica.com/topic/Studio-Ghibli"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline-dark"
          >
            Read More
          </a>
          <a
            href="https://ghibliapi.herokuapp.com/#"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline-dark mx-3"
          >
            Studio Ghibli API
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
