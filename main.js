const text = [
    `Chia kogi aesthetic subway tile paleo cornhole, kitsch twee direct trade kickstarter four dollar toast polaroid listicle forage cray. Pickled affogato unicorn wolf, viral leggings iceland cred whatever. Poke tbh normcore poutine vaporware tumeric same street art unicorn banjo jean shorts meh fingerstache. Fam drinking vinegar hammock trust fund mumblecore, godard craft beer adaptogen live-edge la croix JOMO cornhole tote bag pabst. Vibecession asymmetrical raw denim gochujang squid, direct trade keffiyeh brunch shaman literally poke kickstarter selvage. Hoodie XOXO DIY small batch ethical.`,
    `Occupy kombucha drinking vinegar live-edge. Viral four loko enamel pin, mlkshk pickled distillery adaptogen unicorn air plant. Vexillologist edison bulb raclette JOMO raw denim godard woke sus wayfarers poke. Flexitarian bicycle rights chambray farm-to-table try-hard kogi pabst. Drinking vinegar irony brunch gastropub vape echo park distillery tacos chambray 3 wolf moon.`,
    `La croix tousled meggings try-hard thundercats. Edison bulb 90's mustache hammock. Put a bird on it messenger bag deep v franzen, dreamcatcher gatekeep pour-over lomo chillwave aesthetic green juice raclette heirloom raw denim. Trust fund umami sus quinoa austin. Photo booth raclette tofu occupy craft beer hammock. Occupy sustainable crucifix iceland chambray offal, wolf chia YOLO ennui.`,
    `Direct trade next level gluten-free irony shoreditch PBR&B listicle mixtape sus selfies pok pok. Trust fund edison bulb irony, pour-over 8-bit bruh church-key. Letterpress health goth banjo, four loko literally kale chips wayfarers normcore +1. Fixie fam tilde tofu cronut.`,
    `Cornhole vape everyday carry seitan. Gentrify retro forage literally quinoa pickled. Meggings pitchfork knausgaard, cold-pressed direct trade heirloom vegan. Woke microdosing 8-bit affogato readymade celiac marfa drinking vinegar hoodie.`,
    `La croix gochujang bushwick, hashtag intelligentsia street art fanny pack affogato cray. Brooklyn marfa mukbang occupy, kogi cronut gentrify waistcoat. Ramps praxis PBR&B, kitsch portland vibecession man braid art party tonx XOXO blue bottle offal kinfolk jean shorts you probably haven't heard of them. Ugh brunch mustache tousled street art forage selvage lyft disrupt slow-carb green juice polaroid. Salvia put a bird on it succulents, literally microdosing tofu fanny pack sriracha wayfarers messenger bag edison bulb.`,
    `XOXO man braid fam yes plz, scenester marfa freegan dreamcatcher etsy tumblr austin poutine vaporware 90's. Hexagon chillwave hella, jean shorts chia tattooed unicorn freegan flexitarian truffaut taxidermy vaporware sus art party tilde. Vegan roof party green juice ramps farm-to-table quinoa sartorial sriracha. Roof party helvetica shabby chic forage offal. Green juice poke poutine blog kombucha marfa vice YOLO. Bicycle rights YOLO DIY meh mumblecore.`,
    `Chicharrones occupy prism, celiac single-origin coffee irony raw denim food truck next level poke actually everyday carry truffaut XOXO. Vegan bitters ethical succulents. Pour-over small batch heirloom, farm-to-table chambray live-edge whatever palo santo. Vape ennui bodega boys retro lomo JOMO tote bag gochujang viral XOXO shaman. Tumblr hella mustache church-key, four dollar toast taxidermy tacos master cleanse poutine bespoke selvage vinyl vaporware beard man braid. Trust fund locavore messenger bag flannel disrupt organic. Echo park chambray bicycle rights kinfolk craft beer.`,
    `Next level yr jean shorts sartorial bespoke flannel. Taiyaki slow-carb enamel pin, food truck man braid fashion axe hexagon echo park photo booth ramps jianbing dreamcatcher. Typewriter authentic humblebrag vinyl, four dollar toast flannel kale chips deep v YOLO tbh paleo ramps. Wolf sus sartorial, swag mlkshk keffiyeh quinoa. Kickstarter intelligentsia craft beer tote bag swag, ennui typewriter pug photo booth taxidermy everyday carry humblebrag messenger bag. Readymade 3 wolf moon truffaut vice organic umami shabby chic heirloom, shoreditch cornhole hella. Ethical austin synth pickled put a bird on it next level`,
    `Typewriter tote bag schlitz, try-hard keffiyeh +1 paleo put a bird on it mixtape waistcoat echo park gluten-free live-edge craft beer. Echo park kinfolk actually, bitters 90's meditation lyft migas meggings biodiesel pinterest. 90's schlitz portland enamel pin bitters adaptogen paleo banh mi tattooed glossier taiyaki synth. Hashtag readymade bitters kogi chia. Bushwick offal microdosing, yes plz tofu mlkshk Brooklyn wolf meggings helvetica glossier poutine celiac bitters vape.`
];

const form = document.querySelector('.lorem-form');
const numofpara = document.querySelector('#numofpara');
const numofparaRange = document.querySelector('#numofparaRange');
const result = document.querySelector('.lorem-text');

function syncParaNumbers(e){
    const value = e.target.value;
    numofpara.value = value;
    numofparaRange.value = value;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const value = parseInt(numofpara.value);
    let tempText = text.slice(0, value);
    tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
    result.innerHTML = tempText;
})


numofpara.addEventListener("input", syncParaNumbers);
numofparaRange.addEventListener("input", syncParaNumbers);