import UserCard from './components/UserCard';

const users = [
	{ name: 'Dana', isActive: true },
	{ name: 'Noa', isActive: false },
	{ name: 'Omer', isActive: true },
  { name: 'Lior', isActive: false },
  { name: 'Tali', isActive: true },
  { name: 'Eli', isActive: false },
  { name: 'Maya', isActive: true },
  { name: 'Roni', isActive: false },
  { name: 'Gal', isActive: true },
  
];

export default function App() {
	return (
		<>
			<h1>User Status</h1>
      <div className='container'>
			{users.map((user, index) => (
				<UserCard key={index} name={user.name} isActive={user.isActive} />
			))}
      </div>
		</>
	);
}
