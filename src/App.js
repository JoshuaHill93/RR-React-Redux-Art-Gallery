import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { useEffect } from 'react';
import { fetchData , prevImage, nextImage, reset} from './features/dataSlice';




const mapStateToProps = (state) => ({
  objectId: satisfies.data.objectId
});



function App({artId}) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  

  const renderImg = () => {
    if(data?.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }


  useEffect(() => {
    dispatch(fetchData())
}, [props.objectId, dispatch])



  return (
    <div className="App">
      <div>
        <button onClick={() => {
          dispatch(fetchData())
        }}>Thunk!</button>
        <button onClick={() => {
          dispatch(reset())
        }}>Clear</button>
        <button onClick={() => {
          dispatch(nextImage())
        }}>Next</button>
        <button onClick={() => {
         dispatch(prevImage())
        }}>Back</button>
      </div>
      <input value={ data?.artId } onChange={(e) => {
        dispatch(artId())
      }} />
      <div>
        {data?.artId}
        {renderImg()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps) (App)