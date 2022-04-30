import Hot from "./icons/Hot"
import LightBulp from "./icons/LightBulp"
import Valve from "./icons/Valve"
import Up from "./icons/Up";
import Down from "./icons/Down";

const AddedItems = (props: any) => {

  return (
    <>
      <div className="home-screen--added-item-delay">
        <div className="home-screen--added-item-text">Gecikme Süresi</div>
        <div className="home-screen--added-item-buttons">
          <button onClick={() => props.changeDelayTime(props.id, 10, "minus")}>-10</button>
          <button onClick={() => props.changeDelayTime(props.id, 1, "minus")}>-1</button>
        </div>
        <div className="home-screen--panel-item-text">{props.delayTime.toFixed(1)} sn</div>
        <div className="home-screen--added-item-buttons">
          <button onClick={() => props.changeDelayTime(props.id, 1, "add")}>+1</button>
          <button onClick={() => props.changeDelayTime(props.id, 10, "add")}>+10</button>
        </div>
      </div>
      <div className="home-screen--panel-item">
        <div className="home-screen--panel-item-text">{props.title}</div>
        <div className="home-screen--panel-item-control">
          <div className="home-screen--panel-item-switch">
            <div className="home-screen--panel-item-icon">
              {props.type === 1 && <LightBulp />}
              {props.type === 2 && <Valve />}
              {props.type === 3 && <Hot />}
            </div>
            {props.type === 1 && <button className="active">{props.onSwitch ? "I" : "O"}</button>}
            {props.type === 2 && <button className="active">{props.onSwitch ? "I" : "O"}</button>}
            {props.type === 3 && <div className="home-screen--panel-item-switch-text">{props.temprature}</div>}
            {/* <button>O</button> */}
          </div>
        </div>
        <div className="home-screen--panel-item-action-wrap">
          <button onClick={() => props.toMoveUp(props.id)} className="home-screen--panel-item-action">
            <Up />
          </button>
          <button onClick={() => props.toMoveDown(props.id)} className="home-screen--panel-item-action">
            <Down />
          </button>
          <button onClick={() => props.deleteItems(props.id)} className="home-screen--panel-item-action">Delete</button>
        </div>
      </div>
    </>
  )
}

export default AddedItems