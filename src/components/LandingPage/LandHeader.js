import React from "react";
import "../styles/LandHeader.css";
import logo from "../../images/logo.png";
class LandHeader extends React.Component {
  render() {
    return (
      <div class="land-header">
        <div className="land-header__container">
          <div className="land-header__head">
            <div className="banner">
              <a href="https://advertiseform.us" className="banner__redirect">
                <img className="banner__icon" src={logo} />
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
              <select>
                <option value="">Tất cả lĩnh vực, ngành nghề</option>
                <option value="3">Công Nghệ</option>
                <option value="8">Dịch Vụ</option>
                <option value="10">Du lịch - Giải Trí</option>
                <option value="22">Đồ Ăn - Đồ Uống</option>
                <option value="9">E-commerce</option>
                <option value="23">Game - ứng dụng</option>
                <option value="20">Giáo dục - Cộng đồng</option>
                <option value="14">Khác</option>
                <option value="15">Nhà cửa - Vật dụng gia đình</option>
                <option value="31">Phụ kiện - Đồ chơi - Xe cộ</option>
                <option value="18">Thể Dục - Thể Thao</option>
                <option value="19">Thời Trang - Làm Đẹp</option>
                <option value="24">Y tế, thuốc và sức khỏe</option>
              </select>
            </div>

            <div className="navigation__options">
              <select>
                <option value="">Tất cả mục đích quảng cáo</option>
                <option value="4">Kinh doanh sản phẩm/dịch vụ</option>
                <option value="11">Sự kiện, cuộc thi, tuyển dụng</option>
                <option value="12">
                  Tăng người theo dõi, lượt truy cập trang
                </option>
              </select>
            </div>

            <div className="navigation__options">
              <select>
                <option value="">Tất cả loại hình quảng cáo</option>
                <option value="57">Nội dung Viral</option>
                <option value="5">Quảng cáo bài viết</option>
                <option value="30">Quảng cáo Game, ứng dụng</option>
                <option value="7">Quảng cáo Link website</option>
                <option value="16">Quảng cáo sự kiện</option>
                <option value="17">Quảng cáo trang</option>
                <option value="25">Quảng cáo video</option>
              </select>
            </div>

            <div className="navigation__options">
              <select>
                <option value="">Tất cả kiểu quảng cáo</option>
                <option value="image">Ảnh</option>
                <option value="embed">Link nhúng</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandHeader;
