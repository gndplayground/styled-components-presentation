/* global Prism */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import update from 'immutability-helper';
import { TransitionMotion, spring } from 'react-motion';
import { Box, FlexBox } from '../../components/Layout';
import Spinner from '../../components/Spinner';

function textCenter({ center }) {
  return center ? 'text-align: center;' : '';
}

const Wrap = styled(Box)`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  max-width: 1600px;
  margin: 0 auto;
  ${({ center }) =>
  center ? `
  display: flex;
  align-items: center;
` : ''
  }
`;

const SlideContent = styled.div`
  width: 100%;
`;

const LinkBlock = Box.extend`
  ${textCenter}
  > a {
    color: currentColor;
    font-size: 2.8em;
    font-weight: bold;
    font-style: italic;
  }
`;

const Text = Box.extend`
  margin-top: 10px;
  font-size: 3em;
  font-weight: bold;
  ${textCenter}
`;

const List = FlexBox.extend`
  font-size: 2.6em;
  > ul {
    margin: 0 auto;
    display: block;
    
    > li {
      margin-top: 5px;
    }
  }
`;

const ImgBlock = Box.extend`
  margin-left: auto;
  margin-right: auto;
  > img {
    display: block;
    width: ${({ width }) => width || '100%'};
    ${({ height }) => `height: ${height};`}
  }
`;

class Slide extends React.PureComponent {

  constructor(props) {
    super(props);
    this.spcComponents = {};
    this.state = {
      spcComponents: {},
      loadingSlide: true,
      currentData: [],
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.data && ((nextProps.step !== this.props.step) || this.props.step === 0)) {
      if ((nextProps.step >= this.props.step && this.props.step >= 0)) {
        const newData = update(nextProps.data[nextProps.step], {
          style: {
            $set: this._getSlideAnimationStyle(nextProps.data[nextProps.step].data.animation, true),
          },
        });
        if (nextProps.slide !== this.props.slide) {
          this.setState({
            currentData: update(this.state.currentData, { $set: [newData] }),
          });
        } else {
          this.setState({
            currentData: update(this.state.currentData, { $push: [newData] }),
          });
        }
      } else if (nextProps.slide !== this.props.slide) {
        const newData = update(nextProps.data[nextProps.step], {
          style: {
            $set: this._getSlideAnimationStyle(nextProps.data[nextProps.step].data.animation, true),
          },
        });
        this.setState({
          currentData: update(this.state.currentData, { $set: [
            newData,
          ] }),
        });
      } else {
        this.setState({
          currentData: update(this.state.currentData, { $splice: [
              [nextProps.step + 1, this.props.data.length - (nextProps.step + 1)],
          ] }),
        });
      }
    }
  };

  willEnter = (currentStep) => {
    const step = this.state.currentData.find(e => e.key === currentStep.key);
    return step ? this._getSlideAnimationStyle(step.data.animation) : {};
  };

  _renderComponent(data) {
    switch (data.type) {
      case 'list':
        return (
          <Box mt={2}>
            <List justify={data.center}>
              <ul>
                {data.data.map((item, index) => (
                  <li key={data.key + index}>{item}</li>
                ))}
              </ul>
            </List>
          </Box>
        );
      case 'link':
        return (
          <LinkBlock mt={2} center={data.center}>
            <a
              target="_blank"
              rel="nofollow noopener"
              href={data.data.url}
            >
              {data.data.text || data.data.url}
            </a>
          </LinkBlock>
        );
      case 'img' :
        return (
          <ImgBlock mt={2} height={data.data.height} width={data.data.width}>
            <img src={data.data.isInSrc ? require(`./img/${data.data.src}`) : data.data.src} alt={data.data.src} />
          </ImgBlock>
        );
      case 'code' :
        return (
          <Box mt={2}>
            <pre className={`language-${data.prismLang}`}>
              <code
                className={`language-${data.prismLang}`}
                dangerouslySetInnerHTML={
                  { __html: Prism.highlight(data.data, Prism.languages[data.prismLang]) }
                }
              />
            </pre>
          </Box>
        );
      case 'spc':
        if (!this.state.spcComponents[data.spcComponent] &&
          !this.spcComponents[data.spcComponent]
        ) {
          this.spcComponents[data.spcComponent] = 'loading';
          import(`./spc/${data.spcComponent}`).then((module) => {
            this.spcComponents[data.spcComponent] = 'loaded';
            this.setState({
              spcComponents: update(this.state.spcComponents, {
                [data.spcComponent]: { $set: module.default },
              }),
            });
          });
        }

        if (this.state.spcComponents[data.spcComponent]) {
          const Component = this.state.spcComponents[data.spcComponent];
          return (<Component />);
        }

        return (
          <Box mt={1} mb={1}>
            <Spinner size={30} />
          </Box>
        );

      case 'text' :
        return (<Text center={data.center}>{data.data}</Text>);
      default :
        return (<Text center={data.center}>{data.data}</Text>);
    }
  }

  _getDefaultStyle = data => data.reduce(
      (styles, slide) => styles.concat(
          [{ key: slide.key, style: this._getSlideAnimationStyle(slide.data.animation) }],
        ),
      [],
  );

  _getSlideAnimationStyle(style, isActiveOrDefault) {
    // Define animation styles here
    if (style === 'opacity') {
      return isActiveOrDefault ? { opacity: spring(1) } : { opacity: 0 };
    }
    return null;
  }

  render() {
    const { data, isLoadingSlide, settings } = this.props;
    return (data && !isLoadingSlide) ? (
      <Wrap px={[15, 30, 100]} py={[15, 30, 50]} center={settings.center}>
        <TransitionMotion
          defaultStyles={this._getDefaultStyle(data)}
          styles={this.state.currentData}
          willEnter={this.willEnter}
        >
          {styles => (
            <SlideContent>
              { styles.map((step, index) => (
                <div
                  data-step-index={index}
                  key={step.key}
                  style={{
                    ...step.style,
                  }}
                >
                  {this._renderComponent(step.data)}
                </div>
              ))}
            </SlideContent>
          )}
        </TransitionMotion>
      </Wrap>
    ) : (
      <Box mt={1} mb={1}>
        <Spinner size={30} />
      </Box>
    );
  }
}

Slide.propTypes = {
  settings: PropTypes.object,
  data: PropTypes.array,
  step: PropTypes.number.isRequired,
  slide: PropTypes.number.isRequired,
  isLoadingSlide: PropTypes.bool.isRequired,
};

export default Slide;
