import React from 'react';
import { Link } from "react-router-dom";
import PetApiService from '../../services/PetApiService';
import UserApiService from '../../services/UserApiService';

export default class AdoptionPage extends React.Component {
    state = {
        users:[],
        dog: {},
        cat: {},
        counter: 0,
        intervalId: null

    }
    async componentDidMount() {
        const userReq = UserApiService.getUser();
        const dogReq = PetApiService.getDog();
        const catReq = PetApiService.getCat();
    
        const [users, dog, cat] = await Promise.all([userReq, dogReq, catReq])
    
        const intervalId = setInterval(() => {
          this.adopt('dog');
        }, 3000)
    
        this.setState({
          users,
          dog,
          cat,
          intervalId
        })
      }
      adopt = async (dog, cat) => {
        
        const newCat = await PetApiService.getCat()
        const newDog = await PetApiService.getDog()
    
        this.setState({
          
          [dog]: newDog[dog],
          [cat]: newCat[cat],
          users: this.state.users.slice(1),
          counter: this.state.counter + 1
        }, this.cancelInterval)
      }  

      cancelInterval = () => {
        const { counter } = this.state;
        if (counter >= 4) {
          clearInterval(this.state.intervalId)
        }
      }

      renderUsers = (users) => {
        return users.map((user, i) => {
          return <div className={(i === 0 ? 'user active' : 'user')} key={i}>
            <h4>{user.user_name}</h4>
          </div>
        })
      }
      renderAnimal = (animal) => {
        return (<div className='animal'>
                    <img src={animal.photo} alt='animal-profile-img' className='responsive'></img>
                    <h2>Name: {animal.name}</h2>
                    <p>Sex: {animal.sex}</p>
                    <p>Age:{animal.age}</p>
                    <p>Breed: {animal.breed}</p>
                    <p>Story: {animal.story}</p>
                    <p>Description: {animal.description}</p>
                </div>);
      }

    
    render(){
        const { users, dog, cat } = this.state;
        return(
        <>
            <h1> Adopt me</h1>
            <div className='users'>
              <h2>User Queue</h2>
               {this.renderUsers(users)}
            </div>

            <div className="pets">
                <h2>Adopt in Queue</h2>

                <div className='animal-wrapper'>
                    <div className='dog-queue'>
                      {this.renderAnimal(dog)}
                      <button className='button' onClick={() => this.adopt('dog')}>Adopt Me!</button>
                    </div>
                    <div className='cat-queue'>
                      {this.renderAnimal(cat)}
                      <button className='button' onClick={() => this.adopt('cat')}>Adopt Me!</button>
                    </div>
                </div>
          
            </div>
            <Link to={'/'}>Back To Home</Link>
        </>    
        )
    }
}