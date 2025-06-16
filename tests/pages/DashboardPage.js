class DashboardPage {
  constructor(page) {
    this.page = page; 
    this.dashboardTitle = 'h2';
  }

  async getDashboardTitle() {
    return this.page.locator(this.dashboardTitle);
  }
}

module.exports = DashboardPage; 