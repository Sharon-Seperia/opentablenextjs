import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Header from './components/Header';
import Images from './components/Images';
import RestaurantNavBar from './components/RestaurantNavBar';
import Title from './components/Title';
import Description from './components/Description';
import Rating from './components/Rating';
import Reviews from './components/Reviews';
import ReservationCard from './components/ReservationCard';

const RestaurantDetails = () => {
	return (
		<>
			<Header />
			<div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
				<div className='bg-white w-[70%] rounded p-3 shadow'>
					<RestaurantNavBar />
					<Title />
					<Rating />
					<Description />
					<Images />
					<Reviews />
				</div>
				<div className='w-[27%] relative text-reg'>
					<ReservationCard />
				</div>
			</div>
		</>
	);
};

export default RestaurantDetails;
