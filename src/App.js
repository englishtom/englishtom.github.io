// react
import React, { Component, Fragment } from 'react';

// libs
import { HashRouter as Router, Route, Link } from "react-router-dom";

import ReactMouseChase from './demos/react-mousechase/ReactMousechase';

const App = () => (
    <Router>
        <Route exact path="/" render={() => (
            <Fragment>
                <div class="callout large primary">
                    <div class="row column text-center">
                        <h1>Demos</h1>
                        <h2 class="subheader">Demos for englishtom's repos</h2>
                    </div>
                </div>

                <div class="row medium-8 large-7 columns">
                    <div class="blog-post">
                        <h3>react-mousechase <small>18/4/2019</small></h3>
                        <img class="thumbnail" src="https://placehold.it/850x350" />
                        <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
                        <div class="callout">
                            <ul class="menu simple">
                                <li><Link to="/react-mousechase/">Link</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        
        )} />

        <Route exact path="/react-mousechase" component={ReactMouseChase} />
    </Router>
)

export default App;
