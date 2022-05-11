'use-strict'

const lists = {}
// lists['animals'] = [];
// lists['elements'] = [];
// // lists['effects'] = [];
// lists['colors'] = [];

lists['animals'] = ["Unicorn", "Alligatoe", "Alpaca", "Ant", "Ape", "Armadillo", "Badger", "Bat", "Bear", "Beaver", "Bee", "Bettle", "Bird", "Bison", "Boar", "Buffalo", "Butterfly", "Camel", "Cat", "Caterpillar", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla", "Cobra", "Cockroach", "Cougar", "Cow", "Coyote", "Crab", "Cricket", "Crocodile", "Crow", 
"Deer", "Dinosaur", "Dog", "Dophin", "Dove", "Donkey", "Dragonfly", "Dragon", "Duck", "Eagle", "Eel", "Elephant", "Elk", "Emu", "Falcon", "Ferret", "Flamingo", "Fly", "Fox", "Frog", "Gazelle", "Gecko", "Giraffe", "Goat", "Goose", "Gorilla", "Grasshopper", "Guinea pig", "Hamster", "Hare", "Hawk", "Hedgehog", "Hippopotamus", "Hornet", "Horse", "Human", "Hummingbird", "Hyena", "Iguana", "Jaguar", "Jellyfish", "Kangaroo", "Koala", "Komodo Dragon", "Lemur", "Leopart", "Lion", "Lizard", "Llama", "Lobster", "Lynx", "Magpie", "Duck", "Mammoth", "Manatee", "Manta ray", "Marmot", "Meerkat", "Mole", "Monkey", "Moose", "Mosquito", "Mouse", "Narwhal", "Newt", "Nightingale", "Ocelot", "Octopus", "Orangutan", "Ostrich", "Otter", "Ox", "Owl", "Oyster", "Panther", "Parrot", "Panda", "Pelican", "Penguin", "Pig", "Pigeon", "Pika", "Polar bear", "Pony", "Porcupine", "Pug", "Quetzal", "Rabbut", "Raccoon", "Ram", "Raen", "Red panda", "Reindeet", "Rhea", "Rhinoceros", "Salamander", "Salmon", "Sardine", "Seahorse", "Seal", "Shark", "Sheep", "Skunk", "Sloth", "Snal", "Snake", "Spider", "Squid", "Squirrel", "Starfish", "Starling", "Swan", "Termite", "Tiger", "Toad", "Turkey", "Turtle", "Vicuña", "Viper", "Vulture", "Walrus", "Wasp", "Weasel", "Whale", "Wolf", "Wolverine", "Worm", "Zebra"];
lists['elements'] = ["Crystal", "Metal", "Stone", "", "Plasma", "Lighting", "Electricity", "Healing", "Poison", "Elixir", "Growth", "Soil", "Earth", "Time", "Vision", "Future", "Light", "Illumination", "Spirit", "Wind", "Hurricane", "Storm", "Shadow", "Darkness", "Nightmare", "Ice", "Frost", "Water", "Sound", "Echo", "Fear", "Fire", "Inferno", "Lava", "──", "Vox", "Fore", "Wood", "Air", "Thunder", "Life", "Death", "Chaos", "Order", "Spacetime", "Soul", "Mind", "Body", "Void", "Acid", "Ash", "Explosion", "Glass", "Gold", "Ink", "Magma", "Iron", "Paper", "Sand", "Snow", "Nature", "Space", "Love", "Plague", "Blood", "Convexity", "Psion", "?", "Cloud", "Smoke", "Dark", "Fog", "Clay", "Blast", "Debris", "Firework", "Flow", "Glitter", "Magic Abstract", "Magic Symbols", "Twirl", "Boil", "Scorch", "Blaze", "Magnet", "????", "Sotm", "Dust", "Yin", "Yang", "Yin-Yang", "Purity", "Elemental", "Corruption", "Emotions", "Civilization", "Logic", "Complementary", "Opposites", "Godly", "Sad", "hungry", "Angry", "Horny", "Negative", "Ice", "Arcane", "Positive", "Electric", "Ender", "Ocean", "Forest", "Terra", "Nether", "Flight", "Terrain", "Flora", "Foresight", "Psychometry", "Clairvoyance", "Telepaty", "Mind Reading", "Celestial", "Holy", "Demonic", "Oblivion", "Infinity", "Controversy", "Elder", "Eldritch"];
lists['colors'] = [
    {"name": "Absolute Zero", "hex": "#0048BA"}, {"name": "Acid green", "hex": "#B0BF1A"}, {"name": "Aero", "hex": "#7CB9E8"}, {"name": "Aero blue", "hex": "#C0E8D5"}, {"name": "African violet", "hex": "#B284BE"}, 
    {"name": "Air superiority blue", "hex": "#72A0C1"}, {"name": "Alabaster", "hex": "#EDEAE0"}, {"name": "Alizarin", "hex": "#DB2D43"}, {"name": "Alice blue", "hex": "#F0F8FF"}, {"name": "Alloy orange", "hex": "#C46210"}, {"name": "Almond", "hex": "#EFDECD"}, {"name": "Amaranth", "hex": "#E52B50"}, {"name": "Amaranth", "hex": "#9F2B68"}, {"name": "Amaranth pink", "hex": "#F19CBB"}, {"name": "Amaranth purple", "hex": "#AB274F"}, {"name": "Amaranth red", "hex": "#D3212D"}, {"name": "Amazon", "hex": "#3B7A57"}, {"name": "Amber", "hex": "#FFBF00"}, {"name": "Amber", "hex": "#FF7E00"}, {"name": "Amethyst", "hex": "#9966CC"}, {"name": "Android green", "hex": "#3DDC84"}, {"name": "Antique brass", "hex": "#CD9575"}, {"name": "Antique bronze", "hex": "#665D1E"}, 
    {"name": "Antique fuchsia", "hex": "#915C83"}, {"name": "Antique ruby", "hex": "#841B2D"}, {"name": "Antique white", "hex": "#FAEBD7"}, {"name": "Ao (English)", "hex": "#008000"}, {"name": "Apple green", "hex": "#8DB600"}, {"name": "Apricot", "hex": "#FBCEB1"}, {"name": "Aqua", "hex": "#00FFFF"}, {"name": "Aquamarine", "hex": "#7FFFD4"}, {"name": "Arctic lime", "hex": "#D0FF14"}, {"name": "Army green", "hex": "#4B5320"}, {"name": "Artichoke", "hex": "#8F9779"}, {"name": "Arylide yellow", "hex": "#E9D66B"}, {"name": "Ash gray", "hex": "#B2BEB5"}, {"name": "Asparagus", "hex": "#87A96B"}, {"name": "Astronaut", "hex": "#27346F"}, {"name": "Atomic tangerine", "hex": "#FF9966"}, {"name": "Auburn", "hex": "#A52A2A"}, {"name": "Aureolin", "hex": "#FDEE00"}, {"name": "Avocado", "hex": "#568203"}, {"name": "Azure", "hex": "#007FFF"}, {"name": "Azure (X11)", "hex": "#F0FFFF"}, {"name": "Baby blue", "hex": "#89CFF0"}, {"name": "Baby blue eyes", "hex": "#A1CAF1"}, {"name": "Baby pink", "hex": "#F4C2C2"}, {"name": "Baby powder", "hex": "#FEFEFA"}, {"name": "Baker-Miller pink", "hex": "#FF91AF"}, {"name": "Banana Mania", "hex": "#FAE7B5"}, {"name": "Barbie Pink", "hex": "#DA1884"}, {"name": "Barn red", "hex": "#7C0A02"}, {"name": "Battleship grey", "hex": "#848482"}, {"name": "Beau blue", "hex": "#BCD4E6"}, {"name": "Beaver", "hex": "#9F8170"}, {"name": "Beige", "hex": "#F5F5DC"}, {"name": "B'dazzled blue", "hex": "#2E5894"}, 
    {"name": "Big dip o’ruby", "hex": "#9C2542"}, {"name": "Bisque", "hex": "#FFE4C4"}, {"name": "Bistre", "hex": "#3D2B1F"}, {"name": "Bistre brown", "hex": "#967117"}, {"name": "Bitter lemon", "hex": "#CAE00D"}, {"name": "Bitter lime", "hex": "#BFFF00"}, {"name": "Bittersweet", "hex": "#FE6F5E"}, {"name": "Bittersweet shimmer", "hex": "#BF4F51"}, {"name": "Black", "hex": "#000000"}, {"name": "Black bean", "hex": "#3D0C02"}, {"name": "Black chocolate", "hex": "#1B1811"}, {"name": "Black coffee", "hex": "#3B2F2F"}, {"name": "Black coral", "hex": "#54626F"}, {"name": "Black olive", "hex": "#3B3C36"}, {"name": "Black Shadows", "hex": "#BFAFB2"}, {"name": "Blanched almond", "hex": "#FFEBCD"}, 
    {"name": "Blast-off bronze", "hex": "#A57164"}, {"name": "Bleu de France", "hex": "#318CE7"}, {"name": "Blizzard blue", "hex": "#ACE5EE"}, {"name": "Blond", "hex": "#FAF0BE"}, {"name": "Blood red", "hex": "#660000"}, {"name": "Blue", "hex": "#0000FF"}, {"name": "Blue (Crayola)", "hex": "#1F75FE"}, {"name": "Blue (Munsell)", "hex": "#0093AF"}, {"name": "Blue", "hex": "#0087BD"}, {"name": "Blue (Pantone)", "hex": "#0018A8"}, {"name": "Blue (pigment)", "hex": "#333399"}, {"name": "Blue (RYB)", "hex": "#0247FE"}, {"name": "Blue bell", "hex": "#A2A2D0"}, {"name": "Blue-gray", "hex": "#6699CC"}, {"name": "Blue-green", "hex": "#0D98BA"}, {"name": "Blue-green", "hex": "#064E40"}, {"name": "Blue jeans", "hex": "#5DADEC"}, 
    {"name": "Blue sapphire", "hex": "#126180"}, {"name": "Blue-violet", "hex": "#8A2BE2"}, {"name": "Blue-violet (Crayola)", "hex": "#7366BD"}, {"name": "Blue-violet (color wheel)", "hex": "#4D1A7F"}, {"name": "Blue yonder", "hex": "#5072A7"}, {"name": "Bluetiful", "hex": "#3C69E7"}, {"name": "Blush", "hex": "#DE5D83"}, {"name": "Bole", "hex": "#79443B"}, {"name": "Bone", "hex": "#E3DAC9"}, {"name": "Bottle green", "hex": "#006A4E"}, {"name": "Brandy", "hex": "#87413F"}, {"name": "Brick red", "hex": "#CB4154"}, {"name": "Bright green", "hex": "#66FF00"}, {"name": "Bright lilac", "hex": "#D891EF"}, {"name": "Bright maroon", "hex": "#C32148"}, {"name": "Bright navy blue", "hex": "#1974D2"}, {"name": "Bright yellow (Crayola)", "hex": "#FFAA1D"}, {"name": "Brilliant rose", "hex": "#FF55A3"}, {"name": "Brink pink", "hex": "#FB607F"}, 
    {"name": "British racing green", "hex": "#004225"}, {"name": "Bronze", "hex": "#CD7F32"}, 
    {"name": "Brown", "hex": "#88540B"}, {"name": "Brown sugar", "hex": "#AF6E4D"}, {"name": "Brunswick green", "hex": "#1B4D3E"}, {"name": "Bud green", "hex": "#7BB661"}, {"name": "Buff", "hex": "#FFC680"}, {"name": "Burgundy", "hex": "#800020"}, {"name": "Burlywood", "hex": "#DEB887"}, {"name": "Burnished brown", "hex": "#A17A74"}, {"name": "Burnt orange", "hex": "#CC5500"}, {"name": "Burnt sienna", "hex": "#E97451"}, {"name": "Burnt umber", "hex": "#8A3324"}, {"name": "Byzantine", "hex": "#BD33A4"}, {"name": "Byzantium", "hex": "#702963"}, {"name": "Cadet", "hex": "#536872"}, {"name": "Cadet blue", "hex": "#5F9EA0"}, {"name": "Cadet blue (Crayola)", "hex": "#A9B2C3"}, {"name": "Cadet grey", "hex": "#91A3B0"}, {"name": "Cadmium green", "hex": "#006B3C"}, {"name": "Cadmium orange", "hex": "#ED872D"}, {"name": "Cadmium red", "hex": "#E30022"}, {"name": "Cadmium yellow", "hex": "#FFF600"}, {"name": "Café au lait", "hex": "#A67B5B"}, {"name": "Café noir", "hex": "#4B3621"}, {"name": "Cambridge blue", "hex": "#A3C1AD"}, {"name": "Camel", "hex": "#C19A6B"}, {"name": "Cameo pink", "hex": "#EFBBCC"}, {"name": "Canary", "hex": "#FFFF99"}, {"name": "Canary yellow", "hex": "#FFEF00"}, {"name": "Candy apple red", "hex": "#FF0800"}, {"name": "Candy pink", "hex": "#E4717A"}, {"name": "Capri", "hex": "#00BFFF"}, {"name": "Caput mortuum", "hex": "#592720"}, {"name": "Cardinal", "hex": "#C41E3A"}, {"name": "Caribbean green", "hex": "#00CC99"}, 
    {"name": "Carmine", "hex": "#960018"}, {"name": "Carmine (M&P)", "hex": "#D70040"}, {"name": "Carnation pink", "hex": "#FFA6C9"}, {"name": "Carnelian", "hex": "#B31B1B"}, {"name": "Carolina blue", "hex": "#56A0D3"}, {"name": "Carrot orange", "hex": "#ED9121"}, {"name": "Castleton green", "hex": "#00563F"}, {"name": "Catawba", "hex": "#703642"}, {"name": "Cedar Chest", "hex": "#C95A49"}, 
    {"name": "Celadon", "hex": "#ACE1AF"}, {"name": "Celadon blue", "hex": "#007BA7"}, {"name": "Celadon green", "hex": "#2F847C"}, {"name": "Celeste", "hex": "#B2FFFF"}, {"name": "Celtic blue", "hex": "#246BCE"}, {"name": "Cerise", "hex": "#DE3163"}, {"name": "Cerulean", "hex": "#007BA7"}, 
    {"name": "Cerulean blue", "hex": "#2A52BE"}, {"name": "Cerulean frost", "hex": "#6D9BC3"}, {"name": "Cerulean (Crayola)", "hex": "#1DACD6"}, {"name": "CG blue", "hex": "#007AA5"}, {"name": "CG red", "hex": "#E03C31"}, {"name": "Champagne", "hex": "#F7E7CE"}, {"name": "Champagne pink", "hex": "#F1DDCF"}, {"name": "Charcoal", "hex": "#36454F"}, {"name": "Charleston green", "hex": "#232B2B"}, {"name": "Charm pink", "hex": "#E68FAC"}, {"name": "Chartreuse (traditional)", "hex": "#DFFF00"}, {"name": "Chartreuse", "hex": "#7FFF00"}, {"name": "Cherry blossom pink", "hex": "#FFB7C5"}, {"name": "Chestnut", "hex": "#954535"}, {"name": "Chili red", "hex": "#E23D28"}, {"name": "China pink", "hex": "#DE6FA1"}, {"name": "China rose", "hex": "#A8516E"}, 
    {"name": "Chinese red", "hex": "#AA381E"}, {"name": "Chinese violet", "hex": "#856088"}, {"name": "Chinese yellow", "hex": "#FFB200"}, {"name": "Chocolate (traditional)", "hex": "#7B3F00"}, {"name": "Chocolate", "hex": "#D2691E"}, {"name": "Chocolate Cosmos", "hex": "#58111A"}, {"name": "Chrome yellow", "hex": "#FFA700"}, {"name": "Cinereous", "hex": "#98817B"}, {"name": "Cinnabar", "hex": "#E34234"}, {"name": "Cinnamon Satin", "hex": "#CD607E"}, {"name": "Citrine", "hex": "#E4D00A"}, {"name": "Citron", "hex": "#9FA91F"}, {"name": "Claret", "hex": "#7F1734"}, {"name": "Cobalt blue", "hex": "#0047AB"}, {"name": "Cocoa brown", "hex": "#D2691E"}, {"name": "Coffee", "hex": "#6F4E37"}, {"name": "Columbia Blue", "hex": "#B9D9EB"}, {"name": "Congo pink", "hex": "#F88379"}, {"name": "Cool grey", "hex": "#8C92AC"}, {"name": "Copper", "hex": "#B87333"}, {"name": "Copper (Crayola)", "hex": "#DA8A67"}, {"name": "Copper penny", "hex": "#AD6F69"}, {"name": "Copper red", "hex": "#CB6D51"}, {"name": "Copper rose", "hex": "#996666"}, {"name": "Coquelicot", "hex": "#FF3800"}, {"name": "Coral", "hex": "#FF7F50"}, {"name": "Coral pink", "hex": "#F88379"}, {"name": "Cordovan", "hex": "#893F45"}, {"name": "Corn", "hex": "#FBEC5D"}, {"name": "Cornell red", "hex": "#B31B1B"}, {"name": "Cornflower blue", "hex": "#6495ED"}, 
    {"name": "Cornsilk", "hex": "#FFF8DC"}, {"name": "Cosmic cobalt", "hex": "#2E2D88"}, {"name": "Cosmic latte", "hex": "#FFF8E7"}, {"name": "Coyote brown", "hex": "#81613C"}, {"name": "Cotton candy", "hex": "#FFBCD9"}, 
    {"name": "Cream", "hex": "#FFFDD0"}, {"name": "Crimson", "hex": "#DC143C"}, 
    {"name": "Crimson (UA)", "hex": "#9E1B32"}, {"name": "Crystal", "hex": "#A7D8DE"}, {"name": "Cultured", "hex": "#F5F5F5"}, {"name": "Cyan", "hex": "#00FFFF"}, {"name": "Cyan (process)", "hex": "#00B7EB"}, {"name": "Cyber grape", "hex": "#58427C"}, {"name": "Cyber yellow", "hex": "#FFD300"}, {"name": "Cyclamen", "hex": "#F56FA1"}, {"name": "Dark blue-gray", "hex": "#666699"}, {"name": "Dark brown", "hex": "#654321"}, {"name": "Dark byzantium", "hex": "#5D3954"}, {"name": "Dark cornflower blue", "hex": "#26428B"}, {"name": "Dark cyan", "hex": "#008B8B"}, {"name": "Dark electric blue", "hex": "#536878"}, {"name": "Dark goldenrod", "hex": "#B8860B"}, {"name": "Dark green", "hex": "#013220"}, {"name": "Dark green (X11)", "hex": "#006400"}, {"name": "Dark jungle green", "hex": "#1A2421"}, 
    {"name": "Dark khaki", "hex": "#BDB76B"}, {"name": "Dark lava", "hex": "#483C32"}, 
    {"name": "Dark liver", "hex": "#534B4F"}, {"name": "Dark liver (horses)", "hex": "#543D37"}, {"name": "Dark magenta", "hex": "#8B008B"}, {"name": "Dark moss green", "hex": "#4A5D23"}, {"name": "Dark olive green", "hex": "#556B2F"}, {"name": "Dark orange", "hex": "#FF8C00"}, {"name": "Dark orchid", "hex": "#9932CC"}, {"name": "Dark pastel green", "hex": "#03C03C"}, {"name": "Dark purple", "hex": "#301934"}, {"name": "Dark red", "hex": "#8B0000"}, {"name": "Dark salmon", "hex": "#E9967A"}, {"name": "Dark sea green", "hex": "#8FBC8F"}, {"name": "Dark sienna", "hex": "#3C1414"}, {"name": "Dark sky blue", "hex": "#8CBED6"}, {"name": "Dark slate blue", "hex": "#483D8B"}, {"name": "Dark slate gray", "hex": "#2F4F4F"}, {"name": "Dark spring green", "hex": "#177245"}, {"name": "Dark turquoise", "hex": "#00CED1"}, {"name": "Dark violet", "hex": "#9400D3"}, {"name": "Dartmouth green", "hex": "#00703C"}, {"name": "Davy's grey", "hex": "#555555"}, {"name": "Deep cerise", "hex": "#DA3287"}, {"name": "Deep champagne", "hex": "#FAD6A5"}, {"name": "Deep chestnut", "hex": "#B94E48"}, {"name": "Deep jungle green", "hex": "#004B49"}, {"name": "Deep pink", "hex": "#FF1493"}, {"name": "Deep saffron", "hex": "#FF9933"}, {"name": "Deep sky blue", "hex": "#00BFFF"}, {"name": "Deep Space Sparkle", "hex": "#4A646C"}, {"name": "Deep taupe", "hex": "#7E5E60"}, {"name": "Denim", "hex": "#1560BD"}, {"name": "Denim blue", "hex": "#2243B6"}, 
    {"name": "Desert", "hex": "#C19A6B"}, {"name": "Desert sand", "hex": "#EDC9AF"}, {"name": "Dim gray", "hex": "#696969"}, {"name": "Dodger blue", "hex": "#1E90FF"}, {"name": "Dogwood rose", "hex": "#D71868"}, {"name": "Drab", "hex": "#967117"}, {"name": "Duke blue", "hex": "#00009C"}, {"name": "Dutch white", "hex": "#EFDFBB"}, {"name": "Earth yellow", "hex": "#E1A95F"}, {"name": "Ebony", "hex": "#555D50"}, 
    {"name": "Ecru", "hex": "#C2B280"}, {"name": "Eerie black", "hex": "#1B1B1B"}, {"name": "Eggplant", "hex": "#614051"}, {"name": "Eggshell", "hex": "#F0EAD6"}, {"name": "Egyptian blue", "hex": "#1034A6"}, {"name": "Eigengrau", "hex": "#16161D"}, {"name": "Electric blue", "hex": "#7DF9FF"}, 
    {"name": "Electric green", "hex": "#00FF00"}, {"name": "Electric indigo", "hex": "#6F00FF"}, {"name": "Electric lime", "hex": "#CCFF00"}, {"name": "Electric purple", "hex": "#BF00FF"}, {"name": "Electric violet", "hex": "#8F00FF"}, {"name": "Emerald", "hex": "#50C878"}, {"name": "Eminence", "hex": "#6C3082"}, {"name": "English green", "hex": "#1B4D3E"}, {"name": "English lavender", "hex": "#B48395"}, {"name": "English red", "hex": "#AB4B52"}, {"name": "English vermillion", "hex": "#CC474B"}, {"name": "English violet", "hex": "#563C5C"}, {"name": "Erin", "hex": "#00FF40"}, {"name": "Eton blue", "hex": "#96C8A2"}, {"name": "Fallow", "hex": "#C19A6B"}, {"name": "Falu red", "hex": "#801818"}, {"name": "Fandango", "hex": "#B53389"}, 
    {"name": "Fandango pink", "hex": "#DE5285"}, {"name": "Fashion fuchsia", "hex": "#F400A1"}, {"name": "Fawn", "hex": "#E5AA70"}, {"name": "Feijoa", "hex": "#9FD170"}, {"name": "Feldgrau", "hex": "#4D5D53"}, {"name": "Fern green", "hex": "#4F7942"}, {"name": "Field drab", "hex": "#6C541E"}, {"name": "Fiery rose", "hex": "#FF5470"}, {"name": "Finn", "hex": "#683068"}, {"name": "Firebrick", "hex": "#B22222"}, {"name": "Fire engine red", "hex": "#CE2029"}, {"name": "Fire opal", "hex": "#E95C4B"}, {"name": "Flame", "hex": "#E25822"}, {"name": "Flax", "hex": "#EEDC82"}, {"name": "Flirt", "hex": "#A2006D"}, {"name": "Floral white", "hex": "#FFFAF0"}, {"name": "Fluorescent blue", "hex": "#15F4EE"}, {"name": "Forest green (Crayola)", "hex": "#5FA777"}, {"name": "Forest green (traditional)", "hex": "#014421"}, {"name": "Forest green", "hex": "#228B22"}, {"name": "French beige", "hex": "#A67B5B"}, 
    {"name": "French bistre", "hex": "#856D4D"}, {"name": "French blue", "hex": "#0072BB"}, {"name": "French fuchsia", "hex": "#FD3F92"}, {"name": "French lilac", "hex": "#86608E"}, {"name": "French lime", "hex": "#9EFD38"}, {"name": "French mauve", "hex": "#D473D4"}, {"name": "French pink", "hex": "#FD6C9E"}, {"name": "French raspberry", "hex": "#C72C48"}, {"name": "French rose", "hex": "#F64A8A"}, {"name": "French sky blue", "hex": "#77B5FE"}, {"name": "French violet", "hex": "#8806CE"}, {"name": "Frostbite", "hex": "#E936A7"}, {"name": "Fuchsia", "hex": "#FF00FF"}, {"name": "Fuchsia (Crayola)", "hex": "#C154C1"}, {"name": "Fuchsia purple", "hex": "#CC397B"}, {"name": "Fuchsia rose", "hex": "#C74375"}, {"name": "Fulvous", "hex": "#E48400"}
];

function getA(type, id) {
    let res = lists[type][id];
    return res;
}

function DesignCreature() {
    // let animalCount = Math.floor(Math.random() * 3 + 1);
    // let elementCount = Math.floor(Math.random() * 2 + 1);
    // let colorCount = Math.floor(Math.random() * 2 + 1);
    let animalCount = 1;
    let elementCount = 1;
    let colorCount = 1;

    let animal_id = Math.floor(Math.random() * lists['animals'].length);
    let element_id = Math.floor(Math.random() * lists['elements'].length);
    let color_id = Math.floor(Math.random() * lists['colors'].length);

    let animalWords = [];
    let elementWords = [];
    let colorWords = [];
    let colorUse = [];

    for (let i = 0; i < animalCount; i++) {animalWords.push(getA('animals', animal_id));}
    for (let i = 0; i < elementCount; i++) {elementWords.push(getA('elements', element_id));}
    for (let i = 0; i < colorCount; i++) {
        let clr = getA('colors', color_id);
        colorWords.push(clr['name']);
        colorUse.push(clr['hex']);
    }
    let creature = {}
    creature['animal'] = {"count":animalCount,"animals":animalWords}
    creature['element'] = {"count":elementCount,"elements":elementWords}
    creature['color'] = {"count":colorCount,"colors":colorWords,"hex":colorUse}
    // console.log(creature);
    return creature;
}

function DisplayCreature() {
    let display = document.getElementById('display');
    let creature = DesignCreature();
    console.log(creature)
    console.log(creature['animal']['animals']);
    console.log(creature['element']['elements']);
    console.log(creature['color']['colors']);
    console.log(creature['color']['hex']);

    let val_animal = creature['animal']['animals'][0];
    let val_element = creature['element']['elements'][0];
    let val_color = creature['color']['colors'][0];
    let val_hex = creature['color']['hex'][0];
    
    let dis = `
    <div class="creature-card" style="--hex: ${val_hex};">
        <div class="color">${val_color}</div>
        <div class="element">${val_element}</div>
        <div class="animal">${val_animal}</div>
    </div>
    `;
    display.innerHTML = dis;
}



window.addEventListener('load', (ev) => {
    console.log(`Welcome to my Lab!`);
    DesignCreature();
    DisplayCreature();
});