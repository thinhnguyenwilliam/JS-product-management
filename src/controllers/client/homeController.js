class HomeController 
{
  async viewHomePage(req, res) 
  {
    res.status(200).json({
      state_baby: 'Home is coming',
      nhớ_em: 'Ngân, Giang,...'
    });
  }
  
}

module.exports = new HomeController();
