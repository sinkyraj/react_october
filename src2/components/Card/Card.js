
const styles = {
  card: {
    width: '18rem'
  }
}

const Name= 'Shweta Sharma'

const Card = ({name, bio}) =>{
  //console.log(props)
  return (
    <>
      <div class="card" style={styles.card}>
        <div class="card-body">
        <h5 class="card-title">{Name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{name}</h6>
          <p class="card-text">{bio}</p>
          
        </div>
      </div>
    </>
  )

}

export default Card