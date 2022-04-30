import Hot from "./icons/Hot"

const PanelItemTypeOne = (props: any) => {
  return (
    <div className="home-screen--panel-item">
      <div className="home-screen--panel-item-text">{props.title}</div>
      <div className="home-screen--panel-item-icon">
        <Hot />
      </div>
      <div className="home-screen--panel-item-control">
        <div className="home-screen--panel-item-switch">
          <button onClick={() => props.changeTemprature(props.id, props.temprature, "minus")}>-</button>

          <div className="home-screen--panel-item-switch-text">{props.temprature.toFixed(1)}</div>
          <button onClick={() => props.changeTemprature(props.id, props.temprature, "add")}>+</button>
        </div>
      </div>
      <button onClick={() => props.addItems(props.id)} className="home-screen--panel-item-action">EKLE</button>
    </div>
  )
}

export default PanelItemTypeOne;