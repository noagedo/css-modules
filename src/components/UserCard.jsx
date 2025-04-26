import './UserCard.css';

export default function UserCard({ name, isActive }) {
	
	return (
		<div className="card">
			<h3>{name}</h3>
			<p>{isActive ? 'Active' : 'Inactive'}</p>
		</div>
	);
}
