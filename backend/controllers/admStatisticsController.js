import Booking from '../models/Booking.js'
import Users from '../models/User.js'
import UserLogs from '../models/UserLogs.js'

//get Monthly Revenue
export const getMonthlyRevenue = async (req, res) => {
    try {
      const bookings = await Booking.aggregate([
        {
          // filter bookings created this month
          $match: {
            createdAt: {
              $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
              $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
            },
          },
        },
        {
          // group bookings by year and month and sum their prices
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' }
            },
            totalRevenue: {
              $sum: { $toDouble: '$price' },
            },
          },
        },
      ]);
  
      res.status(200).json({ success: true, data: bookings});
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };

//number of sales
export const getMonthlySales = async (req, res) => {
    try {
      const bookings = await Booking.aggregate([
        {
          // filter bookings created this month
          $match: {
            createdAt: {
              $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
              $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
            },
          },
        },
        {
          // group bookings by year and month and sum their prices
          $group: {
            _id: {
              year: { $year: '$createdAt' },
              month: { $month: '$createdAt' }
            },
            totalSales: {
                $sum: 1,
            },
          },
        },
      ]);
  
      res.status(200).json({ success: true, data: bookings });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  };

//number of users this month
export const getMonthlyUsers = async (req, res) => {
    try {
      const users = await Users.find({
        role: "user",
        createdAt: {
          $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
        },
      });
      res.json({ monthlyUsers: users.length });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  };

//get logs by month
export const getActiveUsers = async (req, res) => {
  const currentYear = new Date().getFullYear();

  try {
    const result = await UserLogs.aggregate([
      {
        $match: { year: currentYear.toString() }
      },
      {
        $group: {
          _id: { month: "$month" },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          month: "$_id.month",
          count: 1
        }
      }
    ]);

    const data = [
      { month: 'January', "userno": 0 },
      { month: 'February', "userno": 0 },
      { month: 'March', "userno": 0 },
      { month: 'April', "userno": 0 },
      { month: 'May', "userno": 0 },
      { month: 'June', "userno": 0 },
      { month: 'July', "userno": 0 },
      { month: 'August', "userno": 0 },
      { month: 'September', "userno": 0 },
      { month: 'October', "userno": 0 },
      { month: 'November', "userno": 0 },
      { month: 'December', "userno": 0 },
    ];

    result.forEach(item => {
      const monthIndex = new Date(`${item.month} 1, ${currentYear}`).getMonth();
      data[monthIndex]["userno"] = item.count;
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching data' });
  }
};