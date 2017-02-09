import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import NavBar from './NavBar';
import FriendFilmList from './FriendFilmList';
import FriendUserList from './FriendUserList';

var Profile = ({user, handleFilmClick, handleUserClick, addFriend, handleDropDownSelect}) => (
		<div className="user-profile">
			{console.log(Object.keys(user))}
			<div className="user-left-panel" >
				<div className="user-profile-info">
					<h4 className="user-profile-username">@{user.username}</h4>
					<h1>{user.firstName} {user.lastName}</h1>
					<div onClick={() => { !user.isFriend ? addFriend(user) : console.log('Already friends')}} className='friendStat-profile'>
						<img className="friendsLogo" src={user.isFriend ? 'assets/isFriend.png' : 'assets/addFriend.png'}/>
						{user.isFriend ? 'Friends' : 'Add Friend'}
					</div>
					<div className="friendStat-profile">
						<img className="friendsLogo" src="assets/friends.png"/>
						{user.friends.length} Friend(s)
					</div>
					<div className="friendStat-profile">
						<img className="friendsLogo" src="assets/logo2.png"/>
						{user.ratings.length} Movie(s) Rated
					</div>
				</div>
				<div className="user-profile-friends">
					<h3 className="user-profile-friends-title">Your Friends</h3>
					<FriendUserList
						allFriends={user.friends}
						handleUserClick={handleUserClick}
					/>
				</div>
			</div>
			<div className="user-profile-films col-md-7">
				<h3 className="user-profile-films-title">Your Films</h3>
				<FriendFilmList
					allFilms={user.ratings}
					handleFilmClick={handleFilmClick}
				/>
			</div>
			<div className="user-right-panel user-profile-genres">
					<h3 className="user-profile-genres-title">Your Preferred Genre</h3>

				<ButtonToolbar>
					<DropdownButton bsStyle={'default'} title={user.preferredGenre || 'genre'} id={'dropdown-size-medium'} onSelect={handleDropDownSelect}>
						<MenuItem eventKey="action">Action</MenuItem>
						<MenuItem eventKey="adventure">Adventure</MenuItem>
						<MenuItem eventKey="animation">Animation</MenuItem>
						<MenuItem eventKey="comedy">Comedy</MenuItem>
						<MenuItem eventKey="documentary">Documentary</MenuItem>
						<MenuItem eventKey="drama">Drama</MenuItem>
						<MenuItem eventKey="family">Family</MenuItem>
						<MenuItem eventKey="horror">Horror</MenuItem>
						<MenuItem eventKey="romance">Romance</MenuItem>
						<MenuItem eventKey="thriller">Thriller</MenuItem>
					</DropdownButton>
				</ButtonToolbar>
			</div>


		</div>
	);

export default Profile;
