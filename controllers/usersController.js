'use strict';

// const mongoose = require('mongoose');
const User = mongoose.model('Users');
const http = require('http');

exports.get_users = function(req, res) {
  
  User.findById(Users.id, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });

  // class UserInfo {

  //   constructor(name, firm, id, signup_date) {
  //     this.name = name;
  //     this.firm = firm;
  //     this.id = id;
  //     this.signup_date = signup_date;
  //   }
  
  //   get dailyUsers() {
  //     return this.calcDailyUsers();
  //   }

  //   get weeklyUsers() {
  //     return this.calcWeeklyUsers();
  //   }
    
  //   get monthlyUsers() {
  //     return this.calcMonthlyUsers();
  //   }

  //   get yearlyUsers() {
  //     return this.calcYearlyUsers();
  //   }

  //   calcDailyUsers() {
  //     var daily_count = 0;
  //     var start_of_day = moment().startOf('day').fromNow();
  //     var end_of_day = moment().endOf('day').fromNow(); 

  //     for (var i = 0; ; i++) {
  //       if (user[i].signup_date > start_of_day && user[i].signup_date < end_of_day) {
  //         daily_count++;
  //       }
  //     }
  //   }

  //   calcWeeklyUsers() {
  //     var weekly_count = 0;
  //     var start_of_week = moment().startOf('week').fromNow();
  //     var end_of_week = moment().endOf('week').fromNow();

  //     for (var i = 0; ; i++) {
  //       if (user[i].signup_date > start_of_week && user[i].signup_date < end_of_week) {
  //         weekly_count++;
  //       }
  //     }
  //   }

  //   calcMonthlyUsers() {
  //     var monthly_count = 0;
  //     var start_of_month = moment().startOf('month').fromNow();
  //     var end_of_month = moment().endOf('month').fromNow();

  //     for (var i = 0; ; i++) {
  //       if (user[i].signup_date > start_of_month && user[i].signup_date < end_of_month) {
  //         monthly_count++;
  //       }
  //     }
  //   }

  //   calcYearlyUsers() {
  //     var yearly_count = 0;
  //     var start_of_year = moment().startOf('year').fromNow();
  //     var end_of_year = moment().endOf('year').fromNow();

  //     for (var i = 0; ; i++) {
  //       if (user[i].signup_date > start_of_year && user[i].signup_date < end_of_year) {
  //         yearly_count++;
  //       }
  //     }
  //   }

  // }

};