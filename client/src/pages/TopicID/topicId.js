import React, { Component } from "react";
import Container from "../../components/Grid/Container";
import Links from "../../components/links";
import MeBox from "../../components/meBox";
import SmallNote from "../../components/smallNote";
import ItemList from "../../components/itemList";
import { listDisplay } from "../Workspace/display functions";
import Col3 from "../../components/colMd3";
import Col6 from "../../components/Col6";
import Col2 from "../../components/ColMd2";
import Title from "../../components/TitleBar";
import API from "../../utils/API";

class TopicId extends Component {
    state = {
        blog: [],
        blogTitles: [],
        blogButtons: [],
        email: JSON.parse( sessionStorage.getItem( 'email' ) )

    }
    componentDidMount() {
        this.populateBlog();
        console.log( this.state );
    }
    componentDidUpdate() {
        console.log( this.state )
    }
    populateBlog = () => {
        console.log( this.props.match.params.id )
        var blog = [

        ];
        var blogTitles = [];
        var blogButtons = [];
        var data = {
            id: this.props.match.params.id
        }
        API.findTopic( this.props.match.params.id )
            .then( res => {
                if ( res.data ) {
                    console.log( res.data )
                    for ( var n = 0; n < res.data.note.length; n++ ) {
                        blog.push( res.data.note[n] );

                        //     for ( var i = 0; i < res.data[n].note.length; i++ ) {
                        //         console.log( res.data[n] )
                        //         blogTitles.push( res.data[n].topic );

                        //         blog.push( res.data[n].note[i] );

                        this.setState( { blog: blog } ), () => {
                            console.log( this.state );

                        };

                    }
                }
            }
            )
        }
        mapTitles = ( i ) => {
            return this.state.blogTitles[i]
        }
        printPage = () => {

        }
        render() {

            return (
                <div>
                    <br></br><br></br><br></br>
                    {this.printPage}
                    {/* {this.state.blog.map( function ( blog, index ) {

                    return <buttons href = "users/topic"
                } */}

                    {
                        this.state.blog.map( function ( blog, index ) {
                            return (
                                <div style={{ zIndex: -10, width: 50 + "%", position: "relative", left: 25 + "%", color: "#004080" }}>
                                    {/* {this.state.blogTitles[index]} */}
                                    {blog}
                                    <hr />
                                </div>
                            )
                        } )
                    }


                </div>
            )
        }
    }
    export default TopicId;