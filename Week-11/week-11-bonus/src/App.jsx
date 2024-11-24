
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { networkAtom } from './store/atom/myatoms'

function App() {
  return(
    <div>
      <RecoilRoot>
        <App2/>
      </RecoilRoot>
    </div>
  )
}


function App2()
{
  const countNotify=useRecoilValue(networkAtom);
  return(
    <div>
      <button>Home</button>
      <button>My Network ({countNotify})</button>
      <button>Jobs () </button>
      <button>Messaging () </button>
      <button>Notifications ()</button>
      <button>Me </button>

    </div>
  )
}

export default App
