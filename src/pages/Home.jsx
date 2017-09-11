import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlexBox, Box } from '../components/Layout';
import { Next } from '../components/Controls/';

const Start = styled.div`
  position: absolute;
  z-index: 99;
  right: 50%;
  bottom: 10px;
  cursor: pointer;
`;

const Slide = styled(FlexBox)`
  height: 100vh;
  min-height: 500px;
  background: linear-gradient(20deg,rgb(219,112,147),#daa357);
  color: #fff;
  font-family: Verdana, Geneva, sans-serif;
`;

const Intro = styled(Box)`
  text-align: center;
`;

const Title = styled(Box)`
  font-weight: bold;
`;

const MeetupLogo = styled.img`
  height: 50px;
  background-color: white;
  padding: 10px;
`;

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      is1: false,
      is2: false,
    };
  }

  _next = () => {
    this.props.history.push('/slides/1');
  };

  render() {
    return (
      <Slide justify="center" align="center" center>
        <Intro px={2}>
          <Box p={1}>
            <MeetupLogo src={require('../images/meetup.svg')} alt="meetup logo" />
          </Box>
          <Box mt={1} fontSize={2}>
              React Nerd Meetup - 11 September 2017 | 6pm
          </Box>
          <Title fontSize={[4, 5, 6]} mt={2}>Styling React Component: From CSS to Styled</Title>
          <Box mt={2}>
            <img src={require('../images/2359-logo.png')} alt="2359 logo" />
          </Box>
          <Box mt={1} fontSize={2}>Giang Nguyen - 2359 Media</Box>
        </Intro>
        <Start onClick={this._next} ><Next height="30px" /></Start>
      </Slide>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
