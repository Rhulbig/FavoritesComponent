import { useState } from 'react';
import { profile } from '../data/Data';
import { IFavorites } from '../interface/Interface';
import Favorites from './favorites/Favorites';
import PostFirst from './post/PostFirst';

export const PostContainer: React.FC = () => {
	const [shiftFavorites, setShiftFavorites] = useState<IFavorites>([]);
	const [postView, setPostView] = useState<string>('Post');
	const [togglePostModal, setTogglePostModal] = useState<boolean>(false);
	return (
		<>
			{!togglePostModal ? (
				<div className='buttonContainer'>
					<div
						className='acceptButton'
						onClick={() => setTogglePostModal(true)}
					>
						Create Post
					</div>
				</div>
			) : (
				<div className='modalBackground'>
					<div className='modalContainer'>
						<div className='modalContainerInner'>
							{postView === 'Post' && (
								<PostFirst
									profile={profile}
									shiftFavorites={shiftFavorites}
									setPostView={(view) => setPostView(view)}
									setTogglePostModal={(toggle) => setTogglePostModal(toggle)}
								/>
							)}
							{postView === 'Favorites' && (
								<Favorites
									setShiftFavorites={(value) => setShiftFavorites(value)}
									shiftFavorites={shiftFavorites}
									setPostView={(view) => setPostView(view)}
									setTogglePostModal={(toggle) => setTogglePostModal(toggle)}
								/>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
