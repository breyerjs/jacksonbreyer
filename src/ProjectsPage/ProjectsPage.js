import React from 'react';
import Header from '../Header/Header';
import ProjectViewer from './ProjectViewer';
import Slider from "react-slick";
import styles from './ProjectsPage.css';


var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

export default class ProjectsPage extends React.Component {
    render() {
        return (
            <div>
                <Header subheader={"likes to keep busy"} />
                 <div className={styles.sliderContainer}>
                Coming soon!    
                    {/* <Slider {...settings}>
                        <ProjectViewer
                            title={'Example Project'}
                            image={'null'}
                            tldr={'This is a tldr that describes the project. I bet you didnt think a project could be so cool'}
                            text={'There is a lot of text here There is a lot of text here There is a lot of text here There is a lot of text here There is a lot of text here There is a lot of text here There is a lot of text here There is a lot of text here '}
                        / >
                        <ProjectViewer
                            title={'Another Project'}
                            image={'null'}
                            tldr={'This is a description of the project'}
                            text={'Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text Why this is some text'}
                        / >
                    </Slider> */}
                </div>
            </div>
        );
    }
}