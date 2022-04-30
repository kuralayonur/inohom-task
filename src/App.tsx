import { useCallback, useEffect, useState } from "react"
import IHomeData from "./IHomeData"
import iotDatas from "./iot-items.json"
import SectionTop from "./components/SectionTop"
import SectionTopFilter from "./components/SectionTopFilter"
import PanelItemTypeOne from "./components/PanelItemTypeOne"
import PanelItemTypeTwo from "./components/PanelItemTypeTwo"
import AddedItems from "./components/AddedItems"
import './styles/app.css'
const App = () => {
  const [homeData, setHomeData] = useState<IHomeData[]>([])
  const [addedItems, setAddedItems] = useState<any[]>([])
  const [, updateState] = useState<any>();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    setHomeData(iotDatas.data)
  }, [])

  const typeOneViews = homeData.map((item) => {
    if (item.type === 1 || item.type === 2) {
      return <PanelItemTypeOne key={item.id}  {...item} changeStatus={changeStatus} addItems={addItems} />
    } else if (item.type === 3) {
      return <PanelItemTypeTwo key={item.id}  {...item} changeTemprature={changeTemprature} addItems={addItems} />
    }
  })

  const addedItemsViews: any = addedItems.map((item) => {
    return <AddedItems key={item.id} {...item} deleteItems={deleteItems} toMoveDown={toMoveDown} toMoveUp={toMoveUp} changeDelayTime={changeDelayTime} />
  })

  function filterItems(id: string) {
    if (id === "az") {
      setHomeData(prevData => prevData.sort((a, b) => (a.title > b.title) ? 1 : -1))
      forceUpdate()
    } else if (id === "type") {
      setHomeData(prevData => prevData.sort((a, b) => (a.type > b.type) ? 1 : -1))
      forceUpdate()
    }
    else if (id === "area") {
      setHomeData(prevData => prevData.sort((a, b) => (a.area > b.area) ? 1 : -1))
      forceUpdate()
    }
  }

  function changeDelayTime(itemId: number, value: number, minusOrAdd: string) {
    let newArray = addedItems?.map((item) => {
      if (itemId === item.id) {
        let newDelayTime = minusOrAdd === "minus" ? item.delayTime - value : item.delayTime + value
        let newValue = { ...item, delayTime: newDelayTime < 0 ? 0 : newDelayTime }
        return newValue
      } else { return item }
    })
    setAddedItems(newArray)
  }

  function deleteItems(itemId: number) {
    setAddedItems(prevData => prevData.filter(item => item.id !== itemId))
  }
  function toMoveUp(itemId: number) {
    let from = 0;
    let to = 0;
    addedItems.forEach((item, index) => {
      if (item.id === itemId) {
        if (index > 0) {
          from = index
          to = index - 1
        }
      }
    })
    setAddedItems(arraymove(addedItems, from, to))
    forceUpdate()
  }
  function toMoveDown(itemId: number) {
    let from = 0;
    let to = 0;
    addedItems.forEach((item, index) => {
      if (item.id === itemId) {
        if (index < addedItems.length - 1) {
          from = index
          to = index + 1
        }
      }
    })
    setAddedItems(arraymove(addedItems, from, to))
    forceUpdate()
  }
  function arraymove(arr: any, fromIndex: number, toIndex: number) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr
  }
  function addItems(itemId: number) {
    const isSameItemAdded = addedItems.find(item => item.id === itemId)
    if (!isSameItemAdded) {
      homeData.forEach((item) => {
        if (itemId === item.id) {
          let newItem = {
            delayTime: 0,
            ...item
          }
          setAddedItems(prevData => [...prevData, newItem])
        }
      })
    }


  }

  function changeTemprature(itemId: number, tempData: number, minusOrAddition: string) {
    let newArray = homeData?.map((item) => {
      if (itemId === item.id) {
        let newValue = minusOrAddition === "minus" ? { ...item, temprature: tempData - 1 }
          : { ...item, temprature: tempData + 1 }
        return newValue
      } else { return item }
    }
    )
    setHomeData(newArray)
  }
  function changeStatus(itemId: number, status: boolean) {
    let newArray = homeData?.map((item) => {
      if (itemId === item.id) {
        let newValue = { ...item, onSwitch: status }
        return newValue
      } else { return item }
    })
    setHomeData(newArray)
  }
  return (
    <div className="home-screen--wrap">
      <div className="home-screen--left">
        <SectionTop />
        <SectionTopFilter filterItems={filterItems} />
        <div className="home-screen--panel">
          {typeOneViews}
        </div>
      </div>
      <div className="home-screen--right">
        {addedItemsViews}
      </div>
    </div>
  )
}
export default App;