const SectionTop = () => {
  return (
    <div className="home-screen--top">
      <input
        className="home-screen--top-input"
        type="text"
        placeholder="SENARYO İSMİ GİRİNİZ"
      />
      <ul className="home-screen--top-buttons">
        <li className="cancel">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </i>
          <span>İPTAL</span>
        </li>
        <li className="save">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          </i>
          <span>KAYDET</span>
        </li>
      </ul>
    </div>
  )
}

export default SectionTop;