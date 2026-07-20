const CITIES = [
  // PASTE ALL YOUR PLACES HERE

/* ================= HERITAGE & HISTORIC ================= */

{
  name:'Agra',
  costPerDay:2500,
  sub:'Uttar Pradesh – City of the Taj Mahal',
  img:'https://images.unsplash.com/photo-1564507592333-c60657eea523',
  desc:'Located on the banks of the River Yamuna in Uttar Pradesh, Agra is home to the Taj Mahal and other Mughal monuments.',
  places:[
    'Taj Mahal',
    'Agra Fort',
    'Fatehpur Sikri',
    'Mehtab Bagh',
    'Itmad-ud-Daulah'
  ],
  best:'October to March',
  famous:'Mughal architecture and marble handicrafts.',
  food:'Petha, Mughlai cuisine, kebabs and biryani.',
  rail:['Agra Cantt (AGC)'],
  tips:[
    'Pre-book Taj Mahal tickets.',
    'Taj Mahal is closed on Fridays.',
    'Carry water during summer.'
  ],
  lat:27.1767,
  lng:78.0081
},

{
  name:'Jaipur',
  costPerDay:3000,
  sub:'Rajasthan – The Pink City',
  img:'https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?q=80&w=1600&auto=format&fit=crop',
  desc:'Jaipur is known for royal forts, palaces, and vibrant markets.',
  places:[
    'Amber Fort',
    'Hawa Mahal',
    'City Palace',
    'Jantar Mantar',
    'Nahargarh Fort'
  ],
  best:'October to March',
  famous:'Pink City architecture and bazaars.',
  food:'Dal Baati Churma, Ghewar and Laal Maas.',
  rail:['Jaipur Junction'],
  tips:[
    'Visit forts early morning.',
    'Wear comfortable shoes.',
    'Carry sunscreen.'
  ],
  lat:26.9124,
  lng:75.7873
},

{
  name:'Udaipur',
  costPerDay:3200,
  sub:'Rajasthan – City of Lakes',
  img:'https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?q=80&w=1600&auto=format&fit=crop',
  desc:'Udaipur is famous for scenic lakes, royal palaces, and romantic views.',
  places:[
    'City Palace',
    'Lake Pichola',
    'Jag Mandir',
    'Fateh Sagar Lake'
  ],
  best:'September to March',
  famous:'Lake views and royal heritage.',
  food:'Rajasthani thali and Dal Baati.',
  rail:['Udaipur City Railway Station'],
  tips:[
    'Take evening boat rides.',
    'Book hotels early in peak season.'
  ],
  lat:24.5854,
  lng:73.7125
},

{
  name:'Delhi',
  costPerDay:3500,
  sub:'Capital of India',
  img:'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop',
  desc:'Delhi blends ancient monuments with modern city life.',
  places:[
    'Red Fort',
    'Qutub Minar',
    'India Gate',
    'Lotus Temple'
  ],
  best:'October to March',
  famous:'Historic monuments and street food.',
  food:'Chole Bhature, Kebabs and Parathas.',
  rail:['New Delhi Railway Station'],
  tips:[
    'Use metro for transport.',
    'Avoid crowded places late at night.'
  ],
  lat:28.6139,
  lng:77.2090
},

{
  name:'Amritsar',
  costPerDay:2500,
  sub:'Punjab – Spiritual city of Sikhism',
  img:'https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?q=80&w=1600&auto=format&fit=crop',
  desc:'Amritsar is home to the Golden Temple and rich Punjabi culture.',
  places:[
    'Golden Temple',
    'Jallianwala Bagh',
    'Wagah Border'
  ],
  best:'October to March',
  famous:'Golden Temple and Punjabi cuisine.',
  food:'Amritsari Kulcha and Lassi.',
  rail:['Amritsar Junction'],
  tips:[
    'Cover your head inside Golden Temple.',
    'Reach Wagah Border early.'
  ],
  lat:31.6340,
  lng:74.8723
},

/* ================= BEACHES ================= */

{
  name:'Goa',
  costPerDay:3500,
  sub:'Beach Paradise',
  img:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop',
  desc:'Goa is India’s most famous beach destination.',
  places:[
    'Baga Beach',
    'Anjuna Beach',
    'Calangute Beach',
    'Fort Aguada'
  ],
  best:'November to February',
  famous:'Nightlife and beaches.',
  food:'Fish curry rice and Bebinca.',
  rail:['Madgaon Railway Station'],
  tips:[
    'Use sunscreen.',
    'Wear helmets while riding scooters.'
  ],
  lat:15.2993,
  lng:74.1240
},

{
  name:'Varkala',
  costPerDay:3000,
  sub:'Kerala – Cliffside beach town',
  img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  desc:'Varkala is famous for cliffs, beaches, yoga, and Ayurveda.',
  places:[
    'Varkala Cliff',
    'Papanasam Beach',
    'Janardanaswamy Temple'
  ],
  best:'October to March',
  famous:'Sunsets and Ayurveda retreats.',
  food:'Fresh seafood and Kerala meals.',
  rail:['Varkala Sivagiri Railway Station'],
  tips:[
    'Be careful near cliff edges.',
    'Carry mosquito repellent.'
  ],
  lat:8.7379,
  lng:76.7163
},

{
  name:'Pondicherry',
  costPerDay:2800,
  sub:'French Colonial Town',
  img:'https://images.unsplash.com/photo-1566303052303-b2d2a9f16f0a?q=80&w=1600&auto=format&fit=crop',
  desc:'Pondicherry combines French architecture with beachside calmness.',
  places:[
    'Promenade Beach',
    'Auroville',
    'French Quarter'
  ],
  best:'October to March',
  famous:'French cafes and spiritual retreats.',
  food:'French pastries and South Indian dishes.',
  rail:['Puducherry Railway Station'],
  tips:[
    'Rent cycles to explore.',
    'Maintain silence in Ashrams.'
  ],
  lat:11.9416,
  lng:79.8083
},

/* ================= HILL STATIONS ================= */

{
  name:'Shimla',
  costPerDay:2800,
  sub:'Himachal Pradesh – Queen of Hills',
  img:'https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?q=80&w=1600&auto=format&fit=crop',
  desc:'Shimla is known for colonial charm and mountain views.',
  places:[
    'Mall Road',
    'The Ridge',
    'Jakhoo Temple',
    'Kufri'
  ],
  best:'March to June',
  famous:'Toy train and snowfall.',
  food:'Siddu and Himachali cuisine.',
  rail:['Shimla Railway Station'],
  tips:[
    'Carry warm clothes.',
    'Book toy train tickets early.'
  ],
  lat:31.1048,
  lng:77.1734
},

{
  name:'Manali',
  costPerDay:3000,
  sub:'Adventure capital of Himachal',
  img:'https://images.unsplash.com/photo-1706696435436-200ba23cda35?q=80&w=1600&auto=format&fit=crop',
  desc:'Manali is famous for snow, adventure sports, and scenic valleys.',
  places:[
    'Solang Valley',
    'Rohtang Pass',
    'Old Manali',
    'Hadimba Temple'
  ],
  best:'October to February for snow',
  famous:'Paragliding and snowfall.',
  food:'Momos and Himachali food.',
  rail:['Chandigarh Railway Station'],
  tips:[
    'Carry woolens.',
    'Rohtang requires permits.'
  ],
  lat:32.2396,
  lng:77.1887
},

{
  name:'Darjeeling',
  costPerDay:2800,
  sub:'West Bengal – Tea Paradise',
  img:'https://images.unsplash.com/photo-1671711847762-b8308b444a42?q=80&w=1600&auto=format&fit=crop',
  desc:'Darjeeling is famous for tea gardens and Himalayan views.',
  places:[
    'Tiger Hill',
    'Tea Gardens',
    'Toy Train',
    'Peace Pagoda'
  ],
  best:'March to May',
  famous:'Darjeeling tea and Kanchenjunga views.',
  food:'Momos and Tibetan food.',
  rail:['New Jalpaiguri Railway Station'],
  tips:[
    'Visit Tiger Hill before sunrise.',
    'Carry jackets year-round.'
  ],
  lat:27.0360,
  lng:88.2627
},

/* ================= SOUTH INDIA ================= */

{
  name:'Mysore',
  costPerDay:2600,
  sub:'Karnataka – City of Palaces',
  img:'https://images.unsplash.com/photo-1659126574791-13313aa424bd?q=80&w=1600&auto=format&fit=crop',
  desc:'Mysore is famous for palaces, sandalwood, and Dasara celebrations.',
  places:[
    'Mysore Palace',
    'Chamundi Hills',
    'Brindavan Gardens'
  ],
  best:'October to March',
  famous:'Dasara festival and royal heritage.',
  food:'Mysore Pak and dosa.',
  rail:['Mysuru Junction'],
  tips:[
    'Visit palace illumination at night.',
    'Book hotels early during Dasara.'
  ],
  lat:12.2958,
  lng:76.6394
},

{
  name:'Hampi',
  costPerDay:2000,
  sub:'Karnataka – UNESCO Heritage Site',
  img:'https://images.unsplash.com/photo-1689946727963-be60e05fe278?q=80&w=1600&auto=format&fit=crop',
  desc:'Hampi is an ancient city filled with ruins and temples.',
  places:[
    'Virupaksha Temple',
    'Stone Chariot',
    'Lotus Mahal'
  ],
  best:'October to February',
  famous:'Ancient Vijayanagara ruins.',
  food:'South Indian meals and cafes.',
  rail:['Hospet Junction'],
  tips:[
    'Wear sturdy shoes.',
    'Carry water while exploring.'
  ],
  lat:15.3350,
  lng:76.4600
}

];

const destGrid = document.getElementById("destGrid");
const modal = document.getElementById("modal");

function renderCities(data){

  destGrid.innerHTML = "";

  data.forEach(city=>{

    destGrid.innerHTML += `
      <div class="dest-card">

        <div class="dest-image"
          style="background-image:url('${city.img}')">
        </div>

        <div class="dest-content">

          <h3 class="dest-title">${city.name}</h3>

          <p class="dest-sub">${city.sub}</p>

          <button class="btn"
            onclick="openModal('${city.name}')">
            Explore
          </button>

        </div>

      </div>
    `;
  });
}

renderCities(CITIES);

function openModal(name){

  const city = CITIES.find(c=>c.name===name);

  modal.classList.add("open");

  document.getElementById("mTitle").innerText = city.name;
  document.getElementById("mDesc").innerText = city.desc;
  document.getElementById("mFood").innerText = city.food;

  document.getElementById("mPlaces").innerHTML =
    city.places.map(p=>`<li>${p}</li>`).join("");

  document.getElementById("mTips").innerHTML =
    city.tips.map(t=>`<li>${t}</li>`).join("");

  // REAL 360 VR
  document.getElementById("vrContainer").innerHTML = `
    <a-scene embedded>

      <a-sky
        src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg">
      </a-sky>

      <a-camera position="0 1.6 0"></a-camera>

    </a-scene>
  `;
}

function closeModal(){
  modal.classList.remove("open");
}

document.getElementById("searchInput")
.addEventListener("input", e=>{

  const val = e.target.value.toLowerCase();

  const filtered = CITIES.filter(city=>
    city.name.toLowerCase().includes(val)
  );

  renderCities(filtered);
});