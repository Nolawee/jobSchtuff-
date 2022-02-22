import {useState} from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    country: '',
    agree: false,
    gender: 'Other'
  });

  const [error, setError] = useState({
    name: ''
  })
  const onChange = (e) => {
    const { value, name, type, checked } = e.target;

    setForm((state) => ({
      ...state,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const showData = () => {
    console.log('Form:', form);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name.length < 5) {
      setError((state) => ({
        name: 'Too Short'
      }))
      return;
    } else {
      setError((state) => ({
        ...state,
        name: ''
      }))
    }
    showData();
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <label>
            Name:
            <input onChange={onChange} name="name" value={form.name}/>
          </label>
          {!!error && <div><i>{error.name}</i></div>}
          <hr></hr>
          <label>
            email:
            <input onChange={onChange} name="email" value={form.email}/>
          </label>
          <hr></hr>
          <label>
            Description:
            <textarea onChange={onChange} name="description" value={form.description}/>
          </label>
          <hr></hr>
          <label>
            Country
            <select onChange={onChange} value={form.country} name="country">
              <option value="us">US</option>
              <option value="canada">Canada</option>
              <option value="us">Ukraine</option>
            </select>
          </label>
          <hr></hr>
          <label>
            Gender:
            <div>
              <input onChange={onChange} type="radio" value="Male" name="gender" checked={form.gender === 'Male'}/> Male
              <input onChange={onChange} type="radio" value="Female" name="gender" checked={form.gender === 'Female'} /> Female
              <input onChange={onChange} type="radio" value="Other" name="gender" checked={form.gender === 'Other'} /> Other
            </div>
          </label>
          <hr></hr>
          <label>
            Agree:
            <input type="checkbox" onChange={onChange} name="agree" value={form.agree}/>
          </label>
          

          <hr></hr>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
