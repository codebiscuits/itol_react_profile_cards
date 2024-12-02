function ProfileCard(props) {
    const { card } = props
    return <div className='profileCard'>
        <img className='cardImg' src={card.image} alt={props.name} />
        <div className='cardInfo'>
            <h1 className='cardName'>{card.name}</h1>
            <h2 className='cardJob'>{card.jobTitle}</h2>
            <p className='cardBio'>{card.bio}</p>
            <div className='skillContainer'>
                <p className='cardSkills'>Skills:</p>
                <div className='skillsDiv'>
                    {card.skills.map((skill) => (
                        <p key={skill.index} className='cardSkill'>{skill}</p>
                    ))}
                </div>
            </div>
        </div>
      </div>
  }

export default ProfileCard;