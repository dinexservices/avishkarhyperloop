export type TeamYearData = {
  [subsystem: string]: string[];
};

export type TeamHistory = {
  "2018-2019": TeamYearData;
  "2019-2020": TeamYearData;
  "2020-2021": TeamYearData;
  "2021-2022": TeamYearData;
  "2022-2023": TeamYearData;
  "2023-2024": TeamYearData;
};

const TEAM_HISTORY: TeamHistory = {
  "2018-2019": {
    "Team Lead": [
      "Ankit Kukadia",
      "Suyash Singh",
      "Vinit Sharma",
    ],
    "Group Lead": [
      "Avinash Kumar",
      "Denil Chawda",
      "Nitin Srikar Marcharla",
    ],
    "Braking": [
      "Yash Mahadik",
      "Ajinkya Pawar",
      "Anshul Kumar Singh",
      "Srinivasu Gollapudi",
    ],
    "Controls and Communications": [
      "Kalpesh Pawar",
      "Mansi Choudhary",
      "Parth S Shah",
    ],
    "Design": [
      "Aditya Ranade",
    ],
    "Propulsion": [
      "Anay Shembekar",
      "Abhisek Garg",
      "Manikandan L.P.",
    ],
    "Power Systems": [
      "Raviteja Chandu",
      "Aniket Kamthe",
      "Kishan Thakkar",
    ],
    "Structures": [
      "Rakshit Bhatt",
    ],
    "Suspension": [
      "Madhav",
      "Kaja Sai Manikanta",
    ],
    "Business": [
      "Pranit Mehta",
      "Anshuman Mehta",
      "Neel Balart",
    ],
  },

  "2019-2020": {
    "Team Lead": [
      "Aditya Ranade",
      "Kalpesh Pawar",
      "Pranit Mehta",
    ],
    "Braking": [
      "Bharat Bhavsar",
      "R Pranit",
      "Sourav Chandak",
    ],
    "Controls and Communications": [
      "Mansi Choudhary",
      "Neel Balar",
      "Pyneni Roopesh",
      "Ranjith R Tevnan",
      "Rutvik Baxi",
      "Srivenkat A",
    ],
    "Levitation": [
      "Anshul Kumar Singh",
      "Gaurav Vaidya",
      "Hari Sudhan P",
      "Saud Iqbal",
      "Sayan Mitra",
      "Sayli Mayna",
      "V S Shyam",
    ],
    "Power Systems": [
      "Kishan Thakkar",
      "Adhithyan",
      "Vignesh Kumar",
    ],
    "Propulsion": [
      "Manikandan L.P.",
      "Chinmay Raut",
      "Hitesh Pawar",
      "Nikhil Yelamarthy",
      "Parth S Shah",
      "Shivam Chakraborty",
      "Shivam Pranjale",
      "Shivangi Singh",
    ],
    "Structures & Aerodynamics": [
      "Kaja Sai Manikanta",
      "Hruthik V S",
      "Rohan Narayan",
      "Unman Nibandhe",
    ],
    "Suspension": [
      "Madhav",
      "Rishabh Shah",
      "Siddharth Dey",
    ],
    "Business": [
      "Anuj Khandalikar",
      "Ayush Chauhan",
      "Omesh Kandregula",
      "Rohit Survase",
    ],
  },

  "2020-2021": {
    "Team Lead": [
      "Kishan Thakkar",
      "Neel Balar",
    ],
    "Group Lead": [
      "Bharat Bhavsar",
      "Parth S Shah",
      "Pyneni Roopesh",
      "Saud Iqbal",
      "Siddharth Dey",
    ],
    "Braking": [
      "R Pranit",
      "Anshul Kumar Singh",
      "Sourav Chandak",
      "Amal Dev B S",
      "Deshpande Abhijeet Sureshrao",
      "Naimisha Sampath",
    ],
    "Controls and Communications": [
      "Srivenkat A",
      "M Jaswanth Kumar",
      "Nihal Gajjala",
      "Parth Mehta",
    ],
    "Levitation": [
      "TL Abishek",
      "Jayakar Reddy A",
      "Rohith Korukonda",
    ],
    "LIM": [
      "Nikhil Yelamarthy",
      "Shivaprasad U Hulyal",
      "Snehith M",
    ],
    "Inverter": [
      "Shivam Chakraborty",
      "Hari Krishna T",
      "Jeya Kumar",
    ],
    "Power Systems": [
      "Adhithyan",
      "Gawtam C R",
      "Uddhav R Surve",
    ],
    "Structures": [
      "Unman Nibandhe",
      "Abhishek Dhalpe",
      "Anurag Patil",
      "Rajaraman S",
      "Sri Rishitha Vemireddy",
      "Vasudeva Tushar Nilker",
      "Vibhor Jain",
    ],
    "Suspension": [
      "Sayan Dutta",
      "Rishabh Shah",
      "Bhukya Gopi Chand Naik",
      "C Anish",
    ],
    "Business": [
      "Omesh Kandregula",
      "Ashwin Dev",
      "Saksham Sharma",
      "Yash Gautam",
    ],
  },

  "2021-2022": {
    "Team Lead": [
      "Yash Gautam",
      "Bharat Bhavsar",
      "Vibhor Jain",
    ],
    "Group Lead": [
      "Anurag Patil",
      "Hari Krishna T",
      "Jayakar Reddy A",
      "R Pranit",
      "Saksham Sharma",
      "TL Abishek",
    ],
    "Aerodynamics": [
      "Abhijith J Kumar",
      "Balabhadra Venkata Naga Sai Laxmi Poojitha",
      "M Nikil",
      "Vaibhav Hiwale",
    ],
    "Braking": [
      "Hirthick Raam M N",
      "Reshma R",
      "Naimisha Sampath",
      "Arvinth S",
      "Kimparaju Siva Naga Trishul",
      "Vijai Suraj S R",
    ],
    "Business": [
      "Medha Kommajosyula",
      "Abhinav Ramesh",
      "Praniti Khurana",
      "Rethik Visweswar",
      "Shrid Suresh",
    ],
    "Chassis": [
      "Rajaraman S",
      "KV Ujwal",
      "Kallakuri Heramba Datta Sai Uday Krishna",
      "Neha Arora",
      "Sujay S",
    ],
    "Embedded Systems": [
      "Jawhar S",
      "Kushagra Agrawal",
      "M Jaswanth Kumar",
      "Nihal Gajjala",
      "Abdullah K",
      "Arihant Jain",
      "Devang Tiwari",
    ],
    "Levitation": [
      "Aadithya G S",
      "Siddharth Dey",
      "Abhyuday Annepu",
      "Putrevu Sai Satwik",
      "Raunak Prasant",
      "Sukeerth Ramkumar",
      "Yuvanandhan T",
    ],
    "Propulsion": [
      "Hareesh P Nair",
      "P Nikhil Ignatius",
      "Anjali Mallena",
      "Debojyoti Mazumdar",
    ],
    "Infrastructure": [
      "C Anish",
      "Ankit Bansal",
      "Lokesh Kabdal",
      "Siddhant Sagar Patole",
    ],
    "High Power Systems": [
      "Nikhil Yelamarthy",
      "Onkar Ganesh Bhakare",
      "Jeya Kumar",
      "Uddhav R. Surve",
      "T Hari Narayana",
      "Jahnavi Pande",
      "Satwik Komma",
      "Prakhar Agrawal",
      "Sneha Reddy Palreddy",
      "R S Harish Krishnan",
      "Sakthi Sundaram S",
    ],
    "Suspension": [
      "Abhishek Dhalpe",
      "Aishwarya Kumar",
      "Amar Bisoyee",
      "Jay Harish Shah",
      "Naman Jain",
    ],
  },

  "2022-2023": {
    "Heads": [
      "Medha Kommajosyula",
      "Shrid Suresh",
      "Siddhant Sagar Patole",
    ],
    "Business": [
      "Arpit Sarda",
      "Sarthak Warade",
      "Shreya Ramkumar",
      "Tammana Sriraj",
    ],
    "Electrical": [
      "Aadarsh Kalyaan S",
      "Aditya Mallick",
      "Ayman Akhter",
      "D.S.P.Vanditha",
      "Namaswi Chethana Parsa",
      "Pranav Singhal",
      "Raghav Subramanian",
      "Snehadeep Gayen",
      "Vaibhav Krishna G",
    ],
    "Infrastructure": [
      "Akram Hossain Middya (Subhead)",
      "Ankit Amin",
      "Gopalan S",
      "Krishnanunni U J",
      "Pranav Sakure",
      "Prateek Sharma",
      "Ramachandra Amarthi",
    ],
    "Levitation": [
      "Jay Gupta",
      "Karthik Shenoy",
      "Pranav Debbad",
      "Rudra Panch",
      "Sumanth R",
    ],
    "Mechanical": [
      "Jay Harish Shah (Subhead)",
      "Sujay S (Subhead)",
      "Akilesh G",
      "Arpit Garg",
      "GJ Raaghav Rakshan",
      "Prasanna Kumar K K",
      "Savadatti Siddhant Sanjay",
      "Vishwanatha Gangadharan S",
      "Vijai Suraj S R",
    ],
    "Thermal": [
      "Abhijith J Kumar (Subhead)",
      "Atharva Suhas Khandave",
      "G V Rama Jaswanth Voleti",
      "Raghuram BB",
      "Saketh S",
      "Advait Iyer",
      "Harshini R P",
      "M Nikil",
      "Vaidehi Bagaria",
    ],
  },

  "2023-2024": {
    "Heads": [
      "Pranav Singhal",
      "Prateek Sharma",
    ],
    "Business": [
      "Sarthak Warade (Subhead)",
      "Tammana Sriraj (Subhead)",
      "Abhinand Shaji",
      "Revan M",
      "Sagar Gupta",
    ],
    "Embedded Systems": [
      "Namaswi Chethana Parsa (Subhead)",
      "Raghav Subramanian (Subhead)",
      "Chinmay Kulkarni",
      "Mith R Jain",
      "Sahil Kumar Verma",
      "Sai Suddhir A B",
      "Shreyas S",
      "Udayan Gupta",
      "V Swaminath Pranav",
    ],
    "Infrastructure": [
      "Pranav Sakure (Subhead)",
      "B Anirudh sai ram",
      "Jujhar Singh Channa",
      "Prem Rajshekhar Mukkannavar",
      "Reddi Srujan",
      "Yashika Sahu",
    ],
    "Levitation": [
      "Jay Gupta (Subhead)",
      "Sumanth R (Subhead)",
      "Kashish Agrawal",
      "Shreyash Atram",
      "Shri Dharshan",
      "Tanisha Ray",
    ],
    "Mechanical": [
      "Vishwanatha Gangadharan S (Subhead)",
      "Harish S (Subhead)",
      "Abhisek Nath",
      "Dhyan G",
      "Kartik G Kombe",
      "M Pawan Kumar",
      "Madhan M",
      "Parikshit",
    ],
    "Thermal": [
      "Saketh S (Subhead)",
      "Harikrishnan K",
      "Peddi Harishteja",
      "R Sai Sankalp",
      "Sri Ram Prashanth",
      "S Madhupranavi",
    ],
    "Traction": [
      "Bandarupalli Venkatasiva Prathik",
      "Deepmoy Rudra Sarma",
      "Nandhini",
      "Shubhankit Tewari",
    ],
  },
};

export default TEAM_HISTORY;
