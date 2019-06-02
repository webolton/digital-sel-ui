import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import homePageStyle from 'assets/javascripts/views/homePageStyle';

const versionNumber = () => {
  return process.env.REACT_APP_VERSION;
}

const HomePage = () => (
  <GridContainer>
    <GridItem xs={0} sm={0} md={2} lg={2} />
    <GridItem xs={12} sm={12} md={8} lg={8}>
      <Card>
        <CardBody>
        <Typography variant="h6" gutterBottom>This version of the Digital SEL is under development.</Typography>

        <h2>Introduction</h2>
        <p>The <em>Digital South English Legendary</em> (<em>Digital SEL</em>) is a web-based,
          interactive application that will allow readers to view multiple versions of individual
          texts from the <em>South English Legendary</em> at the same time.
        </p>

        <h2>The <em>South English Legendary</em> and Textual Variation</h2>

        <p>The <a href="http://en.wikipedia.org/wiki/South_English_Legendary"><em>South English Legendary </em></a>
          is a large collection of Middle English verse saints&rsquo; lives and related religious literature, originally
          composed in the late thirteenth century. The legendary was later revised and augmented, and its various forms
          enjoyed widespread readership, being copied until the fifteenth century. Today, the <em>SEL</em> survives in part
          or whole in more than 60 manuscripts. The legendary&rsquo;s popularity and the readiness of later poets and scribes
          to revise and supplement the collection mean that there is a large degree of textual variation between
          individual witnesses of the <em>SEL</em>. Despite a great deal of work by earlier scholars, the <em>SEL </em>
          has never been edited in whole and the editions that have appeared are typical of printed editions in that they present
          a base text with variations noted in a critical apparatus.</p>

        <h2>The <em>Digital SEL</em> and Developing a New Critical Edition</h2>

        <p>
          The intent of the <em>Digital SEL</em> is to use a web-based application to create a kind
          of digital variorum edition of the text, which will allow users to view multiple versions of
          different <em>SEL</em> texts at the same time. The ultimate goal of the project is to provide
          a model of digital publishing that destabilizes the kind of editorial practice that imagines
          a &ldquo;base&rdquo; or &ldquo;best&rdquo; version of a text with variations noted in an apparatus.
        </p>

        <p>
          This version of the site represents a complete re-write / rework of the first conception of
          the project, which is still available at the <a href="http://digitalsel.org">digitalsel.org</a>.
          The original version of the site was my first programming project, and this version is
          much more in line with modern web software development.
        </p>
        <p>
          This iteration of the project is in active development, though I have neglected
          blogging about my progress recently. Additional <a href="http://blog.digitalsel.org" target="_blank">blog posts </a>
          are forthcoming, and all of my progress is available at <a href="https://github.com/webolton" target="_blank">GitHub</a>.
          If you are interested in contributing to the project in any way, feel free to reach out to me
          on <a href="https://twitter.com/william_ellet" target="_blank">Twitter</a>.
        </p>
        {versionNumber() &&
          <Typography variant="p" gutterBottom>Version: {versionNumber()}</Typography>
        }
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
);

function mapStateToProps(state) {
  const { authentication } = state;
  const { currentUser } = authentication;
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(withStyles(homePageStyle)(HomePage));
