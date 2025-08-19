const students =[
  {
    "name": "Thanesh Gurru Guhan.B",
    "dob": "2009-07-13",
    "address": "1st cross street, Jeyam Nagar, Theni-625531",
    "blood_group": "A1+",
    "phone": "9865395532",
    "image": "pimg.jpg",
    "department": "PYTHON"
  },
  {
    "name": "Vedesh K",
    "dob": "2011-09-19",
    "address": "KMC Mahatma nagar, Pc patti, Theni",
    "blood_group": "B-ve",
    "phone": "9385300702",
    "image": "https://drive.google.com/open?id=13da7HPcboL3BwBIwPeF_gDVGehPSEKkR",
    "department": "WEB DEVELOPMENT"
  },
  {
    "name": "LOGESH . M",
    "dob": "2005-05-15",
    "address": "24 B/10 W-4, Malaiyammal puram, Cumbum 625516, Theni",
    "blood_group": "AB+",
    "phone": "6382612264",
    "image": "https://drive.google.com/open?id=1L56cahkk7ZgZqtAwnQsBCKVl7qECDjwc",
    "department": "WEB DEVELOPMENT"
  },
  {
    "name": "P.Mahesh kumar",
    "dob": "2008-09-28",
    "address": "G.A.M. sethu complex, Subban street, Theni",
    "blood_group": "O",
    "phone": "9952535935",
    "image": "https://drive.google.com/open?id=1u7FLoJ-G47dZ9eXKBx_WBZ1t2Sq9MWah",
    "department": "COA"
  },
  {
    "name": "MONIKA.A",
    "dob": "2006-11-14",
    "address": "D.no155, w-5, East Street, Anaimalayanpatty, 625526, Uthamapalayam (tlk), Theni (dts)",
    "blood_group": "O+",
    "phone": "6380339337",
    "image": "https://drive.google.com/open?id=1YLqQBxIsjD2t4kq_nsoi6np6C9Cta8Qa",
    "department": "WEB DEVELOPMENT"
  },
  {
    "name": "BALAJI M",
    "dob": "2008-06-11",
    "address": "Govindanagaram, West Street",
    "blood_group": "A+",
    "phone": "9025693500",
    "image": "https://drive.google.com/open?id=1v41Blap14BJ2ecvXalbvzNrvWUbA-3Gg",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "Shasmitha Shri.M",
    "dob": "2010-05-11",
    "address": "3/27, School street, Srirengapuram (po), Veerapandi (via), Theni-625534",
    "blood_group": "O+",
    "phone": "8681963394",
    "image": "https://drive.google.com/open?id=1qQs8aQHtsj6dGyYtfIF49yRgaWShA5-2",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "Dhiya. D",
    "dob": "2012-09-16",
    "address": "Theni",
    "blood_group": "A+",
    "phone": "9342850882",
    "image": "https://drive.google.com/open?id=1mrMub7nSz43pH2N9jtTMZNg5Pbpr-Ono",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "SARANRAJ P",
    "dob": "2004-04-17",
    "address": "152, Sathirapatti road, Aranmanaiputhur, Theni",
    "blood_group": "B+",
    "phone": "8637433241",
    "image": "https://drive.google.com/open?id=1uEAKaARgVebdqI6A4SYmcgccqheM3Dav",
    "department": "WEB DESIGINING"
  },
  {
    "name": "N.MOHANA VARSHAN",
    "dob": "2008-08-31",
    "address": "Forest road, 3rd Street, Theni",
    "blood_group": "A1B+",
    "phone": "9342946521",
    "image": "https://drive.google.com/open?id=1SSNoVBfXn5uQlR-YWApqH6QCUtADyOSJ",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "T.NAGASANTHOSH",
    "dob": "2009-03-26",
    "address": "Forest road 3rd Street, Theni.",
    "blood_group": "O+",
    "phone": "8903362948",
    "image": "https://drive.google.com/open?id=1CR07yk9SWXUDIB_cF-31SLusTN0qLgUe",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "M.Sanjay Prabhahar",
    "dob": "2009-07-15",
    "address": "MK Nagar, Cosmos Club road, Near B2C supermarket, Rathinam nagar, Theni",
    "blood_group": "B+",
    "phone": "9092005550",
    "image": "https://drive.google.com/open?id=1G7S44o-xSPhhe9cmW3oteXNvcy7VYHe1",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "Venkatesh. G",
    "dob": "2008-05-22",
    "address": "West street, Govindanagaram, Theni",
    "blood_group": "O+",
    "phone": "9514391077",
    "image": "https://drive.google.com/open?id=1fxT98MpLgkqsqclOTa7V5NOyAF3D4_R6",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "SACHIN K",
    "dob": "2008-07-31",
    "address": "Govindanagaram, Pillayar Kovil Street",
    "blood_group": "O",
    "phone": "8610747811",
    "image": "https://drive.google.com/open?id=1eJ7-msO3Gk5olfTJsMt1w2kbTF8mul0d",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "M.Priyadharshini",
    "dob": "2001-10-14",
    "address": "Subburaj nagar, 3rd Street, Bodinayakanur",
    "blood_group": "B+",
    "phone": "6382931400",
    "image": "https://drive.google.com/open?id=15R_gyUc4oXwi9E3dGcszuP3jzq4r047l",
    "department": "WEB DEVELOPMENT"
  },
  {
    "name": "Pavithra.T",
    "dob": "2007-11-05",
    "address": "162 B/A, Suban streets, Theni",
    "blood_group": "A1+",
    "phone": "8760803916",
    "image": "https://drive.google.com/open?id=1m5nmMP6vi_2tbe79kTu5OTGb6tO6OQzb",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "R.himesh",
    "dob": "2007-09-08",
    "address": "V.kalam street, Govindanagaram",
    "blood_group": "A+",
    "phone": "7708183287",
    "image": "https://drive.google.com/open?id=1VoQj-pIi0Tum0AZ_6NXCVjaciqLnrlbb",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "R. Shanjeeth bavan",
    "dob": "2008-07-23",
    "address": "Lakshminagar, P.C.Patti, Theni",
    "blood_group": "O+",
    "phone": "9597829019",
    "image": "https://drive.google.com/open?id=1KVnDLs9U9IXax-NsnM3aCBu_I9PIMgat",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "Preetha.M",
    "dob": "2008-05-22",
    "address": "162/A, Suban streets, Theni",
    "blood_group": "O+",
    "phone": "9894818548",
    "image": "https://drive.google.com/open?id=1omaW937PJD5G8vrWd9GR91yx8r4ZGRWj",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "S.PRASIDYA DHARSHINI",
    "dob": "2008-03-05",
    "address": "37/3 White house 1st Street, A1 biriyani kadai Street near, N R R nagar, Theni",
    "blood_group": "A+",
    "phone": "9597894870",
    "image": "https://drive.google.com/open?id=1j1OLFwmZv4R2b_tcieEWnLg9YyNGbll8",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "Varshini S",
    "dob": "2007-06-14",
    "address": "Kaliamman Kovil Street, Ambasamuthiram",
    "blood_group": "A+",
    "phone": "9342048076",
    "image": "https://drive.google.com/open?id=1jxFtG9ckUaQq2POTwotfyz1Z17NTg5a2",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "Partha sarathi",
    "dob": "2008-09-22",
    "address": "Jangal patti, Theni",
    "blood_group": "A1+",
    "phone": "6382354793",
    "image": "https://drive.google.com/open?id=1rsL8w7eXMRaH2KGA9BuTiFOTAXVwcFfa",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "K.Kanishka",
    "dob": "2007-10-04",
    "address": "Teacher Avenue, Pc Patti",
    "blood_group": "B+",
    "phone": "8778683371",
    "image": "https://drive.google.com/open?id=1AtcFp2Txj7qVlWcDroBRv-g-YnB6NesV",
    "department": "COA"
  },
  {
    "name": "Manoj D",
    "dob": "2009-10-14",
    "address": "32 A, Sadayal Patti, Uppokottai Post, Theni",
    "blood_group": "B+",
    "phone": "8778438758",
    "image": "https://drive.google.com/open?id=1x505MKubJGaI6M087aQ5P97hSkb0gzMX",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "M.DivyaDharshini",
    "dob": "2009-02-16",
    "address": "Sarguruswamy Nagar, M.Subbulapuram",
    "blood_group": "A+",
    "phone": "9597984745",
    "image": "https://drive.google.com/open?id=1nDPhkG-joa98Fvv9AZzg8QBjJ1sy7Ctr",
    "department": "WEB DESIGNING"
  },
  {
    "name": "Akshaya.G",
    "dob": "2007-09-20",
    "address": "Nagalapuram East Street, Theni",
    "blood_group": "B+",
    "phone": "6382315424",
    "image": "https://drive.google.com/open?id=1dvWtmwztM0UCjEyY-VbxYRy1Z3ElrKIK",
    "department": "JUNIOR TECHIE"
  },
  {
    "name": "DINESH M",
    "dob": "2000-06-24",
    "address": "17/11, Subbu Muthalia Street, Bodinayakanur, Theni District - 625513",
    "blood_group": "O+",
    "phone": "8220881924",
    "image": "https://drive.google.com/open?id=1w88Atq_oiOQMk5F_I10XxS2jIlccl-SR",
    "department": "WEB DEVELOPMENT"
  },
  {
    "name": "POOVISHA M",
    "dob": "2008-05-25",
    "address": "W4 -B8/22, First Cross Street, Rathinam Nagar, Theni",
    "blood_group": "B+",
    "phone": "9488552644",
    "image": "https://drive.google.com/open?id=1rpOVTYIX2kpNm35ZGrwwsWQfoyaUu5nf",
    "department": "TALLY"
  },
  {
    "name": "Yashita. A",
    "dob": "2007-05-05",
    "address": "33/A, Lakshmi Nivas, Pankajam House Street, Theni-625531",
    "blood_group": "B+",
    "phone": "8825847779",
    "image": "https://drive.google.com/open?id=10zzE4S8JXoGrRjjiZz9pkpE9qp9myk20",
    "department": ""
  },
  {
    "name": "Kamalnath R",
    "dob": "2006-07-25",
    "address": "22/B Nehruji Road, Radha Pawn Broker, Bommaiya Gowndan Patti, Allinagaram, Theni",
    "blood_group": "B+ve",
    "phone": "7305200245",
    "image": "https://drive.google.com/open?id=1O6MT6C7n3o9B_hJBkYTQvQN0FgxvsS0b",
    "department": ""
  },
  {
    "name": "G.Vibhash",
    "dob": "2009-12-30",
    "address": "Theni Varusanadu main road, Thangammalpuram village, South street",
    "blood_group": "AB+",
    "phone": "9943564412",
    "image": "https://drive.google.com/open?id=1IvjERc3ynktOvUV0S9W1bivTbzSt0p9R"
  },
  {
    "name": "ABISHEK KUMAR A",
    "dob": "2005-12-22",
    "address": "Raj Nagar, City Union Bank Near, Aundipatti, Theni-625512",
    "blood_group": "O+",
    "phone": "6380061077",
    "image": "https://drive.google.com/open?id=1e_LWFw7L2-HWim68M3p7gJtpBVil-2Va"
  },
  {
    "name": "SACHIN K",
    "dob": "2008-07-31",
    "address": "Govindanagaram Pillayar Kovil Street",
    "blood_group": "O+",
    "phone": "8610747811",
    "image": "https://drive.google.com/open?id=18EUm92pq3v2XcKNHeOGHhagKs8CKnftB"
  },
  {
    "name": "Sarathi P",
    "dob": "2004-09-08",
    "address": "Karupanapillai Street W-10",
    "blood_group": "AB+",
    "phone": "9360385348",
    "image": "https://drive.google.com/open?id=1Ij0ejUEzrygDYN4BjqlztEKsx4IBBvrL"
  },
  {
    "name": "Sai kiruthika. N",
    "dob": "2007-10-07",
    "address": "Vinaygar Kovil Street, Srirengapuram, Theni",
    "blood_group": "O+ve",
    "phone": "9787682709",
    "image": "https://drive.google.com/open?id=1hbKMzNZhPqEHMlqKX9-e0Fyzrh_p2cDr"
  },
  {
    "name": "Surendar S",
    "dob": "2000-06-27",
    "address": "22/Gov.hr.sec.school Street, Veerapandi",
    "blood_group": "B+ve",
    "phone": "7708103916",
    "image": "https://drive.google.com/open?id=1_hNyO_owSAs6lSux-oHpyxASCdh_UPqZ"
  },
  {
    "name": "Raghul P",
    "dob": "2007-10-12",
    "address": "Vedavalli compound, 1st 30 feet cross road, 2nd lane, Jeyamngar, Theni",
    "blood_group": "O+ve",
    "phone": "9566653264",
    "image": "https://drive.google.com/open?id=16WDqLEL2XS0qcwEVht34MLDlQMEYZtog"
  },
  {
    "name": "M.U.Yazhini",
    "dob": "1998-11-01",
    "address": "401/W1 Electronic city 1, Aranmanai Puthur, Theni",
    "blood_group": "B+",
    "phone": "8124476289",
    "image": "https://drive.google.com/open?id=18p39NtRrFtKFJuZIPDnL1UihLR5vyjqm"
  },
  {
    "name": "AKI AKSHAYA D",
    "dob": "2003-11-19",
    "address": "B.17 TamilNadu Housing Board, Kailasapatti, Periyakulam, Theni",
    "blood_group": "B+",
    "phone": "9487661596",
    "image": "https://drive.google.com/open?id=1aINT27TJEzFWSJNme48-amQ6cn2jM_DL"
  },
  {
    "name": "NANDHINI K",
    "dob": "2004-04-03",
    "address": "7/A, Varathappar Street, Poosari Lane, Vadagarai, Periyakulam",
    "blood_group": "B+ve",
    "phone": "6381373916",
    "image": "https://drive.google.com/open?id=1hNK4YwlK0vX02U2mMbTORxSwROviNy5D"
  },
  {
    "name": "G.KEERTHIKA",
    "dob": "2003-09-08",
    "address": "Kannimar Kovil Street, Vadugapatti",
    "blood_group": "O+ve",
    "phone": "9865830055",
    "image": "https://drive.google.com/open?id=19hDcdB2HTpPIP10dsMDSHG2_3A4j68Da"
  },
  {
    "name": "S.Abinayasri",
    "dob": "2002-10-25",
    "address": "West Street, Pulikuthi, Uthamapalayam (TK), Theni DT",
    "blood_group": "A+ve",
    "phone": "8270574910",
    "image": "https://drive.google.com/open?id=1iplgfKwITdON4KSEnpPHj8NWDKQ6lo2_"
  },
  {
    "name": "Prathiyathi M",
    "dob": "2003-05-28",
    "address": "159/C, South Street, Jallipatti",
    "blood_group": "O+ve",
    "phone": "7904961347",
    "image": "https://drive.google.com/open?id=1hrJ90fYb5cyMoUFo81BQN8hbZ2kQoWY7"
  },
  {
    "name": "Sarannath V",
    "dob": "2008-02-11",
    "address": "Kamarajapuram Main Road, Theni",
    "blood_group": "AB+",
    "phone": "9080504233",
    "image": "https://drive.google.com/open?id=1n84l3TQUrTqJzYfoJSALVFWfIITFsc_i"
  },
  {
    "name": "Gracy Julia.p",
    "dob": "2001-07-31",
    "address": "343/2W, West Street, T. Sindalacherry, Theni",
    "blood_group": "O+",
    "phone": "9360658554",
    "image": "https://drive.google.com/open?id=1QwOJuvAwBlWQJ-ZYdIlLRZgor4qJxRtd"
  },
  {
    "name": "Priyadharsini",
    "dob": "1991-04-01",
    "address": "Amman nagar 1st street, veerapandi, Theni",
    "blood_group": "O+ve",
    "phone": "6383387324",
    "image": "https://drive.google.com/open?id=11wFzJaY_OUbk_wlgjCmRO9r7wiAY-rSU",
    "department": "General"
  },
  {
    "name": "AANANDHA J",
    "dob": "2004-04-21",
    "address": "TAMILNADU, Theni, Theni to kuchannur main road, Kundalnayakkan patti.",
    "blood_group": "O+",
    "phone": "7810036663",
    "image": "https://drive.google.com/open?id=1dDI17DaeobGOKlILdwSoumiOeY9G_s_Z",
    "department": "General"
  },
  {
    "name": "Mariswaran R",
    "dob": "2005-01-30",
    "address": "16/18, subbu street, keelarajaveethi, Bodinayakanur",
    "blood_group": "B+",
    "phone": "6369976369",
    "image": "https://drive.google.com/open?id=1ClfxvPR47CiwSXiQU8c8CC35g6TFMJsL",
    "department": "General"
  },
  {
    "name": "Jeevan.J",
    "dob": "2008-01-10",
    "address": "158/B society street Koduvilarpatti Theni (DT)",
    "blood_group": "A1+",
    "phone": "9363671710",
    "image": "https://drive.google.com/open?id=1s_vS74crOgDiM46BNGtuz9Ob171dvOIL",
    "department": "Junior techie"
  },
  {
    "name": "Santhosh kumar.M",
    "dob": "2007-03-20",
    "address": "3-11 west street ambasamuthiram theni dt",
    "blood_group": "O+ve",
    "phone": "9342214326",
    "image": "https://drive.google.com/open?id=1PBTQn-hr4dKjpS0T98v9KEttmxtxB93m",
    "department": "Junior techie"
  },
  {
    "name": "Shanjana Shri.K",
    "dob": "2009-10-16",
    "address": "D/o R.Krishna kumar, 159, vetnery hospital street, Srirengapuram, Theni.",
    "blood_group": "A2-ve",
    "phone": "9942962389",
    "image": "https://drive.google.com/open?id=1YfPGQzSo3180bGuysQ-Juw94PN8GZ-bZ",
    "department": "Junior techie"
  },
  {
    "name": "SRINIVASAN M",
    "dob": "2002-07-02",
    "address": "68/D-1 post office odai 1st cross street",
    "blood_group": "A1+",
    "phone": "8825807481",
    "image": "https://drive.google.com/open?id=1JiV_4TFhjzc_iKTghjoQV1TEAgv7Xm__",
    "department": "Data analytiics"
  },
  {
    "name": "M. Athisubasri",
    "dob": "2005-03-19",
    "address": "Vayalpatti",
    "blood_group": "B+",
    "phone": "8838542119",
    "image": "https://drive.google.com/open?id=1QHdG-yKh-jXmmBtd2WaLs3U9yw5vGzww",
    "department": "Tally"
  },
  {
    "name": "Lincy S",
    "dob": "2000-03-10",
    "address": "237/Compost Yard St, Near Police Line, Theni.",
    "blood_group": "B+ve",
    "phone": "08870373336",
    "image": "https://drive.google.com/open?id=1LuKZ_TYGIkyOrLr3YiyRb9CKrGvVKlld",
    "department": "Data analytiics"
  },
  {
    "name": "Gobinath.B",
    "dob": "2005-06-10",
    "address": "1571,Stalin street",
    "blood_group": "A1+",
    "phone": "8300474649",
    "image": "https://drive.google.com/open?id=1w2HeWVL8RAzh5t9B9PxcRCzkTcuccKt0",
    "department": "General"
  },
  {
    "name": "Agalya M",
    "dob": "2005-05-24",
    "address": "13/1c, Ajmhan Khan Nagar, Ammakulam, Water tank backside, Bodinayakanur, Theni-625513",
    "blood_group": "B+ve",
    "phone": "6381744369",
    "image": "https://drive.google.com/open?id=1kXBkDxf-Z_jj06YeMoP6Ixhxlt7JPDcn",
    "department": "General"
  },
  {
    "name": "Anantha kumar. H",
    "dob": "2004-02-27",
    "address": "79/21, Bazzar Street, Allinagaram, Theni-625531",
    "blood_group": "A+",
    "phone": "6381501330",
    "image": "https://drive.google.com/open?id=1dxZtXB0DWkbwCJVPEuvLULjFO655n9ac",
    "department": "General"
  },
  {
    "name": "NARAIN RAM R M",
    "dob": "2005-08-20",
    "address": "41, New colony, Street No4, Bodinayakanur",
    "blood_group": "B+ve",
    "phone": "7395820153",
    "image": "https://drive.google.com/open?id=1XRHqUmfBOtdJsEhhu8vrYV6QcFbdyB7b",
    "department": "General"
  },
  {
    "name": "B. Jeyavarshan",
    "dob": "2007-11-06",
    "address": "Forest road 1st street",
    "blood_group": "A+",
    "phone": "9942857983",
    "image": "https://drive.google.com/open?id=1LOEAw7ehaTILIwp3mdBPytW35eGhjWKW",
    "department": "General"
  },
  {
    "name": "KABALEESWARAN K",
    "dob": "2002-05-17",
    "address": "11/1/89A Bathirakali Amman Kovil Street, Vadugapatti (PO), Periyakulam (TK), Theni (DT)",
    "blood_group": "O+ve",
    "phone": "9025415027",
    "image": "https://drive.google.com/open?id=1LEdaKU5gFS2Bp69LJyjTb_AwsA6RK9t9",
    "department": "General"
  },
  {
    "name": "S.H.JEYA SURYA",
    "dob": "2005-07-09",
    "address": "21/59 Kuttiya Pillai Street, Cumbum",
    "blood_group": "O+",
    "phone": "8825772722",
    "image": "https://drive.google.com/open?id=1nsb6XMLJe063vPT0yo16_4X7qrQnCEcp",
    "department": "General"
  },
  {
    "name": "Vigneshwar P",
    "dob": "2007-08-27",
    "address": "W1-281/73, Annanji Vilaku, NGO Colony, Theni - 625531",
    "blood_group": "AB+ve",
    "phone": "6379131591",
    "image": "https://drive.google.com/open?id=1Sa5RKfX3RkCaR6bj2oBmxVVeJqMASXa7",
    "department": "General"
  },
  {
    "name": "VISHNUPRASATH.J",
    "dob": "2008-08-06",
    "address": "235, W/1 Ganeshapuram, Ammapatti road, Gandamanur, Theni",
    "blood_group": "B+",
    "phone": "9345728283",
    "image": "https://drive.google.com/open?id=1ptW_dK11pQ73N3IRvSFXckYNA7EeZCpy",
    "department": "General"
  },
  {
    "name": "ANANDHA VARSHINI . K",
    "dob": "2006-11-11",
    "address": "20/29, Janvi Illam, NGO Colony, Thenkarai, Periyakulam, Theni",
    "blood_group": "B+ve",
    "phone": "9840442600",
    "image": "https://drive.google.com/open?id=1BTNe89wvNtsICE19em-UPsFP3MkHCX4u",
    "department": "General"
  },
  {
    "name": "Pandi Meena.M",
    "dob": "1990-09-05",
    "address": "V O C Street, Kutchanur",
    "blood_group": "B+ve",
    "phone": "6381367101",
    "image": "https://drive.google.com/open?id=1pxfPi8185_h-9KG1znr7R6K3EG_n4HsY",
    "department": "General"
  },
  {
    "name": "M Femina",
    "dob": "2004-06-11",
    "address": "25, Subramaniya Aasari Street, Thenkarai, Periyakulam",
    "blood_group": "B+ve",
    "phone": "9629889444",
    "image": "https://drive.google.com/open?id=1RKVSUXU8EmBVCF0JhUO771qzjvMzfent",
    "department": "General"
  },
  {
    "name": "M. Abbas Mandiry",
    "dob": "2008-02-27",
    "address": "No.25, Subramanian Aasari Street, Thenkarai, Periyakulam",
    "blood_group": "B+ve",
    "phone": "7708064785",
    "image": "https://drive.google.com/open?id=1V3INmFlRh5OfHjFep7d4rEl8L72JLZC4",
    "department": "General"
  },
  {
    "name": "PRAVEENKUMAR P",
    "dob": "2003-04-05",
    "address": "616/3 Palpannai Street, Kadamalaikundu, Theni-625579",
    "blood_group": "O+",
    "phone": "8681809603",
    "image": "https://drive.google.com/open?id=1R6VOjWPQH2k3QQQ_Ppr-Z25EEoRd-vzq",
    "department": "General"
  },
  {
    "name": "M. DHAMODHARAN",
    "dob": "2008-05-18",
    "address": "13/6 West Street",
    "blood_group": "O+",
    "phone": "9092070956",
    "image": "https://drive.google.com/open?id=16SqVgJYpMhsbcuxlvYgEj9tYgATprre9",
    "department": "Spoken English"
  },
  {
    "name": "SANTHOSH P",
    "dob": "2007-06-10",
    "address": "124, Indra Colony Street, Koolayanur, Theni",
    "blood_group": "B+",
    "phone": "8668046979",
    "image": "https://drive.google.com/open?id=1YhjNeaAmviJpaJ3yz-DSm0RFluNANtG1",
    "department": "Summer Course"
  },
  {
    "name": "Mohamed Aslam N",
    "dob": "2005-03-05",
    "address": "Devadanapatti, Theni",
    "blood_group": "O+",
    "phone": "8428122164",
    "image": "https://drive.google.com/open?id=1FwslTqhIsi5SAULM04uSRdAcYA0RH45Q",
    "department": "Data Analytics"
  },
  {
    "name": "R. Vasavi",
    "dob": "2002-10-29",
    "address": "13-142 Otha Veedu, Aundipatti",
    "blood_group": "O+",
    "phone": "8374715082",
    "image": "https://drive.google.com/open?id=1fEdW_xe0erLpk73C3RUBAUFfjggjLNZl",
    "department": "Tally"
  },
  {
    "name": "M Vinotha",
    "dob": "2004-12-25",
    "address": "6/10, Pugaiyilai Arumugam Street, S.S.Puram, Bodinayakanur",
    "blood_group": "B+",
    "phone": "6369143770",
    "image": "https://drive.google.com/open?id=16qixXMk3OEXC__Zl6vwo-VyQIsYToTVa",
    "department": "Full Stack Development"
  },
  {
    "name": "Gayathridevi E",
    "dob": "2005-09-25",
    "address": "Kaliyamman Kovil Street, Silamalai, Bodinayakanur, Theni",
    "blood_group": "B+",
    "phone": "6381872158",
    "image": "https://drive.google.com/open?id=1DbBiSCkKHJZPxixrkLgrFu2JFP05ziYO",
    "department": "Python (Internship)"
  },
  {
    "name": "G. Pushpadharani",
    "dob": "2006-01-10",
    "address": "15W, Kandiyamman Kovil Street, Bodi-Meenatchipuram",
    "blood_group": "O+",
    "phone": "7540083672",
    "image": "https://drive.google.com/open?id=11tDo-BvGVAzNBxvzJdmvwQVla6kxCX8a",
    "department": "Python (Internship)"
  },
  {
    "name": "RAJAPANDI P",
    "dob": "2004-06-03",
    "address": "Pattalamman Kovil Street, Thenkarai, Periyakulam, Theni-625601",
    "blood_group": "B-",
    "phone": "9360410920",
    "image": "https://drive.google.com/open?id=11PwxEVRsIMxEnLs5LNt-sEBLcKZa8852",
    "department": "AI (Python)"
  },
  {
    "name": "M. Rachana",
    "dob": "2004-08-20",
    "address": "317/2, Society Bank Road, Saruthupatti, Lakshmipuram, Theni",
    "blood_group": "B+ve",
    "phone": "6382572667",
    "image": "https://drive.google.com/open?id=1cGlcgZn_VaOtmwM5ruONP5D3mhpEAJKC",
    "department": "Artificial Intelligence"
  },
  {
    "name": "Velchandrapraba",
    "dob": "2005-07-09",
    "address": "South Street, Devadhanapatti, Theni",
    "blood_group": "A+",
    "phone": "9360770725",
    "image": "https://drive.google.com/open?id=1tcYVkvoUuYQcJrEy5Fohmt6526tWHauE",
    "department": "AI (Python)"
  },
  {
    "name": "KATHIRAVAN M",
    "dob": "2003-04-09",
    "address": "33, Kaliyamman Kovil Street, Rasingapuram, Bodi, Theni, Tamil Nadu",
    "blood_group": "A+",
    "phone": "6374450526",
    "image": "https://drive.google.com/open?id=16NUnPowRwOhjesz6PWxG-djPW0YJwm0T",
    "department": "Front End Development"
  },
  {
    "name": "Jeya Vishnu S",
    "dob": "2006-03-21",
    "address": "5-2-1 Vaniyar Street, Vadugapatti, Periyakulam, Theni-625531",
    "blood_group": "B+",
    "phone": "8754731987",
    "image": "https://drive.google.com/open?id=1WkOAj7smS3WnMTM6yMosdAimvXqH2BEl",
    "department": "SAP (FICO)"
  },
  {
    "name": "Jones Prabhakaran I",
    "dob": "2006-03-22",
    "address": "371/W4 Mariyammal School Street, T. Bomminayakan Patti, Theni-625530",
    "blood_group": "A+",
    "phone": "9025505843",
    "image": "https://drive.google.com/open?id=1RH91QDYq2UkRUa_qRL4_KPvDa0w3-4TU",
    "department": "Data Science Internship"
  },
  {
    "name": "VIDHYA M",
    "dob": "2003-09-17",
    "address": "324/F, Compost Yard Street",
    "blood_group": "O+ve",
    "phone": "9943702345",
    "image": "https://drive.google.com/open?id=1wPiYKDVtmmXxAe3YI5r_e3bUI7UxSL5H",
    "department": "Full Stack Developer"
  },
  {
    "name": "Harini R",
    "dob": "2005-08-31",
    "address": "2/82 School Street, Srirengapuram, Theni",
    "blood_group": "O+ve",
    "phone": "6382588941",
    "image": "https://drive.google.com/open?id=1iqTdqVmT74xIgcIvbywjtxfwS5gNNtWR",
    "department": "Full Stack Development in Python"
  },
  {
    "name": "SIVAMEGA S",
    "dob": "2005-10-27",
    "address": "Govt Higher Secondary School Street, Veerapandi, Theni",
    "blood_group": "B+",
    "phone": "8608438961",
    "image": "https://drive.google.com/open?id=1kiyUDc5CiTIz1l6MkWCQfB-KBMUMeK9f",
    "department": "Full Stack Development"
  },
  {
    "name": "Margreat Mercy A",
    "dob": "2006-09-04",
    "address": "South Rise Mil Street, T. Sindalaicherry, Theni-625530",
    "blood_group": "B+",
    "phone": "6369882570",
    "image": "https://drive.google.com/open?id=1gWG5718vVfCH8jUtUI1cpOjFZ1aXZxi8",
    "department": "Data Science"
  },
  {
    "name": "B. RISVANA BANU",
    "dob": "1995-01-03",
    "address": "177 Subban Street, Ragavan Colony, Theni",
    "blood_group": "B+",
    "phone": "9514761281",
    "image": "https://drive.google.com/open?id=1QEZd901zJzu0bDj7tBKxOA0XC-BmMJ1u",
    "department": "AI Full Stack Developer"
  }
];

// Dynamically insert slides
const carousel = document.getElementById("testimonialCarousel");

students.forEach((student, index) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  if (index === 0) slide.classList.add("active"); // first one active

  slide.innerHTML = `
    <center><table class="alumni-card" width="50%" height="50%">
    <tr><td><img src="${student.image}" alt="${student.name}" width="70" height="70"/></td></tr>
    <tr><td><h3>${student.name}</h3></td></tr>
<tr><td><p class="alumni-blood">Date of Birth: ${student.dob}</p></td></tr>
<tr><td><p class="alumni-blood">Address: ${student.address}</p></td></tr>
<tr><td><p class="alumni-blood">Blood Group: ${student.blood_group}</p></td></tr>
<tr><td><p class="alumni-blood">Contact Number: ${student.phone}</p></td></tr>
<tr><td><p class="alumni-blood">Position: ${student.department}</p></td></tr>
</table></center>

  `;
  carousel.appendChild(slide);
});

// Carousel navigation
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});
