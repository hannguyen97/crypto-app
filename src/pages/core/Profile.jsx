import React from 'react';
import PropTypes from 'prop-types';
import avatar from "../../images/avatar.jpg"
import {Avatar} from 'antd'

Profile.propTypes = {
    
};

function Profile(props) {
    return (
    <div class="row">
    <div class="col-xs-12">
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
                <div class="media align-items-end profile-head">
                    <div class="profile mr-3"><img src={avatar} alt="..." width="130" class="rounded mb-2 img-thumbnail"/><a href="#" class="btn btn-outline-dark btn-sm btn-block">Change avatar</a></div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0" style={{color: "white"}}>Nguyễn Đức Hán</h4>
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>Da Nang</p>
                    </div>
                </div>
            </div>
        
          
            <div class="py-4 px-4 mt-5">
                <p>Account setting</p>
                <form >
                    <label>Display name</label>
                    <input type="text" name='displayname'/>
                </form>
            </div>
        </div>
    </div>
</div>
    );
}

export default Profile;