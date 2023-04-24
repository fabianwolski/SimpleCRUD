import './App.css';
import './images/add.svg';
import './images/store.svg';
import './images/storage.svg';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  //Show and Hide states with buttons and close button
  const [showForm, setShowForm] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const handleCloseDatabase = () => {
    setShowDatabase(false);
  };
  //search bar
  const [searchQuery, setSearchQuery] = useState('');
  //Editing cells in table
  const [editingRow, setEditingRow] = useState('');

  /*here we are using states in React
  Basically I am making an empty variable
  that will store any change in the value
  of each of my attributes e.g firstname will 
  retrieve data and setFirstName will set data
 */
  const [title, setTitle] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [mobile, setMobile] = useState(0);
  const [email, setEmail] = useState('');
  const [homelineone, setHomeLineOne] = useState('');
  const [homelinetwo, setHomeLineTwo] = useState('');
  const [hometown, setHomeTown] = useState('');
  const [homecounty, setHomeCounty] = useState('');
  const [homeeircode, setHomeEircode] = useState('');
  const [shiplineone, setShipLineOne] = useState('');
  const [shiplinetwo, setShipLineTwo] = useState('');
  const [shiptown, setShipTown] = useState('');
  const [shipcounty, setShipCounty] = useState('');
  const [shipeircode, setShipEircode] = useState('');

  const [userList, setUserList] = useState([]);

  //I want to make an api request when we click 'add user' btn
  const addUser = () => {
    // Check if all required fields are filled in
    // Validates the title cell
    const validTitles = ['Mx', 'Ms', 'Mr', 'Mrs', 'Miss', 'Dr'];
    if (!validTitles.includes(title)) {
      alert('Please enter a valid title (Mx, Ms, Mr, Mrs, Miss, or Dr).');
      return;
    }
    // Check if all required fields are filled in
    if (
      !title ||
      !firstname ||
      !lastname ||
      !mobile ||
      !email ||
      !homelineone ||
      !hometown ||
      !homecounty ||
      !shiplineone ||
      !shiptown ||
      !shipcounty ||
      !shipcounty
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // we want to send information from front end to back end
    // we want to make the request to the /create end point
    Axios.post('http://localhost:3001/create', {
      //the comma after /create is the body object, we are sending this object into the backend
      title: title,
      firstname: firstname, //key is firstname and pass the value state const firstname
      lastname: lastname,
      mobile: mobile,
      email: email,
      homelineone: homelineone,
      homelinetwo: homelinetwo,
      hometown: hometown,
      homecounty: homecounty,
      homeeircode: homeeircode,
      shiplineone: shiplineone,
      shiplinetwo: shiplinetwo,
      shiptown: shiptown,
      shipcounty: shipcounty,
      shipeircode: shipeircode,
    }).then(() => {
      setShowForm(false); //upon submitting the form will close
      //console.log('success');

      //adds the element instantly to the list by copying a new array to the database at the same time without clicking show Users
      setUserList([
        ...userList,
        {
          title: title,
          firstname: firstname,
          lastname: lastname,
          mobile: mobile,
          email: email,
          homelineone: homelineone,
          homelinetwo: homelinetwo,
          hometown: hometown,
          homecounty: homecounty,
          homeeircode: homeeircode,
          shiplineone: shiplineone,
          shiplinetwo: shiplinetwo,
          shiptown: shiptown,
          shipcounty: shipcounty,
          shipeircode: shipeircode,
        },
      ]);
    });
  };

  const getUsers = () => {
    Axios.get('http://localhost:3001/users').then((response) => {
      //response contains a bunch of info including a key called data which inside of that key contains the array of users
      setUserList(response.data);
    });
    setShowDatabase(true); //when u click show database it'll open
  };

  const deleteUser = (id) => {
    //passing id
    const userToDelete = userList.find((user) => user.id === id);
    const { firstname, mobile, email } = userToDelete;
    //here we are checking that id does not have to be the same but fn mobile and email do
    //only then can we delete a user
    const matchingUsers = userList.filter(
      (user) =>
        user.id !== id &&
        user.firstname === firstname &&
        user.mobile === mobile &&
        user.email === email
    );

    if (matchingUsers.length > 0) {
      Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
        setUserList(
          userList.filter((val) => {
            return val.id != id;
          })
        );
      });
    } else {
      alert('Cannot delete user. No matching(name,email,phone) users found.');
    }
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUserList = userList.filter((user) => {
    const fullName = `${user.firstname} ${user.lastname}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleEditToggle = (index) => {
    if (editingRow === index) {
      const updatedData = {
        title: document.getElementById(`title-${index}`).value,
        mobile: document.getElementById(`mobile-${index}`).value,
        email: document.getElementById(`email-${index}`).value,
      };
      saveUser(filteredUserList[index].id, updatedData);
      setEditingRow(-1);
    } else {
      setEditingRow(index);
    }
  };

  const saveUser = (id, updatedData) => {
    const { title } = updatedData;
    const validTitles = ['Mx', 'Ms', 'Mr', 'Mrs', 'Miss', 'Dr'];
    if (!validTitles.includes(title)) {
      alert('Please enter a valid title (Mx, Ms, Mr, Mrs, Miss, or Dr).');
      return;
    }

    Axios.put(`http://localhost:3001/update/${id}`, updatedData)
      .then((response) => {
        setUserList(
          userList.map((user) =>
            user.id === id ? { ...user, ...updatedData } : user
          )
        );
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className="App">
      <header>
        <img src={require('./images/store.svg').default} alt="Company Logo" />
        <h1>Online-Store DataBase</h1>
      </header>

      <div className="button-container">
        <div className="button">
          <img src={require('./images/add.svg').default} alt="Add User" />
          <button className="add-btn" onClick={() => setShowForm(true)}>
            Add User
          </button>
        </div>
        <div className="button">
          <img src={require('./images/user.svg').default} alt="Update/Delete" />
          <button onClick={getUsers}>Update/Delete</button>
        </div>
        <div className="button">
          <img src={require('./images/storage.svg').default} alt="Database" />
          <button onClick={getUsers}>Show Database</button>
        </div>
      </div>

      {showDatabase && (
        <div className="database">
          <button className="close" onClick={handleCloseDatabase}>
            Close Form
          </button>
          <div className="search-bar-container">
            <button className="search-bar-btn">Search</button>
            <input
              type="text"
              className="search-bar"
              onChange={handleSearchQueryChange}
            ></input>
          </div>
          <div className="table">
            <div className="header-container">
              <div className="header-db">
                <div className="cell">Update</div>
                <div className="cell">Title</div>
                <div className="cell">First Name</div>
                <div className="cell">Last Name</div>
                <div className="cell">Mobile</div>
                <div className="cell">Email</div>
                <div className="cell">Home One</div>
                <div className="cell">Home Two</div>
                <div className="cell">Home Town</div>
                <div className="cell">Home County</div>
                <div className="cell">Home Eircode</div>
                <div className="cell">Shipping One</div>
                <div className="cell">Shipping Two</div>
                <div className="cell">Ship Town</div>
                <div className="cell">Ship County</div>
                <div className="cell">Ship Eircode</div>
                <div className="cell">Delete</div>
              </div>
            </div>
            <div className="values-container">
              {filteredUserList.map((val, key) => (
                <div className="row" key={key}>
                  <div className="cell">
                    <button
                      className="update-btn"
                      onClick={() => {
                        handleEditToggle(key);
                      }}
                    >
                      {editingRow === key ? 'Save' : 'Update'}
                    </button>
                  </div>
                  <div className="cell">
                    {editingRow === key ? (
                      <input
                        type="text"
                        defaultValue={val.title}
                        id={`title-${key}`}
                      />
                    ) : (
                      val.title
                    )}
                  </div>
                  <div className="cell">{val.firstname}</div>
                  <div className="cell">{val.lastname}</div>

                  <div className="cell">
                    {editingRow === key ? (
                      <input
                        type="text"
                        defaultValue={val.mobile}
                        id={`mobile-${key}`}
                      />
                    ) : (
                      val.mobile
                    )}
                  </div>
                  <div className="cell">
                    {editingRow === key ? (
                      <input
                        type="text"
                        defaultValue={val.email}
                        id={`email-${key}`}
                      />
                    ) : (
                      val.email
                    )}
                  </div>
                  <div className="cell">{val.homelineone}</div>
                  <div className="cell">{val.homelinetwo}</div>
                  <div className="cell">{val.hometown}</div>
                  <div className="cell">{val.homecounty}</div>
                  <div className="cell">{val.homeeircode}</div>
                  <div className="cell">{val.shiplineone}</div>
                  <div className="cell">{val.shiplinetwo}</div>
                  <div className="cell">{val.shiptown}</div>
                  <div className="cell">{val.shipcounty}</div>
                  <div className="cell">{val.shipeircode}</div>
                  <div className="cell">
                    <button
                      className="delete-btn"
                      onClick={() => {
                        deleteUser(val.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div className="form-container" id="form-container">
          <form>
            <h2>Add User</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Only Mx,Ms,Mr,Mrs,Miss,Dr are VALID"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />

            <label htmlFor="first-name">First Name(s)*:</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />

            <label htmlFor="surname">Surname*:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              required
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />

            <label htmlFor="mobile">Mobile*:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              onChange={(event) => {
                setMobile(event.target.value);
              }}
            />

            <label htmlFor="email">Email*:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <h3>Home Address</h3>

            <label htmlFor="home-address-1">Address Line 1*:</label>
            <input
              type="text"
              id="home-address-1"
              name="home-address-1"
              required
              onChange={(event) => {
                setHomeLineOne(event.target.value);
              }}
            />

            <label htmlFor="home-address-2">Address Line 2:</label>
            <input
              type="text"
              id="home-address-2"
              name="home-address-2"
              onChange={(event) => {
                setHomeLineTwo(event.target.value);
              }}
            />

            <label htmlFor="home-town">Town*:</label>
            <input
              type="text"
              id="home-town"
              name="home-town"
              required
              onChange={(event) => {
                setHomeTown(event.target.value);
              }}
            />

            <label htmlFor="home-county-city">County/City*:</label>
            <input
              type="text"
              id="home-county-city"
              name="home-county-city"
              required
              onChange={(event) => {
                setHomeCounty(event.target.value);
              }}
            />

            <label htmlFor="home-eircode">Eircode:</label>
            <input
              type="text"
              id="home-eircode"
              name="home-eircode"
              onChange={(event) => {
                setHomeEircode(event.target.value);
              }}
            />

            <h3>Shipping Address</h3>

            <label htmlFor="shipping-address-1">Address Line 1*:</label>
            <input
              type="text"
              id="shipping-address-1"
              name="shipping-address-1"
              required
              onChange={(event) => {
                setShipLineOne(event.target.value);
              }}
            />

            <label htmlFor="shipping-address-2">Address Line 2:</label>
            <input
              type="text"
              id="shipping-address-2"
              name="shipping-address-2"
              onChange={(event) => {
                setShipLineTwo(event.target.value);
              }}
            />

            <label htmlFor="shipping-town">Town*:</label>
            <input
              type="text"
              id="shipping-town"
              name="shipping-town"
              required
              onChange={(event) => {
                setShipTown(event.target.value);
              }}
            />

            <label htmlFor="shipping-county-city">County/City*:</label>
            <input
              type="text"
              id="shipping-county-city"
              name="shipping-county-city"
              required
              onChange={(event) => {
                setShipCounty(event.target.value);
              }}
            />

            <label htmlFor="shipping-eircode">Eircode:</label>
            <input
              type="text"
              id="shipping-eircode"
              name="shipping-eircode"
              onChange={(event) => {
                setShipEircode(event.target.value);
              }}
            />

            <button className="submit" type="button" onClick={addUser}>
              Add User
            </button>
            {/* <button onClick={displayinfo}>Add Users</button> //used for to test
      if events are stored */}
            <button className="close" onClick={() => setShowForm(false)}>
              Close Form
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
