import "./HomePage.css";




const Home = ({ product }) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-wrapper">
            <div className="text-background">
              <h2>Главная </h2>
              <h3>
                <span className="span-blue">Главная </span> ||
                <span> Все Товары</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cards">
        <div className="container">
          <div className="wrapper-cards">
            <button className="btn-filter">Фильтр</button>
          </div>

          <div className="cards-map">
            {product.map((item) => {
              return (
                <>
                 <div className="boxes">
                  <div key={item.id} className="box">
                    <img className="images-cards" src={item.img} alt="" />
                    <div className="cards-content">
                      <h2 className="h2-name">{item.name}</h2>
                      <p className="p-title">{item.title}</p>
                      <h3 className="h3-price">Цена: {item.price} сом</h3>
                      <button className="btn-add-card">Добавить в корзину</button>
                    </div>
                  </div>
                 </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* <div key={item.id}>
                    
                    {item.name}</div> */}
    </>
  );
};

export default Home;
