import "./orders.scss";
import TableDivider from "../../img/tableDivider.svg";
import ItemDivider from "../../img/dividerItem.svg";
import BestSellerButton from "../../img/-chevron-bottom.svg";
import ArrowDownRed from "../../img/arrow-down-red.svg";
import ArrowUp from "../../img/arrow-up.svg";
import ArrowDown from "../../img/arrow-down.svg";

const Orders = () => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <div>
      <div className="OrdersRoot">
        <div className="shortInfo" style={{ justifyContent: "space-between" }}>
          <div className="container8" style={{ gap: "50px" }}>
            <div className="flexColumn">
              <div className="text1" style={{ width: "168px" }}>
                Customer
              </div>
              <div className="text2" style={{ width: "168px" }}>
                1000
              </div>
            </div>
            <div className="flexColumn1" style={{ width: "42px" }}>
              <img src={ArrowDownRed} className="arrowDown1" />
              <div className="text3" style={{ color: "#f04361" }}>
                -15%
              </div>
            </div>
          </div>
          <div className="container8" style={{ gap: "47px" }}>
            <div className="flexColumn">
              <div className="text1" style={{ width: "168px" }}>
                Orders
              </div>
              <div className="text2" style={{ width: "168px" }}>
                1050
              </div>
            </div>
            <div className="flexColumn1" style={{ width: "45px" }}>
              <img src={ArrowUp} className="arrowDown1" />
              <div className="text3" style={{ color: "#42bca1" }}>
                +20%
              </div>
            </div>
          </div>
          <div className="container8" style={{ gap: "47px" }}>
            <div className="flexColumn">
              <div className="text1" style={{ width: "168px" }}>
                Revenue
              </div>
              <div className="text2" style={{ width: "168px" }}>
                $50.000
              </div>
            </div>
            <div className="flexColumn1" style={{ width: "45px" }}>
              <img src={ArrowUp} className="arrowDown1" />
              <div className="text3" style={{ color: "#42bca1" }}>
                +10%
              </div>
            </div>
          </div>
          <div className="container8" style={{ gap: "47px" }}>
            <div className="flexColumn">
              <div className="text1" style={{ width: "168px" }}>
                Nett Profit
              </div>
              <div className="text2" style={{ width: "168px" }}>
                $12.000
              </div>
            </div>
            <div className="flexColumn1" style={{ width: "45px" }}>
              <img src={ArrowDown} className="arrowDown1" />
              <div className="text3" style={{ color: "#42bca1" }}>
                +12%
              </div>
            </div>
          </div>
        </div>
        <div className="latest-order">
          <div className="container">
            <div className="latestOrder-1">Latest Order</div>
            <div className="tabel">
              <div className="tabelHeader">
                <img src={TableDivider} className="divider7" />
                <div className="tableHeader">
                  <div className="roundHeaderNormal1">Item</div>
                </div>
                <div className="tableHeader1">
                  <div className="roundHeaderNormal1">Quantity</div>
                </div>
                <div className="tableHeader2">
                  <div className="roundHeaderNormal1">Revenue</div>
                </div>
                <div className="tableHeader3">
                  <div className="roundHeaderNormal1">Net Profit</div>
                </div>
                <div className="tableHeader4">
                  <div className="whiteText">No.</div>
                </div>
                <img src={TableDivider} className="divider8" />
              </div>
              <div className="tabelContent">
                <div className="listProduct7">
                  <div className="product7">
                    <div className="whiteText1">01</div>
                    <div className="element17">
                      <div className="tableRow35" style={{ left: "644.3px" }}>
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            $710.68
                          </div>
                        </div>
                      </div>
                      <div className="tableRow36">
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            $293.01
                          </div>
                        </div>
                      </div>
                      <div className="tableRow37">
                        <div className="flexRow1" style={{ gap: "79px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            30
                          </div>
                        </div>
                      </div>
                      <div className="tableRow38">
                        <div className="flexRow1" style={{ gap: "39px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            Sashimi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listProduct7">
                  <div className="product7" style={{ alignItems: "center" }}>
                    <div className="whiteText1" style={{ paddingTop: "75px" }}>
                      02
                    </div>
                    <div className="element17">
                      <div className="tableRow35" style={{ left: "644.3px" }}>
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            $779.58
                          </div>
                        </div>
                      </div>
                      <div className="tableRow36">
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            $739.65
                          </div>
                        </div>
                      </div>
                      <div className="tableRow37" style={{ left: "360px" }}>
                        <div className="flexRow1" style={{ gap: "79px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            30
                          </div>
                        </div>
                      </div>
                      <div className="tableRow38">
                        <div
                          className="rowSpaced28"
                          style={{ position: "absolute" }}
                        >
                          Unagi - Grilled Eel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="element20">
                  <div className="listProduct4">
                    <div className="product7" style={{ alignItems: "center" }}>
                      <div className="whiteText1">04</div>
                      <div className="element17">
                        <div className="tableRow35" style={{ left: "644.3px" }}>
                          <div className="flexRow1" style={{ gap: "37px" }}>
                            <div
                              className="rowSpaced28"
                              style={{ position: "relative" }}
                            >
                              $475.22
                            </div>
                          </div>
                        </div>
                        <div className="tableRow36">
                          <div className="flexRow1" style={{ gap: "37px" }}>
                            <div
                              className="rowSpaced28"
                              style={{ position: "relative" }}
                            >
                              $589.99
                            </div>
                          </div>
                        </div>
                        <div className="tableRow37" style={{ left: "360px" }}>
                          <div className="flexRow1" style={{ gap: "79px" }}>
                            <div
                              className="rowSpaced28"
                              style={{ position: "relative" }}
                            >
                              30
                            </div>
                          </div>
                        </div>
                        <div className="tableRow38">
                          <div className="element22">
                            <div
                              className="rowSpaced28"
                              style={{ position: "absolute" }}
                            >
                              Onigiri - Rice Balls
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listProduct5">
                    <div
                      className="product7"
                      style={{ alignItems: "flex-start" }}
                    >
                      <div className="whiteText1">03</div>
                      <div className="tableRow28">
                        <div className="element23">
                          <div
                            className="rowSpaced28"
                            style={{ position: "absolute" }}
                          >
                            Soba - Buckwheat Noodles
                          </div>
                        </div>
                      </div>
                      <div className="element24">
                        <div className="tableRow35" style={{ left: "277px" }}>
                          <div className="flexRow1" style={{ gap: "37px" }}>
                            <div
                              className="rowSpaced28"
                              style={{ position: "relative" }}
                            >
                              $105.55
                            </div>
                          </div>
                        </div>
                        <div className="tableRow26">
                          <div className="flexRow1" style={{ gap: "37px" }}>
                            <div
                              className="rowSpaced28"
                              style={{ position: "relative" }}
                            >
                              $779.58
                            </div>
                          </div>
                        </div>
                        <div className="tableRow37" style={{ left: "-8px" }}>
                          <div className="flexRow1" style={{ gap: "79px" }}>
                            <div
                              className="rowSpaced28"
                              style={{ position: "relative" }}
                            >
                              30
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listProduct7">
                  <div className="product7" style={{ alignItems: "center" }}>
                    <div className="whiteText2">05</div>
                    <div className="element17">
                      <div className="tableRow35" style={{ left: "644.3px" }}>
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            $767.50
                          </div>
                        </div>
                      </div>
                      <div className="tableRow36">
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            $406.27
                          </div>
                        </div>
                      </div>
                      <div className="tableRow37">
                        <div className="flexRow1" style={{ gap: "79px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            30
                          </div>
                        </div>
                      </div>
                      <div className="tableRow38">
                        <div className="flexRow1" style={{ gap: "39px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            Sashimi
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listProduct7">
                  <div className="product7" style={{ alignItems: "center" }}>
                    <div className="whiteText3">06</div>
                    <div className="element17">
                      <div className="tableRow35" style={{ left: "644.3px" }}>
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            $948.55
                          </div>
                        </div>
                      </div>
                      <div className="tableRow36">
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            $396.84
                          </div>
                        </div>
                      </div>
                      <div className="tableRow37">
                        <div className="flexRow1" style={{ gap: "79px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            30
                          </div>
                        </div>
                      </div>
                      <div className="tableRow38">
                        <div className="flexRow1" style={{ gap: "39px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            Yakitori - Grilled Chicken
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product1">
                  <div className="whiteText1">07</div>
                  <div className="element17">
                    <div className="tableRow35" style={{ left: "644.3px" }}>
                      <div className="flexRow1" style={{ gap: "37px" }}>
                        <div
                          className="rowSpaced28"
                          style={{ position: "relative" }}
                        >
                          $106.58
                        </div>
                      </div>
                    </div>
                    <div className="tableRow36">
                      <div className="flexRow1" style={{ gap: "37px" }}>
                        <div
                          className="rowSpaced28"
                          style={{ position: "relative" }}
                        >
                          $767.50
                        </div>
                      </div>
                    </div>
                    <div className="tableRow37" style={{ left: "368px" }}>
                      <div className="flexRow1" style={{ gap: "79px" }}>
                        <div
                          className="rowSpaced28"
                          style={{ position: "relative" }}
                        >
                          30
                        </div>
                      </div>
                    </div>
                    <div className="tableRow38">
                      <div className="element29">
                        <div
                          className="rowPaced28"
                          style={{ position: "absolute" }}
                        >
                          Royal Milk Tea
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listProduct">
                  <div className="product7" style={{ alignItems: "center" }}>
                    <div className="whiteText1">08</div>
                    <div className="element17">
                      <div className="tableRow35" style={{ left: "644.3px" }}>
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowPaced28"
                            style={{ position: "relative" }}
                          >
                            $778.35
                          </div>
                        </div>
                      </div>
                      <div className="tableRow36">
                        <div className="flexRow1" style={{ gap: "37px" }}>
                          <div
                            className="rowPaced28"
                            style={{ position: "relative" }}
                          >
                            $778.35
                          </div>
                        </div>
                      </div>
                      <div className="tableRow37" style={{ left: "360px" }}>
                        <div className="flexRow1" style={{ gap: "79px" }}>
                          <div
                            className="rowSpaced28"
                            style={{ position: "relative" }}
                          >
                            30
                          </div>
                        </div>
                      </div>
                      <div className="tableRow38">
                        <div className="element31">
                          <div
                            className="rowSpaced28"
                            style={{ position: "absolute" }}
                          >
                            Flavored Soymilk Drinks
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container1">
            <div className="flexRow27">
              <div className="text1" style={{ width: "auto" }}>
                Item Sold
              </div>
              <button
                className="button1"
                onClick={(e) => Button1Function(e, "Button1")}
              >
                <div className="flexRow28">
                  <div className="clickHere">Best Sellers</div>
                  <img src={BestSellerButton} className="chevronButton" />
                </div>
              </button>
            </div>
            <img src={ItemDivider} className="divider9" />
            <div className="flexRow1" style={{ gap: "16px" }}>
              <div className="flexColumn8">
                <div className="productItem5">
                  <div className="imagePlaceholder"></div>
                  <div
                    className="text15"
                    style={{ margin: "0px 45px 0px 0px" }}
                  >
                    Sashimi
                  </div>
                  <div className="text3" style={{ color: "#92929d" }}>
                    430 Items
                  </div>
                </div>
                <div className="productItem5">
                  <div className="imagePlaceholder"></div>
                  <div
                    className="text15"
                    style={{ margin: "0px 45px 0px 0px" }}
                  >
                    Unagi - Grilled Eel
                  </div>
                  <div className="text3" style={{ color: "#92929d" }}>
                    200 Items
                  </div>
                </div>
                <div className="productItem5">
                  <div className="imagePlaceholder"></div>
                  <div
                    className="text15"
                    style={{ margin: "0px 45px 0px 0px" }}
                  >
                    Soba - Buckwheat Noodles
                  </div>
                  <div className="text3" style={{ color: "#92929d" }}>
                    180 Items
                  </div>
                </div>
                <div className="productItem5">
                  <div className="imagePlaceholder"></div>
                  <div
                    className="text15"
                    style={{ margin: "0px 45px 0px 0px" }}
                  >
                    Onigiri - Rice Balls
                  </div>
                  <div className="text3" style={{ color: "#92929d" }}>
                    120 Items
                  </div>
                </div>
                <div className="productItem5">
                  <div className="imagePlaceholder"></div>
                  <div
                    className="text15"
                    style={{ margin: "0px 45px 0px 0px" }}
                  >
                    Yakitori - Grilled Chicken
                  </div>
                  <div className="text3" style={{ color: "#92929d" }}>
                    80 Items
                  </div>
                </div>
                <div className="productItem5">
                  <div className="imagePlaceholder"></div>
                  <div
                    className="text15"
                    style={{ margin: "0px 45px 0px 0px" }}
                  >
                    Royal Milk Tea
                  </div>
                  <div className="text3" style={{ color: "#92929d" }}>
                    70 Items
                  </div>
                </div>
              </div>
              <div className="whiteFlexColumn">
                <div className="purpleHeartRectangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
