const SectionTopFilter = (props: any) => {

  return (
    <div className="home-screen--filter">
      <div className="home-screen--filter-input">
        <label htmlFor="all">Hepsi</label>
        <input type="radio" name="filter" id="all"
          onChange={(e) => props.filterItems(e.target.id)}
        />
      </div>
      <div className="home-screen--filter-input">
        <label htmlFor="area">Alan</label>
        <input
          type="radio"
          name="filter"
          id="area"
          className="home-screen--filter-input"
          onChange={(e) => props.filterItems(e.target.id)}
        />
      </div>
      <div className="home-screen--filter-input">
        <label htmlFor="type">Tip</label>
        <input
          type="radio"
          name="filter"
          id="type"
          className="home-screen--filter-input"
          onChange={(e) => props.filterItems(e.target.id)}
        />
      </div>
      <div className="home-screen--filter-input">
        <label htmlFor="az">a-z</label>
        <input
          type="radio"
          name="filter"
          id="az"
          className="home-screen--filter-input"
          onChange={(e) => props.filterItems(e.target.id)}
        />
      </div>
    </div>
  )
}

export default SectionTopFilter;