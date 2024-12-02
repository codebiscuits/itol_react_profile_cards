import './App.css';
import ProfileCard from './profileCard';

function App() {

  const cards = [
    {
      image: "https://imgs.search.brave.com/awQ8TAnm3s8sPq_tJ4p0weEtMNbLQtsUm3w1WECEC8A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzAzLzE5LzY0/LzM2MF9GXzgwMzE5/NjQzM19zSkRIaUxq/clgwVlRyWjZlUkFv/VEpJN0FCQTVwNmo3/cy5qcGc",
      name: "Alice",
      jobTitle: "Frontend Developer",
      bio: "Passionate about user experience",
      skills: ['React', 'HTML', 'CSS']
    },
    {
      image: "https://imgs.search.brave.com/mU48FNwE4jUl7toF2YUQqQ7PP16_ZJ4F4ET0ulsNF54/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA1LzM3Lzg2/LzM2MF9GXzgwNTM3/ODY5Ml81cUQ4T25v/YTU5YVBlZWtBZFpR/UU5MbEFtY1FWOWlS/Ti5qcGc",
      name: "Bob",
      jobTitle: "Backend Developer",
      bio: "Builder of great software",
      skills: ['C++', 'Java', 'PHP', 'SQL']
    },
    {
      image: "https://imgs.search.brave.com/KhIeoy_n5S3H9c44Gm8Kfls1e2yzxwUWTwht5k8LjF4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm1ha2V1c2Vv/ZmltYWdlcy5jb20v/d29yZHByZXNzL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA2/L1N1bmdsYXNzZXMu/anBn",
      name: "Charlie",
      jobTitle: "Project Manager",
      bio: "I always deliver on time and on budget",
      skills: ['collaboration', 'Trello', 'time management']
    },
  ]

  return (
    <div>
      <h1 className='titles'>Team Profiles</h1>
      {cards.map((card) => (
        <ProfileCard key={card.name} card={card} />
      ))}
    </div>
  );
}



export default App;
