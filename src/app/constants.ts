export const API_URL = "https://frontend-take-home-service.fetch.com";

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
  favorited?: boolean
};

export interface Location {
  zip_code: string
  latitude: number
  longitude: number
  city: string
  state: string
  county: string
};

export interface Coordinates {
  lat: number;
  lon: number;
};

export const exampleDogData: Dog[][] = [
  [{ "img": "https://frontend-take-home.fetch.com/dog-images/n02085620-Chihuahua/n02085620_11258.jpg", "name": "Jenifer", "age": 14, "breed": "Chihuahua", "zip_code": "11962", "id": "WHGFTIcBOvEgQ5OCx40W" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02085620-Chihuahua/n02085620_9399.jpg", "name": "Emiliano", "age": 14, "breed": "Chihuahua", "zip_code": "72650", "id": "5HGFTIcBOvEgQ5OCx40W" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02097658-silky_terrier/n02097658_7785.jpg", "name": "Hortense", "age": 14, "breed": "Silky Terrier", "zip_code": "23464", "id": "fnGFTIcBOvEgQ5OCx44X" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02097658-silky_terrier/n02097658_816.jpg", "name": "Emile", "age": 14, "breed": "Silky Terrier", "zip_code": "46978", "id": "hHGFTIcBOvEgQ5OCx44X" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02097658-silky_terrier/n02097658_9327.jpg", "name": "Ashly", "age": 14, "breed": "Silky Terrier", "zip_code": "99620", "id": "knGFTIcBOvEgQ5OCx44X" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02098105-soft-coated_wheaten_terrier/n02098105_1564.jpg", "name": "Narciso", "age": 14, "breed": "Soft-coated Wheaten Terrier", "zip_code": "00821", "id": "vXGFTIcBOvEgQ5OCx44Y" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087394-Rhodesian_ridgeback/n02087394_10683.jpg", "name": "Werner", "age": 14, "breed": "Rhodesian Ridgeback", "zip_code": "20714", "id": "gXGFTIcBOvEgQ5OCx5Ab" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087394-Rhodesian_ridgeback/n02087394_11174.jpg", "name": "Walter", "age": 14, "breed": "Rhodesian Ridgeback", "zip_code": "20434", "id": "h3GFTIcBOvEgQ5OCx5Ab" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087394-Rhodesian_ridgeback/n02087394_11710.jpg", "name": "Rosanna", "age": 14, "breed": "Rhodesian Ridgeback", "zip_code": "30345", "id": "jnGFTIcBOvEgQ5OCx5Ac" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087394-Rhodesian_ridgeback/n02087394_1722.jpg", "name": "Jermaine", "age": 14, "breed": "Rhodesian Ridgeback", "zip_code": "56580", "id": "l3GFTIcBOvEgQ5OCx5Ac" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087394-Rhodesian_ridgeback/n02087394_3048.jpg", "name": "Hardy", "age": 14, "breed": "Rhodesian Ridgeback", "zip_code": "46539", "id": "qHGFTIcBOvEgQ5OCx5Ac" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087394-Rhodesian_ridgeback/n02087394_7579.jpg", "name": "Reid", "age": 14, "breed": "Rhodesian Ridgeback", "zip_code": "74335", "id": "73GFTIcBOvEgQ5OCx5Ac" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02089973-English_foxhound/n02089973_1577.jpg", "name": "Bradly", "age": 14, "breed": "English Foxhound", "zip_code": "33139", "id": "23GFTIcBOvEgQ5OCx5Ed" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02089973-English_foxhound/n02089973_3480.jpg", "name": "Osbaldo", "age": 14, "breed": "English Foxhound", "zip_code": "28374", "id": "NHGFTIcBOvEgQ5OCx5Id" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02091244-Ibizan_hound/n02091244_2115.jpg", "name": "Eryn", "age": 14, "breed": "Ibizan Hound", "zip_code": "12143", "id": "hnGFTIcBOvEgQ5OCx5Id" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02091244-Ibizan_hound/n02091244_2760.jpg", "name": "Meta", "age": 14, "breed": "Ibizan Hound", "zip_code": "28784", "id": "nnGFTIcBOvEgQ5OCx5Id" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02097298-Scotch_terrier/n02097298_9471.jpg", "name": "Herminio", "age": 14, "breed": "Scotch Terrier", "zip_code": "43222", "id": "r3GFTIcBOvEgQ5OCx5Me" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02099267-flat-coated_retriever/n02099267_1451.jpg", "name": "Delfina", "age": 14, "breed": "Flat-coated Retriever", "zip_code": "46854", "id": "wHGFTIcBOvEgQ5OCx5Me" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02099267-flat-coated_retriever/n02099267_3240.jpg", "name": "Rosalinda", "age": 14, "breed": "Flat-coated Retriever", "zip_code": "87319", "id": "8nGFTIcBOvEgQ5OCx5Me" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_10219.jpg", "name": "Xavier", "age": 14, "breed": "Whippet", "zip_code": "96319", "id": "T3GFTIcBOvEgQ5OCx5Qe" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_15210.jpg", "name": "Marley", "age": 14, "breed": "Whippet", "zip_code": "74370", "id": "k3GFTIcBOvEgQ5OCx5Qe" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_15251.jpg", "name": "Stephon", "age": 14, "breed": "Whippet", "zip_code": "92225", "id": "lXGFTIcBOvEgQ5OCx5Qe" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_16062.jpg", "name": "Rodolfo", "age": 14, "breed": "Whippet", "zip_code": "92620", "id": "oXGFTIcBOvEgQ5OCx5Qe" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02091134-whippet/n02091134_16109.jpg", "name": "Turner", "age": 14, "breed": "Whippet", "zip_code": "63853", "id": "o3GFTIcBOvEgQ5OCx5Qe" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02090721-Irish_wolfhound/n02090721_1918.jpg", "name": "Bethel", "age": 14, "breed": "Irish Wolfhound", "zip_code": "94591", "id": "7nGFTIcBOvEgQ5OCx5Uf" },
  ], [{ "img": "https://frontend-take-home.fetch.com/dog-images/n02090721-Irish_wolfhound/n02090721_195.jpg", "name": "Reva", "age": 14, "breed": "Irish Wolfhound", "zip_code": "86017", "id": "8XGFTIcBOvEgQ5OCx5Uf" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088632-bluetick/n02088632_152.jpg", "name": "Rosalind", "age": 14, "breed": "Bluetick", "zip_code": "31728", "id": "tHGFTIcBOvEgQ5OCx5Yf" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088632-bluetick/n02088632_1745.jpg", "name": "Eugenia", "age": 14, "breed": "Bluetick", "zip_code": "57353", "id": "vHGFTIcBOvEgQ5OCx5Yf" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088632-bluetick/n02088632_2764.jpg", "name": "Wilmer", "age": 14, "breed": "Bluetick", "zip_code": "92551", "id": "4XGFTIcBOvEgQ5OCx5Yf" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087046-toy_terrier/n02087046_2485.jpg", "name": "Rosa", "age": 14, "breed": "Toy Terrier", "zip_code": "44404", "id": "aHGFTIcBOvEgQ5OCx5cg" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087046-toy_terrier/n02087046_2843.jpg", "name": "Camila", "age": 14, "breed": "Toy Terrier", "zip_code": "95108", "id": "b3GFTIcBOvEgQ5OCx5cg" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087046-toy_terrier/n02087046_4135.jpg", "name": "Otho", "age": 14, "breed": "Toy Terrier", "zip_code": "95326", "id": "kHGFTIcBOvEgQ5OCx5cg" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087046-toy_terrier/n02087046_568.jpg", "name": "Brook", "age": 14, "breed": "Toy Terrier", "zip_code": "31310", "id": "v3GFTIcBOvEgQ5OCx5cg" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02087046-toy_terrier/n02087046_693.jpg", "name": "Brenda", "age": 14, "breed": "Toy Terrier", "zip_code": "12565", "id": "3HGFTIcBOvEgQ5OCx5cg" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02086646-Blenheim_spaniel/n02086646_2155.jpg", "name": "Mohammed", "age": 14, "breed": "Blenheim Spaniel", "zip_code": "76513", "id": "y3GFTIcBOvEgQ5OCx5gg" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088094-Afghan_hound/n02088094_2062.jpg", "name": "Tyshawn", "age": 14, "breed": "Afghan Hound", "zip_code": "98365", "id": "knGFTIcBOvEgQ5OCx5kh" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088094-Afghan_hound/n02088094_4497.jpg", "name": "Chance", "age": 14, "breed": "Afghan Hound", "zip_code": "91745", "id": "63GFTIcBOvEgQ5OCx5kh" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088094-Afghan_hound/n02088094_688.jpg", "name": "Heather", "age": 14, "breed": "Afghan Hound", "zip_code": "28555", "id": "G3GFTIcBOvEgQ5OCx5oh" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02086240-Shih-Tzu/n02086240_271.jpg", "name": "Mazie", "age": 14, "breed": "Shih-Tzu", "zip_code": "25989", "id": "fXGFTIcBOvEgQ5OCx5oh" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02086240-Shih-Tzu/n02086240_7209.jpg", "name": "Jamel", "age": 14, "breed": "Shih-Tzu", "zip_code": "20146", "id": "8HGFTIcBOvEgQ5OCx5oi" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02086240-Shih-Tzu/n02086240_8108.jpg", "name": "Chester", "age": 14, "breed": "Shih-Tzu", "zip_code": "46410", "id": "A3GFTIcBOvEgQ5OCx5si" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088466-bloodhound/n02088466_9695.jpg", "name": "Stefanie", "age": 14, "breed": "Bloodhound", "zip_code": "47356", "id": "yXGFTIcBOvEgQ5OCx5si" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02086910-papillon/n02086910_6373.jpg", "name": "Molly", "age": 14, "breed": "Papillon", "zip_code": "50606", "id": "T3GFTIcBOvEgQ5OCx5wi" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02098413-Lhasa/n02098413_11519.jpg", "name": "Walker", "age": 14, "breed": "Lhasa", "zip_code": "10913", "id": "m3GFTIcBOvEgQ5OCx5wi" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02098413-Lhasa/n02098413_1396.jpg", "name": "Lora", "age": 14, "breed": "Lhasa", "zip_code": "49263", "id": "pHGFTIcBOvEgQ5OCx5wi" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02098413-Lhasa/n02098413_6535.jpg", "name": "Zoe", "age": 14, "breed": "Lhasa", "zip_code": "40152", "id": "JXGFTIcBOvEgQ5OCx50j" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02096051-Airedale/n02096051_1799.jpg", "name": "Kenneth", "age": 14, "breed": "Airedale", "zip_code": "64847", "id": "ZHGFTIcBOvEgQ5OCx50j" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02096051-Airedale/n02096051_4902.jpg", "name": "Adalberto", "age": 14, "breed": "Airedale", "zip_code": "07513", "id": "rnGFTIcBOvEgQ5OCx50j" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02096051-Airedale/n02096051_5234.jpg", "name": "Buddy", "age": 14, "breed": "Airedale", "zip_code": "55910", "id": "t3GFTIcBOvEgQ5OCx50j" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02096051-Airedale/n02096051_6873.jpg", "name": "Abdul", "age": 14, "breed": "Airedale", "zip_code": "65540", "id": "23GFTIcBOvEgQ5OCx50j" },
  ], [{ "img": "https://frontend-take-home.fetch.com/dog-images/n02099429-curly-coated_retriever/n02099429_282.jpg", "name": "Kamille", "age": 14, "breed": "Curly-coated Retriever", "zip_code": "40982", "id": "aHGFTIcBOvEgQ5OCx54j" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02099429-curly-coated_retriever/n02099429_2839.jpg", "name": "Orpha", "age": 14, "breed": "Curly-coated Retriever", "zip_code": "23350", "id": "anGFTIcBOvEgQ5OCx54j" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02099429-curly-coated_retriever/n02099429_841.jpg", "name": "Garry", "age": 14, "breed": "Curly-coated Retriever", "zip_code": "25862", "id": "onGFTIcBOvEgQ5OCx54k" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088238-basset/n02088238_10102.jpg", "name": "Aurelie", "age": 14, "breed": "Basset", "zip_code": "49006", "id": "tnGFTIcBOvEgQ5OCx54k" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088238-basset/n02088238_4182.jpg", "name": "Reta", "age": 14, "breed": "Basset", "zip_code": "85615", "id": "DHGFTIcBOvEgQ5OCx58k" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088238-basset/n02088238_9751.jpg", "name": "Gage", "age": 14, "breed": "Basset", "zip_code": "14865", "id": "THGFTIcBOvEgQ5OCx58k" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02100583-vizsla/n02100583_2265.jpg", "name": "Watson", "age": 14, "breed": "Vizsla", "zip_code": "49237", "id": "TXGFTIcBOvEgQ5OCx6Ak" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_114.jpg", "name": "Aliza", "age": 14, "breed": "Gordon Setter", "zip_code": "29721", "id": "lnGFTIcBOvEgQ5OCx6Al" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_1660.jpg", "name": "Selena", "age": 14, "breed": "Gordon Setter", "zip_code": "77221", "id": "rHGFTIcBOvEgQ5OCx6Al" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_1918.jpg", "name": "Eloise", "age": 14, "breed": "Gordon Setter", "zip_code": "21620", "id": "tnGFTIcBOvEgQ5OCx6Al" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_3985.jpg", "name": "Mariano", "age": 14, "breed": "Gordon Setter", "zip_code": "19093", "id": "-XGFTIcBOvEgQ5OCx6Al" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02101006-Gordon_setter/n02101006_6069.jpg", "name": "Francis", "age": 14, "breed": "Gordon Setter", "zip_code": "81526", "id": "EHGFTIcBOvEgQ5OCx6El" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02102318-cocker_spaniel/n02102318_10058.jpg", "name": "Benjamin", "age": 14, "breed": "Cocker Spaniel", "zip_code": "80638", "id": "L3GFTIcBOvEgQ5OCx6El" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02102318-cocker_spaniel/n02102318_10218.jpg", "name": "Madonna", "age": 14, "breed": "Cocker Spaniel", "zip_code": "46296", "id": "NnGFTIcBOvEgQ5OCx6El" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02102318-cocker_spaniel/n02102318_11581.jpg", "name": "Joanie", "age": 14, "breed": "Cocker Spaniel", "zip_code": "59347", "id": "TnGFTIcBOvEgQ5OCx6El" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02102318-cocker_spaniel/n02102318_7059.jpg", "name": "Guido", "age": 14, "breed": "Cocker Spaniel", "zip_code": "63050", "id": "oXGFTIcBOvEgQ5OCx6El" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02102318-cocker_spaniel/n02102318_9753.jpg", "name": "Tristian", "age": 14, "breed": "Cocker Spaniel", "zip_code": "91301", "id": "x3GFTIcBOvEgQ5OCx6El" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02104365-schipperke/n02104365_2031.jpg", "name": "Noemi", "age": 14, "breed": "Schipperke", "zip_code": "22630", "id": "4nGFTIcBOvEgQ5OCx6El" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02104365-schipperke/n02104365_6489.jpg", "name": "Turner", "age": 14, "breed": "Schipperke", "zip_code": "21870", "id": "CHGFTIcBOvEgQ5OCx6Il" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02104365-schipperke/n02104365_7368.jpg", "name": "Easton", "age": 14, "breed": "Schipperke", "zip_code": "50452", "id": "I3GFTIcBOvEgQ5OCx6Il" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02104365-schipperke/n02104365_8769.jpg", "name": "Prudence", "age": 14, "breed": "Schipperke", "zip_code": "11738", "id": "SXGFTIcBOvEgQ5OCx6Il" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02085936-Maltese_dog/n02085936_4894.jpg", "name": "Laverna", "age": 14, "breed": "Maltese Dog", "zip_code": "10913", "id": "83GFTIcBOvEgQ5OCx6Im" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02085936-Maltese_dog/n02085936_8089.jpg", "name": "Kelvin", "age": 14, "breed": "Maltese Dog", "zip_code": "98114", "id": "PnGFTIcBOvEgQ5OCx6Mm" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02099849-Chesapeake_Bay_retriever/n02099849_1234.jpg", "name": "Kole", "age": 14, "breed": "Chesapeake Bay Retriever", "zip_code": "59018", "id": "aXGFTIcBOvEgQ5OCx6Mm" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02099849-Chesapeake_Bay_retriever/n02099849_1265.jpg", "name": "Urban", "age": 14, "breed": "Chesapeake Bay Retriever", "zip_code": "01238", "id": "anGFTIcBOvEgQ5OCx6Mm" },
  ], [{ "img": "https://frontend-take-home.fetch.com/dog-images/n02099849-Chesapeake_Bay_retriever/n02099849_1349.jpg", "name": "Shanel", "age": 14, "breed": "Chesapeake Bay Retriever", "zip_code": "36015", "id": "b3GFTIcBOvEgQ5OCx6Mm" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02099849-Chesapeake_Bay_retriever/n02099849_2133.jpg", "name": "Kenton", "age": 14, "breed": "Chesapeake Bay Retriever", "zip_code": "39439", "id": "i3GFTIcBOvEgQ5OCx6Mm" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02099849-Chesapeake_Bay_retriever/n02099849_3616.jpg", "name": "Elaina", "age": 14, "breed": "Chesapeake Bay Retriever", "zip_code": "63675", "id": "wnGFTIcBOvEgQ5OCx6Mm" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088364-beagle/n02088364_12920.jpg", "name": "Kurtis", "age": 14, "breed": "Beagle", "zip_code": "76085", "id": "M3GFTIcBOvEgQ5OCx6Qm" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088364-beagle/n02088364_16502.jpg", "name": "Judd", "age": 14, "breed": "Beagle", "zip_code": "52054", "id": "bHGFTIcBOvEgQ5OCx6Qn" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088364-beagle/n02088364_16519.jpg", "name": "Tiara", "age": 14, "breed": "Beagle", "zip_code": "16635", "id": "bnGFTIcBOvEgQ5OCx6Qn" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02088364-beagle/n02088364_5090.jpg", "name": "Kevin", "age": 14, "breed": "Beagle", "zip_code": "34758", "id": "pHGFTIcBOvEgQ5OCx6Qn" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02100236-German_short-haired_pointer/n02100236_3705.jpg", "name": "Maci", "age": 14, "breed": "German Short-haired Pointer", "zip_code": "15853", "id": "FnGFTIcBOvEgQ5OCx6Un" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02100236-German_short-haired_pointer/n02100236_5317.jpg", "name": "Albina", "age": 14, "breed": "German Short-haired Pointer", "zip_code": "37036", "id": "Q3GFTIcBOvEgQ5OCx6Un" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02100236-German_short-haired_pointer/n02100236_686.jpg", "name": "Adelle", "age": 14, "breed": "German Short-haired Pointer", "zip_code": "54975", "id": "WXGFTIcBOvEgQ5OCx6Un" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02105162-malinois/n02105162_2714.jpg", "name": "Savannah", "age": 14, "breed": "Malinois", "zip_code": "62930", "id": "eHGFTIcBOvEgQ5OCx6Un" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02105162-malinois/n02105162_2757.jpg", "name": "Ceasar", "age": 14, "breed": "Malinois", "zip_code": "43614", "id": "eXGFTIcBOvEgQ5OCx6Un" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02105162-malinois/n02105162_4120.jpg", "name": "Marian", "age": 14, "breed": "Malinois", "zip_code": "50432", "id": "hXGFTIcBOvEgQ5OCx6Un" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02105162-malinois/n02105162_5927.jpg", "name": "Jessy", "age": 14, "breed": "Malinois", "zip_code": "18216", "id": "sXGFTIcBOvEgQ5OCx6Un" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02105162-malinois/n02105162_9557.jpg", "name": "Margie", "age": 14, "breed": "Malinois", "zip_code": "78853", "id": "8XGFTIcBOvEgQ5OCx6Un" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02101388-Brittany_spaniel/n02101388_2064.jpg", "name": "Allison", "age": 14, "breed": "Brittany Spaniel", "zip_code": "74370", "id": "F3GFTIcBOvEgQ5OCx6Yn" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02101388-Brittany_spaniel/n02101388_2833.jpg", "name": "Gretchen", "age": 14, "breed": "Brittany Spaniel", "zip_code": "66761", "id": "KXGFTIcBOvEgQ5OCx6Yn" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02100735-English_setter/n02100735_7731.jpg", "name": "Lew", "age": 14, "breed": "English Setter", "zip_code": "71007", "id": "EXGFTIcBOvEgQ5OCx6co" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02102040-English_springer/n02102040_1487.jpg", "name": "Karli", "age": 14, "breed": "English Springer", "zip_code": "56262", "id": "RXGFTIcBOvEgQ5OCx6co" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02102040-English_springer/n02102040_539.jpg", "name": "Jaquan", "age": 14, "breed": "English Springer", "zip_code": "63868", "id": "kXGFTIcBOvEgQ5OCx6co" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02090379-redbone/n02090379_3734.jpg", "name": "Lina", "age": 14, "breed": "Redbone", "zip_code": "73159", "id": "GHGFTIcBOvEgQ5OCx6go" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02092339-Weimaraner/n02092339_7614.jpg", "name": "Alia", "age": 14, "breed": "Weimaraner", "zip_code": "20074", "id": "-HGFTIcBOvEgQ5OCx6gp" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02105056-groenendael/n02105056_3294.jpg", "name": "Gussie", "age": 14, "breed": "Groenendael", "zip_code": "99018", "id": "JXGFTIcBOvEgQ5OCx6kp" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02105505-komondor/n02105505_3721.jpg", "name": "Alexandra", "age": 14, "breed": "Komondor", "zip_code": "37771", "id": "73GFTIcBOvEgQ5OCx6kp" },
  { "img": "https://frontend-take-home.fetch.com/dog-images/n02105641-Old_English_sheepdog/n02105641_9320.jpg", "name": "Arielle", "age": 14, "breed": "Old English Sheepdog", "zip_code": "39354", "id": "1HGFTIcBOvEgQ5OCx6oq" }]]