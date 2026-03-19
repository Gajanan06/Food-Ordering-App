const withPopularLabel = (Component) => {

  return (props) => {

    return (
      <div className="relative">

        {props.isPopular && (
          <span className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1 rounded">
            Popular
          </span>
        )}

        <Component {...props} />

      </div>
    );
  };

};

export default withPopularLabel;