import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import CreateBtn from "../../../components/CreateBtn";
import User from "../../../components/User";
import "./styles.scss";

const DetailNumberLevel = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Cấp số
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Danh sách cấp số
    </Link>,
    <div className="header-title">Chi tiết</div>,
  ];
  return (
    <div className="number__level__container">
      <div className="number__level__header">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <User />
      </div>
      <div className="number__level__detail__content">
        <h3>Quản lý cấp số</h3>
        <div className="number__level__detail__content-wrap">
          <div className="number__level__detail__content-title">
            Thông tin cấp số
          </div>
          <div className="number__level__detail__content-leftAndRight">
            <div className="number__level__detail__content-left">
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Họ tên:
                </span>
                <span className="number__level__detail__content-value">
                  Nguyễn Thị Dung
                </span>
              </div>
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Tên dịch vụ:
                </span>
                <span className="number__level__detail__content-value">
                  Khám tim mạch
                </span>
              </div>
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Số thứ tự:
                </span>
                <span className="number__level__detail__content-value">
                  2001201
                </span>
              </div>
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Thời gian cấp:
                </span>
                <span className="number__level__detail__content-value">
                  14:35 - 07/11/2021
                </span>
              </div>
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Hạn sử dụng:
                </span>
                <span className="number__level__detail__content-value">
                  18:00 - 07/11/2021
                </span>
              </div>
            </div>
            <div className="number__level__detail__content-right">
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Nguồn cấp:
                </span>
                <span className="number__level__detail__content-value">
                  Kiosk
                </span>
              </div>
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Trạng thái:
                </span>
                <span className="number__level__detail__content-value">
                  Đang chờ
                </span>
              </div>
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Số điện thoại:
                </span>
                <span className="number__level__detail__content-value">
                  0948523623
                </span>
              </div>
              <div className="number__level__detail__content-wrapLabelAndValue">
                <span className="number__level__detail__content-label">
                  Địa chỉ Email:
                </span>
                <span className="number__level__detail__content-value">
                  nguyendung@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* btn detail */}
        <Link component={RouterLink} to="/level-number" className="wrap-btn">
          <CreateBtn title="Quay lại" icon="bx bx-arrow-back" />
        </Link>
      </div>
    </div>
  );
};

export default DetailNumberLevel;
