import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import MainCard from "./MainCard/MainCard";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Main = () => {
  const cards = [
    {
      id: 1,
      title: "Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
     // //buttonTitle: "Go to...",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
      //buttonTitle: "Go to...",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
      //buttonTitle: "Go to...",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
      //buttonTitle: "Go to...",
    },
    {
      id: 5,
      title: "Title 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
      //buttonTitle: "Go to...",
    },
    {
      id: 6,
      title: "Title 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
      //buttonTitle: "Go to...",
    },
    {
      id: 7,
      title: "Title 7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
      //buttonTitle: "Go to...",
    },
    {
      id: 8,
      title: "Title 8",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
      //buttonTitle: "Go to...",
    },
    {
      id: 9,
      title: "Title 9",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum pellentesque ex, quis rutrum ex vehicula ac. Etiam aliquet a mauris at feugiat. Nam maximus imperdiet mi id mollis. Maecenas nec vehicula ipsum. Morbi tincidunt diam quis tortor volutpat, a maximus turpis interdum. Proin eget ultricies ipsum. Integer fringilla tempus urna sit amet suscipit. ",
      buttonTitle: "Go to ...",
    },
  ];
  const [allPost, setAllPost] = useState([]);
  const [tesla, setTesla] = useState([]);
  const [techRunch, setTechRunch] = useState([]);
  // i za ostale techrunch all

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&pageSize=9&apiKey=e509cb2c7c2d41bb9341f4575b5004ac"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setAllPost(data.articles===undefined?cards:data.articles));
  },[]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2021-12-08&to=2021-12-08&sortBy=popularity&pageSize=9&apiKey=e509cb2c7c2d41bb9341f4575b5004ac"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setTesla(data.articles===undefined?cards:data.articles));
  },[]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=9&apiKey=e509cb2c7c2d41bb9341f4575b5004ac"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setTechRunch(data.articles===undefined?cards:data.articles));
  },[]);

  
  return (
    <div className={styles.main}>
      <div
        style={{
          paddingLeft: "32px",
          paddingBottom: "32px",
          color: "darkslategray",
        }}
      >
        <h1>Our Video Catalog</h1>
      </div>
      {/* <Row> */}
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="All" style={{display:'flex',flexWrap:'wrap'}}>
            {allPost.map((blog) => {
              return (
                <MainCard
                  title={blog.title}
                  text={blog.description}
                  //imgSrc={blog.urlToImage}
                />
              );
            })}
         
          </Tab>
          <Tab eventKey="profile" title="Tesla">
          {tesla.map((tes) => {
              return (
                <MainCard
                  title={tes.title}
                  text={tes.description}
                  //imgSrc={blog.urlToImage}
                />
              );
            })}
          </Tab>
          <Tab eventKey="contact" title="Techrunch">
          {techRunch.map((tech) => {
              return (
                <MainCard
                  title={tech.title}
                  text={tech.description}
                  //imgSrc={blog.urlToImage}
                />
              );
            })}
          </Tab>
        </Tabs>
      {/* </Row> */}
    </div>
  );
};

export default Main;
