
import img1 from './0192f219-8b4b-4925-a814-7f238b64c255.png'
import img2 from './03298f29-d59e-4da2-a4c2-fce9bc7dd28d.png'
import img3 from './1e4648ea-fcae-4cf9-bb47-bd4576ff2d69.png'
import img4 from './39d3676a-a731-4263-9189-5a395352f991.png'
import img5 from './64338337-09e5-4828-8ec5-8fba19ec0bb7.png'
import img6 from './805944df-8d01-4e84-b49e-1950fa5be1ca.png'
import { useEffect, useState } from 'react'
import { Gallery, Button, ProgressBar, useLocalStorage, StyledInput } from 'ui-hook-react-lib'
import 'ui-hook-react-lib/dist/bundle.css'

function LocalStorageTest() {
  const [count, setCount] = useLocalStorage('count', 0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const storedCount = JSON.parse(localStorage.getItem('count'))
    const storedLoggedIn = JSON.parse(localStorage.getItem('loggedIn'))

    if (storedCount !== null) {
      setCount(storedCount)
    }

    if (storedLoggedIn !== null) {
      setLoggedIn(storedLoggedIn)
    }
  }, [])


  const handleEmailChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleMenuButtonClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleLoginSubmit = () => {
    // Here, you can perform actual login logic
    // For demonstration purposes, let's just set loggedIn to true
    setLoggedIn(true)
    setIsModalOpen(false)

    // Save the user's login status to local storage
    localStorage.setItem('loggedIn', true)
  }


  const handleLogout = () => {
    setLoggedIn(false)
  }

  const handleSearchButtonClick = () => {
    alert('Eureka!')
  }

  const items = [
    { imageSrc: img1 },
    { imageSrc: img2 },
    { imageSrc: img3 },
    { imageSrc: img4 },
    { imageSrc: img5 },
    { imageSrc: img6 },
  ]

  const options = {
    autoplay: true,
    interval: 5000,
  }

  return (
    <>
      <ProgressBar />
      <div style={{ margin: '1rem', marginTop: '2rem', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', maxWidth: '800px', alignSelf: 'center', gap: '2rem' }}>
          <Button text="Menu" className='button menu' onClick={handleMenuButtonClick} />
          <h1 style={{ margin: 0 }}>
            Library Demo
          </h1>
          <Button text="Search" className="button search" onClick={handleSearchButtonClick}
          />
        </div>

        {loggedIn ? (
          <div>
            <div style={{ marginBottom: '1rem' }}></div>
            <div style={{ marginBottom: '1rem', fontSize: '16pt', textAlign: 'center' }}>
              Count: {count}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <Button className='button submit' text="Increase" onClick={() => setCount(count + 1)} />
              <Button className='button delete' text="Reset" onClick={() => setCount(0)} />
            </div>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <div style={{ marginTop: '2rem', border: '1px solid black', width: '50%', justifyContent: "center" }}>
                <Gallery items={items} options={options} />
              </div>
            </div>
          </div>
        ) : (
          <p>
            Please log in to access the rest of the content.
          </p>
        )}
        {isModalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '400px', textAlign: 'center' }}>
              {!loggedIn &&
                <>
                  <h2>Login</h2>
                  <StyledInput
                    type="email"
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '1rem', width: '100%' }}
                    placeholder="Email"
                    onChange={handleEmailChange}
                  />
                  <StyledInput
                    type="password"
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '1rem', width: '100%' }}
                    placeholder="Password"
                    onChange={handlePasswordChange}
                  />
                  <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly", marginTop: '2rem' }}>
                    <Button text="Login" className='button' onClick={handleLoginSubmit} />
                    <Button text="Close" className='button' onClick={handleCloseModal} />
                  </div>
                </>}{loggedIn && <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '2rem' }}> <Button text="Logout" className='button' onClick={handleLogout} />
                  <Button text="Close" className='button' onClick={handleCloseModal} />
                </div>}</div>
          </div>
        )}

        <div style={{ height: '8000px' }}></div>
      </div>
    </>
  )
}

export default LocalStorageTest
