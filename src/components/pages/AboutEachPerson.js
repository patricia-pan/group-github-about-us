export default function AboutEachPerson(props) {
  return(
    <div>
      {props.people.map((person, index) =>{
        return (
          <div key={`key is ${index}`}>
            <h1>{person.name}</h1>
            <p>{person.bio}</p>
          </div>
        )
      })}
    </div>
  )
}