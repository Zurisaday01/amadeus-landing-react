import React from 'react';
import styles from './MeetUsSection.module.scss';
import Source from '../../assets/videos/landscape.mp4';
import VideoPlayer from 'react-video-js-player';

const MeetUsSection = () => {
	return (
		<section className={styles['meet-us']} title='Section Meet Us' id='meet-us'>
			<div className={styles['meet-us__information']}>
				<h2 className='heading heading--secondary'>Are you prepared?</h2>
				<div className={styles['meet-us__text']}>
					<p className='paragraph'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
						voluptates earum? Necessitatibus harum iusto sapiente doloremque
						omnis et asperiores facilis voluptates rem.
					</p>
					<p className='paragraph'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
						volupta Necessitatibus harum iusto sapiente doloremque omnis et
						asperiores facilis voluptates rem.
					</p>
				</div>
			</div>
			<div className={styles['meet-us__resource']}>
				<VideoPlayer
					className={styles['meet-us__video']}
					data-setup='{ "controls": true, "autoplay": true, "preload": "auto" }'
					src={Source}
				/>
			</div>
		</section>
	);
};

export default MeetUsSection;

// ref={ref => (this.player = ref)}
// onBuffer={this.onBuffer}
// onError={this.videoError}
