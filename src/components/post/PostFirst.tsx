import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { Formik, Form, Field } from 'formik';

import { Link } from 'react-router-dom';
import { IProfile, IFavorites } from '../../interface/Interface';

const defualtprofile = require('../../assets/images/defaultprofile.jpg');

const currentDate = new Date(Date.now() + 21666666);

type IProps = {
	shiftFavorites: IFavorites;
	profile: IProfile;
	setTogglePostModal: Dispatch<SetStateAction<boolean>>;
	setPostView: Dispatch<SetStateAction<string>>;
};

const PostFirst: React.FC<IProps> = ({
	shiftFavorites,
	profile,
	setPostView,
	setTogglePostModal,
}) => {
	const [postType, setPostType] = useState<string>('Hourly');

	return (
		<>
			<Formik
				initialValues={{
					workType: '',
					startTime: '',
					endTime: '',
					locations: '',
					rate: '',
					totalWorkers: '',
					breakTime: '',
					unpaidBreakTime: '',
					supervisor: '',
				}}
				validationSchema={{}}
				onSubmit={() => {}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className='modalTitleBlock'>
							<div className='modalCreatePostTitle'>Create a Job Posting</div>

							<span
								className='closeModal'
								onClick={() => {
									setTogglePostModal(false);
								}}
							>
								X
							</span>
						</div>
						<div className='modalWorkTypeBlock'>
							<div className='createPostTitle'>TYPE OF POST</div>
							<div className='postTypeSelectContainer'>
								<div
									className={
										postType === 'Hourly'
											? 'postTypeSelectButtonLeftActive'
											: 'postTypeSelectButtonLeft'
									}
									onClick={() => {
										setPostType('Hourly');
									}}
								>
									Hourly
								</div>

								<div
									className={
										postType === 'FlatRate'
											? 'postTypeSelectButtonRightActive'
											: 'postTypeSelectButtonRight'
									}
									onClick={() => {
										setPostType('FlatRate');
									}}
								>
									Container Total
								</div>
							</div>
						</div>
						<div className='modalWorkTypeBlock'>
							<div className='createPostTitle'>TYPE OF WORK</div>
							<Field
								name='workType'
								className='typeOfWorkInput'
								type='text'
								placeholder='Enter type of work required...'
							/>
						</div>
						{/* 
						*
						*
						*
						Start of Favorites   
						*
						*
						*
						*/}

						<div className='modalWorkTypeBlock'>
							<div className='createPostTitle'>Favorites</div>
							<div style={{ display: 'flex' }}>
								<div
									className='favoriteToggleButton'
									onClick={() => setPostView('Favorites')}
								>
									+ Add Favorites
								</div>
							</div>
							<div className='typeOfWorkInput'>
								{shiftFavorites.length === 0 &&
									'No favories have been added to the shift'}
								{shiftFavorites.length > 0 &&
									shiftFavorites.map((fav) => {
										return (
											<img
												className='requestImgSm'
												src={
													fav.profilePhoto ? fav.profilePhoto : defualtprofile
												}
											/>
										);
									})}
							</div>
						</div>

						{/* 
						*
						*
						*
						End of Favorites   
						*
						*
						*
						*/}
						<div className='jobDetailsBlock'>
							<div className='createPostTitle'>Job Details</div>
							<div className='jobDetailsGrid'>
								<div>
									<div className='jobDetailsTitle'>Location</div>
									<Field
										type='text'
										className='typeOfWorkInput'
										placeholder='Enter location...'
										name='locations'
									/>
								</div>
								<div>
									<div className='jobDetailsTitle'>
										{postType === 'Hourly' ? 'Hourly Rate' : 'Flat Rate'}
									</div>
									<Field
										className='typeOfWorkInput'
										type='number'
										name='rate'
										placeholder={
											postType === 'Hourly'
												? 'Enter hourly rate...'
												: 'Enter flat rate...'
										}
									/>
								</div>
								<div>
									<div className='jobDetailsTitle'>Number of Employees</div>
									<Field
										className='typeOfWorkInput'
										type='number'
										name='totalWorkers'
										placeholder='Enter # of employees needed...'
										min='0'
									/>
								</div>
								<div className='addSupervisor'>
									<div className='jobDetailsTitle'>Pick Supervisor</div>
									{profile.supervisor.length < 1 ? (
										<>
											<div
												className='typeOfWorkInput'
												style={{
													textAlign: 'center',
												}}
											>
												<Link
													to='/app/profile'
													className='addSupervisorButton'
													onClick={() => {}}
												>
													<i className='fal fa-plus'></i>
													{'    '}
													Add supervisor
												</Link>
											</div>
										</>
									) : (
										<>
											<Field
												name='supervisor'
												className='typeOfWorkInput'
												as='select'
											>
												<option></option>
												{profile.supervisor.map((supervisor, index) => {
													return (
														<option value={index}>{supervisor.name}</option>
													);
												})}
											</Field>
										</>
									)}
								</div>
								{postType === 'Hourly' && (
									<div>
										<div className='jobDetailsTitle'>Paid Break</div>
										<Field
											className='typeOfWorkInput'
											type='number'
											name='breakTime'
											placeholder='Enter break time in minutes...'
										/>
									</div>
								)}

								<div>
									<div className='jobDetailsTitle'>Unpaid Break</div>
									<Field
										className='typeOfWorkInput'
										type='number'
										name='unpaidBreakTime'
										placeholder='Enter break time in minutes...'
									/>
								</div>
							</div>
						</div>

						<div className='jobDetailsBlockButton'>
							<button
								className='modalPostNext'
								onClick={() => {}}
								type='submit'
							>
								Next
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default PostFirst;
