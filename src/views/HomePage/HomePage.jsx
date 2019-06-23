import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import homePageStyle from 'assets/javascripts/views/homePageStyle';

const versionNumber = () => process.env.REACT_APP_VERSION;

const HomePage = () => (
  <GridContainer>
    <GridItem xs={0} sm={0} md={2} lg={2} />
    <GridItem xs={12} sm={12} md={8} lg={8}>
      <Card>
        <CardBody>
          <Typography variant="h6" gutterBottom>This version of the Digital SEL is under development.</Typography>

          <Typography variant="h4" gutterBottom>Introduction</Typography>
          <Typography variant="body1" paragraph>
            The
            {' '}
            <i>Digital South English Legendary</i>
            {' '}
(
            <i>Digital SEL</i>
) is a web-based,
            interactive application that will allow readers to view multiple versions of individual
            texts from the
            {' '}
            <i>South English Legendary</i>
            {' '}
at the same time.
          </Typography>

          <Typography variant="h4" gutterBottom>
            The
            {' '}
            <i>South English Legendary</i>
            {' '}
and Textual Variation
          </Typography>

          <Typography variant="body1" paragraph>
            The
            {' '}
            <Link href="http://en.wikipedia.org/wiki/South_English_Legendary" target="_blank" rel="noopener">
              <i>South English Legendary</i>
            </Link>
            {' '}
is a large collection of Middle English verse saints&rsquo; lives and
                related religious literature, originally composed in the late thirteenth century.
                The legendary was later revised and augmented, and its various forms enjoyed
                widespread readership, being copied until the fifteenth century. Today,
                the
            <i>SEL</i>
            {' '}
survives in part or whole in more than 60 manuscripts. The
                legendary&rsquo;s popularity and the readiness of later poets and scribes to revise
                and supplement the collection mean that there is a large degree of textual variation
                between individual witnesses of the
            <i>SEL</i>
. Despite a great deal of work by
                earlier scholars, the
            <i>SEL </i>
            {' '}
has never been edited in whole and the editions
                that have appeared are typical of printed editions in that they present a base text
                with variations noted in a critical apparatus.
          </Typography>

          <Typography variant="h4" paragraph>
            The
            {' '}
            <i>Digital SEL</i>
            {' '}
and Developing a New Critical Edition
          </Typography>

          <Typography variant="body1" paragraph>
            The intent of the
            {' '}
            <i>Digital SEL</i>
            {' '}
is to use a web-based application to create a kind
            of digital variorum edition of the text, which will allow users to view multiple
            versions of different
            {' '}
            <i>SEL</i>
            {' '}
texts at the same time. The ultimate goal of the
            project is to provide a model of digital publishing that destabilizes the kind of
            editorial practice that imagines a &ldquo;base&rdquo; or &ldquo;best&rdquo; version of
            a text with variations noted in an apparatus.
          </Typography>

          <Typography variant="body1" paragraph>
            This version of the site represents a complete re-write / rework of the first conception
            of the project, which is still available at the
            {' '}
            <Link href="http://digitalsel.org" target="_blank" rel="noopener">
              digitalsel.org
            </Link>
.
            The original version of the site was my first programming project, and this version is
            much more in line with modern web software development.
          </Typography>

          <Typography variant="body1" gutterBottom>
            This iteration of the project is in active development, though I have neglected
            blogging about my progress recently. Additional
            {' '}
            <Link href="http://blog.digitalsel.org" target="_blank" rel="noopener">
              blog posts
            </Link>
            {' '}
are forthcoming, and all of my progress is available at
            {' '}
            <Link href="https://github.com/webolton" target="_blank" rel="noopener">GitHub</Link>
.
            If you are interested in contributing to the project in any way, feel free to reach out
            to me on
            {' '}
            <Link href="https://twitter.com/william_ellet" target="_blank" rel="noopener">
              Twitter
            </Link>
.
          </Typography>
          {versionNumber()
          && (
          <Typography paragraph gutterBottom>
            Version:
            {versionNumber()}
          </Typography>
          )
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
