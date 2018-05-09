import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { fetchTvList } from "./../actions/actions";

class TvList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         startIndex: 0,
         endIndex: 3
      }

      // this.calculateIndex = this.handleEvent.bind(this);
      // this.handleEvent = this.handleEvent.bind(this);
   }

   componentWillMount() {
      this.props.fetchTvList();
   }

   calculateIndex = () => {
      let tv = this.props.tv;
      if (this.state.endIndex + 3 < tv.length) {
         let startIndex = this.state.startIndex;
         let endIndex = this.state.endIndex;
         this.setState({ startIndex: endIndex, endIndex: endIndex + 3 });
      }
      else if (this.state.endIndex < tv.length) {
         let startIndex = this.state.startIndex;
         let endIndex = this.state.endIndex;
         this.setState({ startIndex: endIndex, endIndex: endIndex + tv.length });
      }
      else {
         console.log('no data to show');
      }
   }

   handleEvents = (e) => {
      if (e.target.name === 'loadmore') {
         this.calculateIndex();
      }
   }

   tvDetail(tv) {
      this.props.history.push("/tv-detail", tv);
   }

   showTvList(tvList) {
      const tempTvList = tvList.slice(0, this.state.endIndex);
      return tempTvList.map((tv) => {
         return (
            <div key={tv.id} className="col-sm-10">
               <div className="card">
                  <div className="card-body">
                     <h5 className="card-title">{tv.name}</h5>
                     <p className="card-text">Popularity {tv.popularity} | Vote Avg {tv.vote_average}</p>
                     <button onClick={() => this.tvDetail(tv)} className="btn btn-primary">View Details</button>
                  </div>
               </div>
            </div>
         );
      })

   }

   render() {
      const { tv, tvFetched } = this.props;
      if (!tvFetched) {
         return (<h1>...loading</h1>);
      } else {
         return (
            <div className="row">
               {this.showTvList(tv)}
               <button className="col-sm-10" name="loadmore" onClick={this.handleEvents}>load more</button>
            </div>
         );
      }
   }
}

function mapStateToProps(state) {
   return {
      tv: state.tv.tv.results,
      tvFetched: state.tv.fetched
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ fetchTvList }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TvList));