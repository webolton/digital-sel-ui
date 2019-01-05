# Digital SEL UI

> Nou blouweþ þe niwe frut . þat late bygan to springe
>
> Þat to is kind eritage . mankunne schal bringe

The Digital SEL UI is the front-end of the Digital SEL, a digital humanities project whose aim is to
provide a sophisticated, interactive digital edition of the
[South English Legendary](https://en.wikipedia.org/wiki/South_English_Legendary), an important
collection of [Middle English](https://en.wikipedia.org/wiki/Middle_English)
[saints' lives](https://en.wikipedia.org/wiki/Hagiography) from the [Middle Ages](https://en.wikipedia.org/wiki/Middle_Ages).
This front-end is built with [React](https://reactjs.org/) / [Redux](https://redux.js.org/) and uses
[Material UI](https://material-ui.com/) for its core components.

For more information about the project see the [Digital SEL Blog](http://blog.digitalsel.org/).
For a very early version of the project (written before the [maintainer](http://william-bolton.com/)
was a software engineer) see the [DigitalSEL.org](http://digitalsel.org/).

If you want to contribute, need help, or have any questions, feel free to reach out to
the maintainer via Twitter: [@william_ellet](https://twitter.com/william_ellet).

## Prerequisites

- Node 10.12

## Development

The front-end application depends on the Digital SEL API to serve it data. Right now, the
[Rails API](https://github.com/webolton/digital-sel-api) needs to be running on port 4000.

### Run the app:

    make run

## Tests

### Run the tests

    make test

### Run the linter

    make lint-all
