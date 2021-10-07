import React from 'react';

var Search = ({handleSearchInputChange}) => {
  function handleSearch(event) {
    handleSearchInputChange(event.target.value);
  }
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={handleSearch}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  )
}



// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   value: ''
//     // };
//     this.handleVideoListEntryTitleClick = null;
//   }

//   handleInputChange(e) {
//     console.log('changing input');
//     console.log(this.handleVideoListEntryTitleClick);
//     // this.props.getYouTubeVideos(e.target.value);
//     // this.setState({
//     //   value: e.target.value
//     // });
//   }

//   render() {
//     return (
//       <div className="search-bar form-inline">
//         <input
//           className="form-control"
//           type="text"
//           // value={this.state.value}
//           onChange={this.handleInputChange.bind(this)}
//         />
//         <button className="btn hidden-sm-down">
//           <span className="glyphicon glyphicon-search"></span>
//         </button>
//       </div>
//     );
//   }
// }

export default Search;
