import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'prismjs/prism';
import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import Slide from './Slide';
import { Next, Prev, Home as BackHome } from '../../components/Controls';
import './slide.css';
import { FlexBox, Box } from '../../components/Layout';

const SlideWrap = styled(Box)`
  position: relative;
  height: 100vh;
  overflow: auto;
  font-family: Verdana, Geneva, sans-serif;
  background-color: #348ac7;
  background-image: linear-gradient(to bottom, #348ac7 0%, #83b8de 100%);
  color: #fff;
`;

const Controls = styled.div`
  background-color: rgba(0,0,0,.8);
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  z-index: 99999;
  position: fixed;
  right: 15px;
  bottom: 15px;
  color: #fff;
`;

const Arrow = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;


class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingSlide: true,
      slide: 1,
      step: 0,
      maxStep: 0,
      slideData: null,
      slideSettings: null,
    };
  }

  componentDidMount = () => {
    this._loadSlide(this.props.match.params.slide || 1);
    this.$slide.focus();
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.match.params.slide !== this.props.match.params.slide) {
      this._loadSlide(nextProps.match.params.slide);
    }
  };

  _checkKey = (e) => {
    if (e.keyCode === 39) {
      this._next();
    } else if (e.keyCode === 37) {
      this._prev();
    }
  };

  _loadSlide = (slide) => {
    this.setState({
      isLoadingSlide: true,
    }, () => {
      import(`./data/slide${slide}`).then((module) => {
        this.setState(
          {
            isLoadingSlide: false,
            slide: parseInt(slide, 10),
            step: 0,
            slideSettings: {
              center: module.default.center,
            },
            slideData: module.default.steps,
            maxStep: module.default.steps.length - 1,
          },
        );
      });
    });
  };

  _next = () => {
    if (!this.isLoadingSlide) {
      if (this.state.step + 1 > this.state.maxStep) {
        this.props.history.push(`/slides/${this.state.slide + 1}`);
      } else {
        this.setState({
          step: this.state.step + 1,
        }, () => {
          setTimeout(() => {
            this._scrollToStep(this.state.step);
          }, 100);
        });
      }
    }
  };

  _goHome = () => {
    this.props.history.push('/');
  };

  _prev = () => {
    if (!this.state.isLoadingSlide) {
      if (this.state.step - 1 < 0) {
        if (this.state.slide - 1 > 0) {
          this.props.history.push(`/slides/${this.state.slide - 1}`);
        } else {
          this._goHome();
        }
      } else {
        this.setState({
          step: this.state.step - 1,
        });
      }
    }
  };

  _scrollToStep = (step) => {
    if (this.$slide.scrollHeight !== this.$slide.clientHeight) {
      const scrollPosition = this.$slide.querySelector(`[data-step-index="${step}"]`).offsetTop - 50;
      const currentPos = this.$slide.scrollTop;
      this.ani = requestAnimationFrame(
      this._animationScrollTo.bind(
        '',
        currentPos <= scrollPosition ? 'top' : 'bottom',
        this.$slide,
        scrollPosition,
        currentPos,
        0,
      ),
    );
    }
  };

  _animationScrollTo = (type, element, toPosition, current, speed) => {
    const nextSpeed = speed + 3;
    if (
      (current <= toPosition && type === 'bottom') ||
      (current >= toPosition && type === 'top')
    ) {
      cancelAnimationFrame(this.ani);
      element.scrollTop = toPosition;
    } else {
      const currentPosition = type === 'bottom' ? current - nextSpeed : current + nextSpeed;
      element.scrollTop = currentPosition;
      this.ani = requestAnimationFrame(
        this._animationScrollTo.bind('', type, element, toPosition, currentPosition, nextSpeed),
      );
    }
  };

  render() {
    return (
      <SlideWrap
        onKeyDown={this._checkKey}
        tabIndex={0}
        innerRef={e => this.$slide = e}
      >
        <Slide
          settings={this.state.slideSettings}
          isLoadingSlide={this.state.isLoadingSlide}
          slide={this.state.slide}
          data={this.state.slideData}
          step={this.state.step}
        />

        <Controls>
          <FlexBox align="center" justify="flex-end">
            <Arrow onClick={this._goHome}>
              <BackHome height="30px" />
            </Arrow>
            <Arrow onClick={this._prev} >
              <Prev height="30px" />
            </Arrow>
            <Arrow onClick={this._next} >
              <Next height="30px" />
            </Arrow>
          </FlexBox>
        </Controls>

      </SlideWrap>
    );
  }
}

Slides.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Slides;
