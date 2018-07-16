import React from "react";
import "../styles/LandHeader.css";
import logo from "../../images/logo.png";
class LandHeader extends React.Component {

  handleChange = (e, type) => {
    switch (type) {
      case "career":

        this.props.onChange(
          e.target.value,
          this.props.p,
          this.props.t,
          this.props.b
        );
        break;
      case "type":

        this.props.onChange(
          this.props.c,
          this.props.p,
          e.target.value,
          this.props.b
        );
        break;
      case "base":

        this.props.onChange(
          this.props.c,
          this.props.p,
          this.props.t,
          e.target.value
        );
        break;
      case "purpose":

        this.props.onChange(
          this.props.c,
          e.target.value,
          this.props.t,
          this.props.b
        );
        break;

      default:
        break;
    }

  };
  render() {
    return (
      <div className="land-header">
        <div className="land-header__container">
          <div className="land-header__head">
            <div className="banner">
              <a href="https://advertiseform.us" className="banner__redirect">
                <img className="banner__icon" src={logo} alt="banner"/>
                Mẫu quảng cáo
              </a>
              <h1 className="banner__description">
                {" "}
                Thư viện mẫu quảng cáo Facebook chọn lọc{" "}
              </h1>
            </div>

            <div className="contact">
              <div className="contact__container">
                <a
                  className="contact__link"
                  href="https://www.advertiseform.us"
                  >
                  <div className="contact__item contact__item--blog" />
                </a>
                <a
                  className="contact__link"
                  href="https://www.advertiseform.us"
                >
                  <div className="contact__item contact__item--facebook" />
                </a>
              </div>
            </div>
          </div>

          <div className="search-bar">
            <input
              className="search-bar__input"
              placeholder="Nhập từ khóa"
              type="text"
            />
            <button />
          </div>

          <div className="navigation">
            <div className="navigation__options">
              <select
                value={this.props.c}
                onChange={(e) => this.handleChange(e, "career")}
              >
                <option value="0">Tất cả lĩnh vực, ngành nghề</option>
                <option value="1">Công Nghệ</option>
                <option value="2">Dịch Vụ</option>
                <option value="3">Du lịch - Giải Trí</option>
                <option value="4">Đồ Ăn - Đồ Uống</option>
                <option value="5">E-commerce</option>
                <option value="6">Game - ứng dụng</option>
                <option value="7">Giáo dục - Cộng đồng</option>
                <option value="8">Khác</option>
                <option value="9">Nhà cửa - Vật dụng gia đình</option>
                <option value="10">Phụ kiện - Đồ chơi - Xe cộ</option>
                <option value="11">Thể Dục - Thể Thao</option>
                <option value="12">Thời Trang - Làm Đẹp</option>
                <option value="13">Y tế, thuốc và sức khỏe</option>
              </select>
            </div>

            <div className="navigation__options">
              <select
                value={this.props.p}
                onChange={e => this.handleChange(e, "purpose")}
              >
                <option value="0">Tất cả mục đích quảng cáo</option>
                <option value="1">Kinh doanh sản phẩm/dịch vụ</option>
                <option value="2">Sự kiện, cuộc thi, tuyển dụng</option>
                <option value="3">
                  Tăng người theo dõi, lượt truy cập trang
                </option>
              </select>
            </div>

            <div className="navigation__options">
              <select
                value={this.props.t}
                onChange={e => this.handleChange(e, "type")}
              >
                <option value="0">Tất cả loại hình quảng cáo</option>
                <option value="1">Nội dung Viral</option>
                <option value="2">Quảng cáo bài viết</option>
                <option value="3">Quảng cáo Game, ứng dụng</option>
                <option value="4">Quảng cáo Link website</option>
                <option value="5">Quảng cáo sự kiện</option>
                <option value="6">Quảng cáo trang</option>
                <option value="7">Quảng cáo video</option>
              </select>
            </div>

            <div className="navigation__options">
              <select
                value={this.props.b}
                onChange={e => this.handleChange(e, "base")}
              >
                <option value="0">Tất cả kiểu quảng cáo</option>
                <option value="1">Ảnh</option>
                <option value="2">Link nhúng</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandHeader;
