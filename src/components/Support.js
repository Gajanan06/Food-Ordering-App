import React from "react";
import Shimmer from "./Shimmer";

class Support extends React.Component{
    constructor(props) {
    super(props);

    this.state = {
        supportdata: null,
        loading: true
    };

    }

    async componentDidMount() {
        const data = await fetch("https://www.swiggy.com/dapi/support/v3?");

        const json = await data.json();

        // console.log(json);

        this.setState({
            supportdata : json?.data,
            loading : false
        });

    }

    render() {
        const {supportdata,loading} = this.state;

        if (loading) return <Shimmer />


        return (
            <div className="support-container">
                <h2>Support Topics</h2>

                <div className="support-grid">

                {supportdata?.issueTypes?.data?.map((item,index) => (
          <div key={index} className="support-card">

            <h3>{item.title}</h3>
            <p>{item.description}</p>

          </div>
        ))}
        </div>

            </div>
        )
    }
}

export default Support;