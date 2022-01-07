import { Avatar, MenuItem, Select } from "@mui/material";
import { enGB } from "date-fns/locale";
import { useState } from "react";
import { default as Chart, default as ReactApexChart } from "react-apexcharts";
import { DatePickerCalendar } from "react-nice-dates";
import Card from "../../components/Card";
import { chartCircleOptions, chartLineOptions } from "../../constants";
import CardJson from "../../constants/JsonData/card.json";
import "./styles.scss";

const Dashboard = () => {
  const [date, setDate] = useState();

  return (
    <div className="dashboard__container">
      <div className="dashboard__chart">
        <div className="dashboard__header">Dashboard</div>
        <div className="dashboard__title">Biểu đồ cấp số</div>
        <div className="dashboard__wrap-card">
          {CardJson.map((item, idx) => {
            return (
              <Card
                key={idx}
                iconHeader={item.iconHeader}
                title={item.title}
                count={item.count}
                iconUpDown={item.iconUpDown}
                numberPercent={item.numberPercent}
                color={item.color}
                colorText={item.colorText}
                bg={item.bg}
              />
            );
          })}
        </div>
        <div className="dashboard__chart-item">
          <div className="dashboard__chart-wrapper">
            <div className="dashboard__chart-item-title">
              Bảng thống kê theo ngày
            </div>
            <div className="dashboard__chart-item-select">
              <h6>Xem theo</h6>
              <Select
                // value={age}
                // onChange={handleChange}
                sx={{
                  width: "106px",
                  height: 42,
                }}
              >
                <MenuItem value={1}>Ngày</MenuItem>
                <MenuItem value={2}>Tuần</MenuItem>
                <MenuItem value={3}>Tháng</MenuItem>
              </Select>
            </div>
          </div>
          <Chart
            options={chartLineOptions.options}
            series={chartLineOptions.series}
            type="line"
            height="100%"
          />
        </div>
      </div>

      <div className="dashboard__summary">
        <div className="profile__user">
          <span className="profile__icon">
            <i className="bx bxs-bell"></i>
          </span>
          <div className="profile__wrap">
            <Avatar
              alt="avatar-user"
              src="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
            />

            <div className="profile__wrap-user">
              <div className="profile__hello">Xin chào</div>
              <span className="profile__name">Lê Quỳnh Ái Vân</span>
            </div>
          </div>
        </div>

        <div className="profile__summary-title">Tổng quan</div>

        <div className="profile__summary-card-list">
          <div className="profile__summary-card-item">
            <ReactApexChart
              options={chartCircleOptions.options}
              series={chartCircleOptions.series}
              type="radialBar"
              height={120}
              className="profile__summary-card-item-chart"
            />
            <div className="profile__summary-card-item-wrapNumber">
              <div>4.221</div>
              <div className="profile__summary-card-item-wrapIcon">
                <i className="bx bx-desktop"></i>
                <span>Thiết bị</span>
              </div>
            </div>
            <div className="profile__summary-card-item-wrapStatus">
              <div className="profile__summary-card-item-up">
                <i className="bx bxs-circle"></i>
                <span className="text">Đang hoạt động</span>
                <span className="number">3.799</span>
              </div>
              <div className="profile__summary-card-item-up">
                <i className="bx bxs-circle"></i>
                <span className="text">Dừng hoạt động</span>
                <span className="number">400</span>
              </div>
            </div>
          </div>
          <div className="profile__summary-card-item">
            <ReactApexChart
              options={chartCircleOptions.options}
              series={chartCircleOptions.series}
              type="radialBar"
              height={120}
              className="profile__summary-card-item-chart"
            />
            <div className="profile__summary-card-item-wrapNumber">
              <div>4.221</div>
              <div className="profile__summary-card-item-wrapIcon">
                <i className="bx bx-desktop"></i>
                <span>Thiết bị</span>
              </div>
            </div>
            <div className="profile__summary-card-item-wrapStatus">
              <div className="profile__summary-card-item-up">
                <i className="bx bxs-circle"></i>
                <span className="text">Đang hoạt động</span>
                <span className="number">3.799</span>
              </div>
              <div className="profile__summary-card-item-up">
                <i className="bx bxs-circle"></i>
                <span className="text">Dừng hoạt động</span>
                <span className="number">400</span>
              </div>
            </div>
          </div>
          <div className="profile__summary-card-item">
            <ReactApexChart
              options={chartCircleOptions.options}
              series={chartCircleOptions.series}
              type="radialBar"
              height={120}
              className="profile__summary-card-item-chart"
            />
            <div className="profile__summary-card-item-wrapNumber">
              <div>4.221</div>
              <div className="profile__summary-card-item-wrapIcon">
                <i className="bx bx-desktop"></i>
                <span>Thiết bị</span>
              </div>
            </div>
            <div className="profile__summary-card-item-wrapStatus">
              <div className="profile__summary-card-item-up">
                <i className="bx bxs-circle"></i>
                <span className="text">Đang hoạt động</span>
                <span className="number">3.799</span>
              </div>
              <div className="profile__summary-card-item-up">
                <i className="bx bxs-circle"></i>
                <span className="text">Dừng hoạt động</span>
                <span className="number">400</span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard__calender">
          <DatePickerCalendar
            date={date}
            // onDateChange={setDate}
            locale={enGB}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
