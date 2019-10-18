import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Router, browserHistory } from 'react-router';
import Modal from './AboutModal';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import database from '../firebase/firebase';
import Avatar from '@material-ui/core/Avatar';

require('bootstrap/dist/css/bootstrap.css');

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      avgRating: '3' 
    }
  }


  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  setAvatarURL = (rating) => {

    {
      switch(rating) {
        case '0':
          return '/images/verysad.png';
        case `1`:
            return `/images/sad.png`;
        case `2`:
            return `/images/justso.png`;
        case `3`:
             return `/images/happy.png`;
        case `4`:
          return `/images/veryhappy.png`;
        default:
            return ``;
      }
    }
  }

  setTitleBasedOnRating = (rating) => {
    switch(rating) {
      case '0':
        return 'Your Average Recommendation Rating: Rejected';
      case `1`:
        return `Your Average Recommendation Rating: Undecided`;
      case `2`:
        return `Your Average Recommendation Rating: Accepted`;
      case `3`:
        return `Your Average Recommendation Rating: Happily Accepted`;
      case `4`:
        return `Your Average Recommendation Rating: Eagerly Accepted`;
      default:
          return `Your Average Recommendation Rating: ${rating}`;
    }
  }

  getAverageRating() {

    var count = 0;
    var total = 0;

    database.ref(`ratings_by_user_course_lo`).once('value').then((snapshot) => {

      snapshot.forEach((childSnapshot) => {
        count++;

        console.log(`inside loop with rating of ${childSnapshot.val().rating}`);
        console.log(`inside loop with parseInt rating of ${parseInt(childSnapshot.val().rating)} `);
        total+= parseInt(childSnapshot.val().rating);
      });
      
      console.log(`inside getAverageRating with count of ${count}`);
      console.log(`inside getAverageRating with total of ${total}`);
    })
    console.log(`inside getAverageRating with ${total}`);
    return parseInt((total/count)).toString();
  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired,
      staticContext: PropTypes.object
    }).isRequired
  };

  render() {

    return (
      <div className="content-container-dashboard">
      <span id="image">
        <span id="image-inner">
        </span>
      </span>
      <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class"
          >
          <Card>
            <CardActionArea onClick={this.toggleModal}>
              <CardHeader avatar={<Avatar src={this.setAvatarURL(this.state.avgRating)} className={"avatar"}/>} titleTypographyProps={{variant:'h4'}} title={this.setTitleBasedOnRating(this.state.avgRating)}/>

              <CardContent>
                <Typography type="body2" style={{ fontSize: '1.5em', fontWeight: `bold`, color: `#000000`, textAlign: `left` }} gutterBottom>
                  Scholacity is the combination of Scholarship and Tenacity. Scholacity is about the facilitation of Lifelong Learning. No Personally Identifying Information (PII) will be captured or stored. The log in requirement is only for the purpose of separating your selections and recommendations from everyone else's.
                </Typography>
                <Divider/>
                <Typography type="body2" style={{ fontSize: '1.5em', fontWeight: `bold`, color: `#000000`, textAlign: `left` }} gutterBottom>
                  From the "Planner" menu option - select one or more Learning Outcomes that are of interest. Then, Navigate to the "Recommendations" menu option and rate the recommendations that will have been provided based on your learning outcome selections, in terms of how closely they are related to something that you selected in the Planner. When you rate a recommendation as "related" or higher it will automatically go to the "Portfolio" page.
                </Typography>
              </CardContent>
            </CardActionArea>  
          </Card>

          </Modal>
      </div>
    );
  }
};

export default AboutPage;
