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
            <div className="mt-5 max-w-4xl mx-auto bg-gray-100">
                <h2 className="text-lg font-semibold mb-4 text-center">Support Topics</h2>

                <div className=" gap-5 justify-center ">

                {supportdata?.issueTypes?.data?.map((item,index) => (
          <div key={index} className="w-[250px] mb-5 p-4 ml-80 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition">

            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>

          </div>
        ))}
        </div>

            </div>
        )
    }
}

export default Support;