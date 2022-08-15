import "./dashboard.scss";
import TabContainer from "../../img/tab-container.svg";
import TabFill from "../../img/tab-fill.svg";
import Search from "../../img/SEARCH.svg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="overlay">
        <div className="textInput">
          <div className="flexRow">
            <div className="roundActionSearch">
              <img src={Search} className="iconColor" />
            </div>
            <input
              type="text"
              className="placeHolder"
              placeholder="Search here..."
            />
          </div>
        </div>
        <div className="tabs">
          <div className="text1">Packages</div>
          <div className="text2">Snacks</div>
          <div className="text3">Drinks</div>
          <div className="text4">Food</div>
          <img src={TabContainer} className="tabContainer" />
          <div className="TabActive">
            <div className="text5">All</div>
            <img src={TabFill} className="tabFill" />
          </div>
        </div>
        <div className="text6">Food</div>
        <div class="flexRow1">
          <div className="card4">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Sashmi</div>
            <div className="text8">$22</div>
          </div>
          <div className="card4">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Unagi - Grilled Eel</div>
            <div className="text8">$22</div>
          </div>
          <div className="card4">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Soba - Buckwheat Noodles</div>
            <div className="text8">$22</div>
          </div>
        </div>
        <div className="flexRow2">
          <div className="card3">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Onigiri - Rice Balls</div>
            <div className="text8">$22</div>
          </div>
          <div className="card3">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Yakitori - Grilled Chicken</div>
            <div className="text8">$22</div>
          </div>
          <div className="card3">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Miso Soup</div>
            <div className="text8">$22</div>
          </div>
        </div>
        <div className="text6">Drinks</div>
        <div className="flexRow2">
          <div className="card3">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Amazake</div>
            <div className="text8">$22</div>
          </div>
          <div className="card3">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Royal Milk Tea</div>
            <div className="text8">$22</div>
          </div>
          <div className="card3">
            <div className="imagePlaceholder8"></div>
            <div className="text7">Flavored Soymilk Drinks</div>
            <div className="text8">$22</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
