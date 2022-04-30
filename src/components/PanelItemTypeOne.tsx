import LightBulp from "./icons/LightBulp"
import Valve from "./icons/Valve"
const PanelItemTypeOne = (props: any) => {
  return (
    <div className="home-screen--panel-item">
      <div className="home-screen--panel-item-text">{props.title}</div>
      <div className="home-screen--panel-item-icon">
        {props.type === 1 && <LightBulp />}
        {props.type === 2 && <Valve />}
      </div>
      <div className="home-screen--panel-item-control">
        <div className="home-screen--panel-item-switch">
          <button onClick={() => props.changeStatus(props.id, true)} className={props.onSwitch ? "active" : ""}>I</button>
          <button onClick={() => props.changeStatus(props.id, false)} className={!props.onSwitch ? "active" : ""}>O</button>
        </div>
      </div>
      <button onClick={() => props.addItems(props.id)} className="home-screen--panel-item-action">EKLE</button>
    </div>
  )
}

export default PanelItemTypeOne