import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";
import CreateBtn from "../../../components/CreateBtn";
import User from "../../../components/User";
import "./styles.scss";

const DetailEquipment = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Thiết bị
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Danh sách thiết bị
    </Link>,
    <div className="header-title">Chi tiết thiết bị</div>,
  ];
  return (
    <div className="detail__equipment-container">
      {/* begin header */}
      <div className="detail__equipment-header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      {/* begin content */}
      <div className="detail__equipment-content">
        <h3>Quản lý thiết bị</h3>
        <div className="detail__equipment_content-wrap">
          <div className="detail__equipment_content-title">
            Thông tin thiết bị
          </div>
          <div className="detail__equipment_content-leftAndRight">
            <div className="detail__equipment_content-left">
              <div className="detail__equipment_content-wrapLabelAndValue">
                <span className="detail__equipment_content-label">
                  Mã thiết bị:
                </span>
                <span className="detail__equipment_content-value">KIO_01</span>
              </div>
              <div className="detail__equipment_content-wrapLabelAndValue">
                <span className="detail__equipment_content-label">
                  Tên thiết bị:
                </span>
                <span className="detail__equipment_content-value">Kiosk</span>
              </div>
              <div className="detail__equipment_content-wrapLabelAndValue">
                <span className="detail__equipment_content-label">
                  Địa chỉ IP:
                </span>
                <span className="detail__equipment_content-value">
                  128.172.308
                </span>
              </div>
            </div>
            <div className="detail__equipment_content-right">
              <div className="detail__equipment_content-wrapLabelAndValue">
                <span className="detail__equipment_content-label">
                  Loại thiết bị:
                </span>
                <span className="detail__equipment_content-value">Kiosk</span>
              </div>
              <div className="detail__equipment_content-wrapLabelAndValue">
                <span className="detail__equipment_content-label">
                  Tên đăng nhập:
                </span>
                <span className="detail__equipment_content-value">
                  Linhkyo011
                </span>
              </div>
              <div className="detail__equipment_content-wrapLabelAndValue">
                <span className="detail__equipment_content-label">
                  Mật khẩu:
                </span>
                <span className="detail__equipment_content-value">CMS</span>
              </div>
            </div>
          </div>
          <div className="wrap-service">
            <div className="detail__equipment_content-useService">
              Dịch vụ sử dụng:
            </div>
            <div className="detail__equipment_content-useService-content">
              Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai
              mũi họng, Khám hô hấp, Khám tổng quát.
            </div>
          </div>
        </div>
        {/* btn update */}
        <Link
          // component={RouterLink}
          // to="/list-equipment/add"
          className="wrap-btn"
        >
          <CreateBtn title="Cập nhật thiết bị" icon="bx bxs-edit" />
        </Link>
      </div>
    </div>
  );
};

export default DetailEquipment;
