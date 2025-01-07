class DashboardController 
{
  async index(req, res) 
  {
    res.status(200).json({
      pageTitle:"Trang tổng quan"
    });
  }
  
}

module.exports = new DashboardController();
