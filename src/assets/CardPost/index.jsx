import React from "react";
import * as stringHelper from "../../helpers/stringHelpers"
import * as dateHelper from "../../helpers/parseDate"


const CardPost = ({ author, like, text, created_at, updated_at }) => {
    return (

        <div className="card">

            <div className="row col-12">


                <div className="col-1">

                    <img src="https://www.freeiconspng.com/thumbs/twitter-icon/twitter-icon-8.png" alt="" className="avatar" />

                </div>



                <div className="col-3">

                    <h5>{author?.username}</h5>

                </div>

                <div className="col-8">

                    <h5 className="text-right">{dateHelper.parseDate(created_at)}</h5>

                </div>




            </div>


            <div className="row col-12">

                <div className="col-12 col-md-8 offset-md-4">

                    <p className="post-text">{text}</p>
                </div>

            </div>



            <div className="row col-12 d-flex justify-content-end">

    <i class="far fa-heart fa-lg mr-4 row"><p className="ml-2">{like}</p></i>
                <i className="fas fa-search-plus fa-lg"></i>

            </div>


        </div>
    )
}


export default CardPost;