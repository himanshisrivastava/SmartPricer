import { Component } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import { FacebookService} from '../../services/facebook.service'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DataService } from '../../services/data.service';
import { jdaService } from '../../services/jda.service';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    FacebookService
  ]
})

export class HomePage {
  isLoggedIn:boolean = false;
  isFBLoggedIn:boolean = false;
  accessToken: any;
  userData: any;
  fbJsonData: any;
  recommendationItems: any[];
  historyItems: any[];
  newArrivals: any[];
  email : string;
  userName : string;
  userImgUrl : string;
  json2 = {"id": "1004799426238279",
  "name": "Himanshi Srivastava",
  "birthday": "05/05/1989",
  "gender": "female",
  "email": "himshi15@gmail.com",
  "events": {
    "data": [
      {
        "description": "Join us for the launch of Facebook's India Innovation Hub Accelerator Program, in collaboration with T-Hub",
        "end_time": "2018-01-23T17:30:00+0530",
        "name": "India Innovation Hub Accelerator Program Launch",
        "place": {
          "name": "T-Hub Hyderabad",
          "location": {
            "city": "Hyderabad",
            "country": "India",
            "latitude": 17.4222393,
            "longitude": 78.3371887,
            "street": "IIIT-H Campus, Gachibowli",
            "zip": "500032"
          },
          "id": "1431057323890297"
        },
        "start_time": "2018-01-23T14:00:00+0530",
        "id": "759707047533166",
        "rsvp_status": "unsure"
      },
      {
        "end_time": "2017-07-16T18:00:00+0530",
        "name": "12 Hour Stadium Run",
        "place": {
          "name": "Gachibowli Stadium"
        },
        "start_time": "2017-07-16T06:00:00+0530",
        "id": "343392732766686",
        "rsvp_status": "attending"
      },
      {
        "description": "10 th edition of our most awaited \
108 SURYA NAMASKARS ,this time again to celebrate WORLD HEALTH DAY.\
People participating will have to bear the entry charges of the park.",
        "name": "108 SURYANAMASKAR ",
        "place": {
          "name": "Kotla Vijayabhaskara Reddy Botanical Garden",
          "location": {
            "city": "Hyderabad",
            "country": "India",
            "latitude": 17.455,
            "longitude": 78.357,
            "street": "Kothaguda Reserve Forest, Gachibowli Road Near Hi-Tec City, Kondapur, Kondapur, Hyderabad, Telangana",
            "zip": "500084"
          },
          "id": "144011765610849"
        },
        "start_time": "2017-04-09T07:00:00+0530",
        "id": "849457981868311",
        "rsvp_status": "unsure"
      },
      {
        "description": "Celebrate CIBO Anniversary week with us at CIBO house.",
        "end_time": "2017-02-28T23:00:00+0530",
        "name": "CIBO house Anniversary Celebrations",
        "place": {
          "name": "CIBO house",
          "location": {
            "city": "Hyderabad",
            "country": "India",
            "latitude": 17.447921767825,
            "longitude": 78.378773631325,
            "street": "Upper Ground Floor, Phoenix Towers(opp Trident Hotel), Hitech City",
            "zip": "500081"
          },
          "id": "1559853417565818"
        },
        "start_time": "2017-02-22T11:00:00+0530",
        "id": "274112776335614",
        "rsvp_status": "unsure"
      },
      {
        "description": "The Airtel Hyderabad Marathon today might have become synonymous with many things which are Hyderabadi. It owes the current status to the vision, passion and hard work of the members of Hyderabad Runners, the team that had introduced this mammoth racing extravaganza to the city of Hyderabad.",
        "name": "Airtel Hyderabad Marathon 2016 (AHM2016)",
        "place": {
          "name": "People's Plaza",
          "location": {
            "city": "Hyderabad",
            "country": "India",
            "latitude": 17.41874123048,
            "located_in": "604984032888236",
            "longitude": 78.465579917537
          },
          "id": "104056433031313"
        },
        "start_time": "2016-08-28T05:00:00+0530",
        "id": "219710881732011",
        "rsvp_status": "attending"
      },
      {
        "description": "Milind Soman and all Pinkathon ambassadors in a fun promotional run on the 13th of Feb in Malaysian Township.",
        "name": "SBI Pinkathon Hyderabad 2016: Run With Milind",
        "place": {
          "name": "Malaysian Township",
          "location": {
            "city": "Hyderabad",
            "country": "India",
            "latitude": 17.478311654283,
            "longitude": 78.391992168566,
            "street": "Kukatpalli",
            "zip": "500072"
          },
          "id": "167570363274944"
        },
        "start_time": "2016-02-13T06:00:00+0530",
        "id": "973860932701690",
        "rsvp_status": "unsure"
      },
      {
        "description": "SKY FEST - CARNIVAL, SHOPPING and FOOD ARENA ",
        "end_time": "2015-12-27T23:00:00+0530",
        "name": "SKYFEST 2015",
        "place": {
          "name": "Gachibowli Stadium",
          "location": {
            "city": "Hyderabad",
            "country": "India",
            "latitude": 17.446502280303,
            "longitude": 78.34529904811,
            "street": "Old Mumbai Rd, Gachibowli, Hyderabad, Andhra Pradesh 500032",
            "zip": "500032"
          },
          "id": "343504762369331"
        },
        "start_time": "2015-12-23T10:00:00+0530",
        "id": "1028985443830552",
        "rsvp_status": "unsure"
      },
      {
        "description": "After 10 years of togetherness, Ashish and Apurva are getting married now.  We invite you all to shower your blessings and love on us.",
        "name": "Wedding Ceremony",
        "place": {
          "name": "Rajshri Tandon Guest House, Allahabad, UP"
        },
        "start_time": "2015-12-14T19:00:00+0530",
        "id": "331421773695012",
        "rsvp_status": "attending"
      },
      {
        "description": "We are back to hit the streets of Hyderabad for the 4th successive year with the PUMA Urban Stampede. ",
        "name": "PUMA Urban Stampede Powered by Jabong Hyderabad",
        "place": {
          "name": "Runners For Life",
          "location": {
            "city": "Bangalore",
            "country": "India",
            "latitude": 46.7515416,
            "longitude": 23.55570438,
            "street": "#6 & 13, KR Colony, Domlur Layout",
            "zip": "560071"
          },
          "id": "321307937635"
        },
        "start_time": "2015-10-04T06:00:00+0530",
        "id": "817290395031301",
        "rsvp_status": "attending"
      },
      {
        "description": "Hello All,",
        "name": "Digital Telangana - Digital 5K RUN",
        "place": {
          "name": "Hyderabad"
        },
        "start_time": "2015-07-05T06:30:00+0530",
        "id": "1599948893626677",
        "rsvp_status": "attending"
      },
      {
        "description": "Because Public Roads should be just that - Public.", 
        "end_time": "2015-07-05T09:30:00+0530",
        "name": "Digital Raahgiri Day , Hyderabad -Week #25 - July 5, 2015 ( Silver Jubilee)",
        "place": {
          "name": "Raheja IT Park,Mindspace,Hitec City,Hyderabad",
          "location": {
            "city": "Hyderabad",
            "country": "India",
            "latitude": 17.441814123763,
            "longitude": 78.381186212758,
            "street": "Hitec City",
            "zip": "500081"
          },
          "id": "125990237496948"
        },
        "start_time": "2015-07-05T06:00:00+0530",
        "id": "384756085060534",
        "rsvp_status": "attending"
      },      
      {
        "description": "Honest Steps, a walk across India, led by Proud Indians, will start from Kanyakumari on December 18, 2011, at 8 am. This over 5,000 kms walk will reach New Delhi around April-end 2012.",
        "end_time": "2012-04-18T18:00:00-0700",
        "name": "Honest Steps: A Walk from Kanyakumari to New Delhi",
        "start_time": "2011-12-18T08:00:00-0800",
        "id": "862203060514269",
        "rsvp_status": "attending"
      },
      {
        "end_time": "2011-09-12T21:00:00+0530",
        "name": "birthday treat",
        "start_time": "2011-09-12T18:00:00+0530",
        "id": "793229600784856",
        "rsvp_status": "attending"
      }
    ],
    "paging": {
      "cursors": {
        "before": "QVFIUm13Rjg0NEpLcEQ4M0ZA0RlRObXA1LXFNRFJpS3dOekxWa0Q5dFBCZAHFIa1ctTEtCeUNHalhEWk5naGFmRG0xSkExRmlpcEpaNTBzZAnpOcWZAZAZAG1nVERB",
        "after": "QVFIUkVyUkJ4YzBmX011eEJYdktQaFlHUUlHalQ5c3hFOGhmVENCQ3VhUEhUclRubGFlaTUxODI3aWFBeGRZAb002cG5LSEFkMzhnMWFKWndJelpqdFV0cnBB"
      }
    }
  }}; 
  json1 = {'id': '1004799426238279',
        'name': 'Naveen Yadav',
        'birthday': '18/12/1990',
        'gender': 'male',
        'email': 'newnvn@gmail.com',
        'events': {
          'data': [
            {
              'description': 'Join us for the launch of Facebook\'s India Innovation Hub Accelerator Program, in collaboration with T-Hub',
              'end_time': '2018-01-23T17:30:00+0530',
              'name': 'India Innovation Hub Accelerator Program Launch',
              'place': {
                'name': 'T-Hub Hyderabad',
                'location': {
                  'city': 'Hyderabad',
                  'country': 'India',
                  'latitude': 17.4222393,
                  'longitude': 78.3371887,
                  'street': 'IIIT-H Campus, Gachibowli',
                  'zip': '500032'
                },
                'id': '1431057323890297'
              },
              'start_time': '2018-01-23T14:00:00+0530',
              'id': '759707047533166',
              'rsvp_status': 'unsure'
            },
            {
              'end_time': '2017-07-16T18:00:00+0530',
              'name': '12 Hour Stadium Run',
              'place': {
                'name': 'Gachibowli Stadium'
              },
              'start_time': '2017-07-16T06:00:00+0530',
              'id': '343392732766686',
              'rsvp_status': 'attending'
            },
            {
              'description': 'Celebrate CIBO Anniversary week with us at CIBO house.',
              'end_time': '2017-02-28T23:00:00+0530',
              'name': 'CIBO house Anniversary Celebrations',
              'place': {
                'name': 'CIBO house',
                'location': {
                  'city': 'Hyderabad',
                  'country': 'India',
                  'latitude': 17.447921767825,
                  'longitude': 78.378773631325,
                  'street': 'Upper Ground Floor, Phoenix Towers(opp Trident Hotel), Hitech City',
                  'zip': '500081'
                },
                'id': '1559853417565818'
              },
              'start_time': '2017-02-22T11:00:00+0530',
              'id': '274112776335614',
              'rsvp_status': 'unsure'
            },
            {
              'description': 'The Airtel Hyderabad Marathon today might have become synonymous with many things which are Hyderabadi. It owes the current status to the vision, passion and hard work of the members of Hyderabad Runners, the team that had introduced this mammoth racing extravaganza to the city of Hyderabad.',
              'name': 'Airtel Hyderabad Marathon 2016 (AHM2016)',
              'place': {
                'name': 'People\'s Plaza',
                'location': {
                  'city': 'Hyderabad',
                  'country': 'India',
                  'latitude': 17.41874123048,
                  'located_in': '604984032888236',
                  'longitude': 78.465579917537
                },
                'id': '104056433031313'
              },
              'start_time': '2016-08-28T05:00:00+0530',
              'id': '219710881732011',
              'rsvp_status': 'attending'
            },
            {
              'description': 'Milind Soman and all Pinkathon ambassadors in a fun promotional run on the 13th of Feb in Malaysian Township.',
              'name': 'SBI Pinkathon Hyderabad 2016: Run With Milind',
              'place': {
                'name': 'Malaysian Township',
                'location': {
                  'city': 'Hyderabad',
                  'country': 'India',
                  'latitude': 17.478311654283,
                  'longitude': 78.391992168566,
                  'street': 'Kukatpalli',
                  'zip': '500072'
                },
                'id': '167570363274944'
              },
              'start_time': '2016-02-13T06:00:00+0530',
              'id': '973860932701690',
              'rsvp_status': 'unsure'
            },
            {
              'description': 'SKY FEST - CARNIVAL, SHOPPING and FOOD ARENA ',
              'end_time': '2015-12-27T23:00:00+0530',
              'name': 'SKYFEST 2015',
              'place': {
                'name': 'Gachibowli Stadium',
                'location': {
                  'city': 'Hyderabad',
                  'country': 'India',
                  'latitude': 17.446502280303,
                  'longitude': 78.34529904811,
                  'street': 'Old Mumbai Rd, Gachibowli, Hyderabad, Andhra Pradesh 500032',
                  'zip': '500032'
                },
                'id': '343504762369331'
              },
              'start_time': '2015-12-23T10:00:00+0530',
              'id': '1028985443830552',
              'rsvp_status': 'unsure'
            },
            {
              'description': 'After 10 years of togetherness, Ashish and Apurva are getting married now.  We invite you all to shower your blessings and love on us.',
              'name': 'Wedding Ceremony',
              'place': {
                'name': 'Rajshri Tandon Guest House, Allahabad, UP'
              },
              'start_time': '2015-12-14T19:00:00+0530',
              'id': '331421773695012',
              'rsvp_status': 'attending'
            },
            {
              'description': 'We are back to hit the streets of Hyderabad for the 4th successive year with the PUMA Urban Stampede. ',
              'name': 'PUMA Urban Stampede Powered by Jabong Hyderabad',
              'place': {
                'name': 'Runners For Life',
                'location': {
                  'city': 'Bangalore',
                  'country': 'India',
                  'latitude': 46.7515416,
                  'longitude': 23.55570438,
                  'street': '#6 & 13, KR Colony, Domlur Layout',
                  'zip': '560071'
                },
                'id': '321307937635'
              },
              'start_time': '2015-10-04T06:00:00+0530',
              'id': '817290395031301',
              'rsvp_status': 'attending'
            },
            {
              'description': 'Hello All,',
              'name': 'Digital Telangana - Digital 5K RUN',
              'place': {
                'name': 'Hyderabad'
              },
              'start_time': '2015-07-05T06:30:00+0530',
              'id': '1599948893626677',
              'rsvp_status': 'attending'
            },
            {
              'description': 'Because Public Roads should be just that - Public.', 
              'end_time': '2015-07-05T09:30:00+0530',
              'name': 'Digital Raahgiri Day , Hyderabad -Week #25 - July 5, 2015 ( Silver Jubilee)',
              'place': {
                'name': 'Raheja IT Park,Mindspace,Hitec City,Hyderabad',
                'location': {
                  'city': 'Hyderabad',
                  'country': 'India',
                  'latitude': 17.441814123763,
                  'longitude': 78.381186212758,
                  'street': 'Hitec City',
                  'zip': '500081'
                },
                'id': '125990237496948'
              },
              'start_time': '2015-07-05T06:00:00+0530',
              'id': '384756085060534',
              'rsvp_status': 'attending'
            },      
            {
              'description': 'Honest Steps, a walk across India, led by Proud Indians, will start from Kanyakumari on December 18, 2011, at 8 am. This over 5,000 kms walk will reach New Delhi around April-end 2012.',
              'end_time': '2012-04-18T18:00:00-0700',
              'name': 'Honest Steps: A Walk from Kanyakumari to New Delhi',
              'start_time': '2011-12-18T08:00:00-0800',
              'id': '862203060514269',
              'rsvp_status': 'attending'
            },
            {
              'end_time': '2011-09-12T21:00:00+0530',
              'name': 'birthday treat',
              'start_time': '2011-09-12T18:00:00+0530',
              'id': '793229600784856',
              'rsvp_status': 'attending'
            }
          ],
          'paging': {
            'cursors': {
              'before': 'QVFIUm13Rjg0NEpLcEQ4M0ZA0RlRObXA1LXFNRFJpS3dOekxWa0Q5dFBCZAHFIa1ctTEtCeUNHalhEWk5naGFmRG0xSkExRmlpcEpaNTBzZAnpOcWZAZAZAG1nVERB',
              'after': 'QVFIUkVyUkJ4YzBmX011eEJYdktQaFlHUUlHalQ5c3hFOGhmVENCQ3VhUEhUclRubGFlaTUxODI3aWFBeGRZAb002cG5LSEFkMzhnMWFKWndJelpqdFV0cnBB'
            }
          }
        }
      }
    ;
  
  constructor(
    private facebook: Facebook,
    private facebookService: FacebookService,
    public jdaService: jdaService,
    private barcodeScanner: BarcodeScanner,
    public navCtrl: NavController) {
      var self = this;
      this.facebook.getLoginStatus().then(res => {
        if(res.status === "connect") {
          self.isLoggedIn = true;
        } else {
          self.isLoggedIn = false;
        }
      }).catch(e => console.log(e));
    }

    login(){
      var userName = 'naveen';
      var userPassword = 'naveen';
      this.jdaService.getLoginStatuss(userName, userPassword).subscribe(data=>{
        var d:any = data;
        if(d.userName == userName){
          this.isLoggedIn = true;
          var self = this;
          this.fbJsonData = this.json1;
          this.email = "newnvn@gmail.com";
          if(userName = 'naveen'){
            this.userName = 'Naveen';
            this.userImgUrl = 'assets/imgs/naveen.jpg';
          }else if(userName = 'priya'){
            this.userName = 'Priya';
            this.userImgUrl = 'assets/imgs/priya.jpg';
          }else{
            this.userName = 'Himanshi';
            this.userImgUrl = 'assets/imgs/himanshi.jpg';
          }
          this.jdaService.getHomePageDetails(this.fbJsonData, this.email).subscribe(data=>{
            var d:any= data;
            self.recommendationItems = d.recommendations;
            self.historyItems = d.historyItems;
            self.newArrivals = d.newArrivals; 
          });
        }else {
          this.isLoggedIn = false;
        }
      });
    }
  

  login_fb() {
    this.facebook.login(['public_profile', 'email', 'user_birthday', 'user_events']).then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.isFBLoggedIn = true;
          this.accessToken = res.authResponse.accessToken;
          var self = this;
          this.getUserDetails(res.authResponse.userID);
          this.facebookService.getUserData(this.accessToken).subscribe(resonse => {
            this.email = this.userData.email;
            self.fbJsonData = resonse;
            self.jdaService.getHomePageDetails(this.fbJsonData, this.userData.email).subscribe(data=>{
              var d:any= data;
              self.recommendationItems = d.recommendations;
              self.historyItems = d.historyItems;
              self.newArrivals = d.newArrivals; 
            });
          });
        } else {
          this.isLoggedIn = false;
        }
      }).catch(e => console.log('Error logging into Facebook', e));
  }

  logout() {
    if(this.isFBLoggedIn){
      this.facebook.logout().then(res => this.isLoggedIn = false).catch(e => console.log('Error logout from Facebook', e));
    }else{
      this.isLoggedIn = false;
    }
  }

  getUserDetails(userId: string){
    this.facebook.api("/"+ userId +"/?fields=id,email,first_name,picture,gender,birthday",["public_profile"]).then(res => {
      this.userData = res;
    });
  }

  showItem(barcodeId){
    this.navCtrl.push("ItemPricePage", {"barcodeId": barcodeId, 'email': this.email , 'fbJsonData': this.fbJsonData});
  }

  scan() {
    var self = this;
    this.barcodeScanner.scan().then(barcodeData=>{
      self.navCtrl.push("ItemPricePage", {"barcodeId": barcodeData.text, "email": this.email, 'fbJsonData': this.fbJsonData});
    }).catch(e => 
      console.log(e));
  }
}