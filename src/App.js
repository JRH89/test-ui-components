
import img1 from './0192f219-8b4b-4925-a814-7f238b64c255.png'
import img2 from './03298f29-d59e-4da2-a4c2-fce9bc7dd28d.png'
import img3 from './1e4648ea-fcae-4cf9-bb47-bd4576ff2d69.png'
import img4 from './39d3676a-a731-4263-9189-5a395352f991.png'
import img5 from './64338337-09e5-4828-8ec5-8fba19ec0bb7.png'
import img6 from './805944df-8d01-4e84-b49e-1950fa5be1ca.png'
import { useEffect, useState } from 'react'
import { Gallery, Button, ProgressBar, useLocalStorage, StyledInput, Toast, showToast } from 'ui-hook-react-lib'
import 'ui-hook-react-lib/dist/bundle.css'

function LocalStorageTest() {
  const [count, setCount] = useLocalStorage('count', 0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [list, setList] = useState([])

  useEffect(() => {
    const storedCount = JSON.parse(localStorage.getItem('count'))
    const storedLoggedIn = JSON.parse(localStorage.getItem('loggedIn'))

    if (storedCount !== null) {
      setCount(storedCount)
    }

    if (storedLoggedIn !== null) {
      setLoggedIn(storedLoggedIn)
    }
  }, [setCount])


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
    localStorage.setItem('loggedIn', false)
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
    <div>
      <ProgressBar />
      <div style={{ margin: '1rem', marginTop: '1rem', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '800px', alignSelf: 'center', gap: '1rem' }}>
          <Button text="Menu" className='button' onClick={handleMenuButtonClick} />
          <h2 style={{ margin: 0 }}>
            Library Demo
          </h2>
          <p style={{ margin: 0 }}>npm i ui-hook-react-lib</p>

        </div>

        {loggedIn ? (
          <div>
            <div style={{ marginBottom: '1rem', marginTop: '1em' }}></div>
            <h2 style={{ margin: 0, textAlign: 'center', marginBottom: '.5em' }}>
              useLocalStorage()
            </h2>
            <div style={{ marginBottom: '1rem', fontSize: '16pt', textAlign: 'center' }}>
              Count: {count}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <Button className='button submit' text="Increase" onClick={() => setCount(count + 1)} />
              <Button className='button delete' text="Reset" onClick={() => setCount(0)} />
            </div>
            <h2 style={{ margin: 0, marginTop: '.5em', textAlign: 'center' }}>
              Autoplay Image Gallery
            </h2>
            <div style={{ justifyContent: 'center', display: 'flex', }}>
              <div style={{ marginTop: '.5rem', border: '1px solid black', width: '50%', justifyContent: "center" }}>

                <Gallery items={items} options={options} />
              </div>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: 'center', marginTop: '3em' }}>
            Please log in to access the rest of the content.
          </p>
        )}
        {isModalOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '400px', textAlign: 'center' }}>
              {!loggedIn &&
                <>
                  <h2 style={{ margin: 0, marginBottom: '1em' }}>Login</h2>
                  <div style={{ gap: '.2em', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><StyledInput
                    type="email"
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', }}
                    placeholder="Email"
                    onChange={handleEmailChange}
                  />
                    <StyledInput
                      type="password"
                      style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
                      placeholder="Password"
                      onChange={handlePasswordChange}
                    /></div>
                  <div style={{ display: 'flex', flexDirection: "row", justifyContent: "center", marginTop: '2em', gap: '1em' }}>
                    <Button text="Login" className='button menu' onClick={handleLoginSubmit} />
                    <Button text="Close" className='button search' onClick={handleCloseModal} />
                  </div>
                </>}{loggedIn && <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: '2rem' }}> <Button text="Logout" className='button search' onClick={handleLogout} />
                  <Button text="Close" className='button delete' onClick={handleCloseModal} />
                </div>}</div>
          </div>
        )}
        <h2 style={{ margin: 0, textAlign: 'center', marginTop: '1em' }}>
          Toast Demo
        </h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1em', marginTop: '2em' }}>

          <Button className='button submit' text={'Success'} onClick={() => showToast(setList, 'success', 'This is a success toast', 2000)} />

          <Button className='button delete' text={'Danger'} onClick={() => showToast(setList, 'danger', 'This is a danger toast', 3000)} />

          <Button className='button menu' text={'Info'} onClick={() => showToast(setList, 'info', 'This is an info toast', 2000)} />

          <Button className='button search' text={'Warning'} onClick={() => showToast(setList, 'warning', 'This is a warning toast', 4000)} />

          <Toast toastlist={list} position="bottom-right" setList={setList} />
        </div>

        <div style={{ height: '8000px' }}></div>
        <p style={{ textAlign: 'center' }}>Thank you for testing my npm package demo!<br />-gamedevjared89</p>

      </div>
    </div >
  )
}

export default LocalStorageTest
