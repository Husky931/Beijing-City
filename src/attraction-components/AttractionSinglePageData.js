import beihai1 from '../images/beihai-1.jpeg';
import beihai2 from '../images/beihai-2.jpg';
import beihai3 from '../images/beihai-3.jpeg';
import beihai4 from '../images/beihai-4.jpeg';
import forbidden1 from '../images/forbidden-city-1.jpeg';
import forbidden2 from '../images/forbidden-city-2.jpg';
import forbidden3 from '../images/forbidden-city-3.jpg';
import forbidden4 from '../images/forbidden-city-4.jpg';
import greatwall1 from '../images/great-wall-1.jpeg';
import greatwall2 from '../images/great-wall-2.jpg';
import greatwall3 from '../images/great-wall-3.jpg';
import greatwall4 from '../images/great-wall-4.jpg';
import houhai1 from '../images/houhai-1.jpg';
import houhai2 from '../images/houhai-2.jpg';
import houhai3 from '../images/houhai-3.jpg';
import houhai4 from '../images/houhai-4.jpg';
import lamatemple1 from '../images/lama-temple-1.jpg';
import lamatemple2 from '../images/lama-temple-2.jpg';
import lamatemple3 from '../images/lama-temple-3.jpeg';
import lamatemple4 from '../images/lama-temple-4.jpg';
import summerpalace1 from '../images/summer-palace-1.jpeg';
import summerpalace2 from '../images/summer-palace-2.JPG';
import summerpalace3 from '../images/summer-palace-3.jpg';
import summerpalace4 from '../images/summer-palace-4.jpg';
import templeheaven1 from '../images/temple-heaven-1.jpg';
import templeheaven2 from '../images/temple-heaven-2.jpg';
import templeheaven3 from '../images/temple-heaven-3.jpg';
import templeheaven4 from '../images/temple-heaven-4.jpg';
import tianmensquare1 from '../images/tianmen-square-1.jpg';
import tianmensquare2 from '../images/tianmen-square-2.jpg';
import tianmensquare3 from '../images/tianmen-square-3.jpg';
import tianmensquare4 from '../images/tianmen-square-4.jpg';

export default [
    {
        id:'lama-temple',
        rating: '4125',
        title: 'Lama Temple (Yonghegong)',
        text: `A series of beautiful pavilions comprise this Mongolian-Tibetan yellow-sect temple, which features an impressive fifty-four-foot high Buddha carved from one piece of Tibetan sandalwood.`,
        open: false,
        suggestedDuration: '1-2 hours',
        address: 'No.12 Yonghegong Street, Beixinqiao',
        images: [lamatemple1, lamatemple2,lamatemple3,lamatemple4] 
    },
    {
        id:'forbidden-city',
        rating: '3122',
        title: 'Forbidden City-The Palace Museum',
        text: `Consisting of more than 9,000 rooms and spread over 250 acres, this huge palace complex was built in the 15th century and later extensively renovated and restored during the Qing Dynasty in the 18th century`,
        open: false,
        suggestedDuration: '2-3 hours',
        address: 'No.4 Jingshanqian Street, Dongcheng District',
        images: [forbidden1, forbidden2,forbidden3,forbidden4] 
    },
    {
        id:'great-wall',
        rating: '9873',
        title: 'Mutianyu Great Wall',
        text: `In 1368 AD, Mutianyu Great Wall was built by Xu Da who is the main general for Zhuyuanzhang in the Great Wall ruins of Northern Qi Dynasty.`,
        open: true,
        suggestedDuration: 'more than 3 hours',
        address: 'Mutianyu Village, Bohai Town, Huairou District',
        images: [greatwall1, greatwall2,greatwall3,greatwall4] 
    },
    {
        id:'hou-hai',
        rating: '1291',
        title: 'Back Lakes (Hou Hai)',
        text: `This area of Beijing contains some of the most extensive old hutong neighborhoods and the three lakes of Xihai, Houhai and Oianhai.`,
        open: true,
        suggestedDuration: '1-2 hours',
        address: 'No.12 Yonghegong Street, Beixinqiao',
        images: [houhai1, houhai2,houhai3, houhai4] 
    },
    {
        id:'bei-hai',
        rating: '432',
        title: 'Beihai Park (Beihai Gongyuan)',
        text: `Kubla Khan in 1260 took up residence in this palace, which today is a 168-acre park filled with historic buildings, restaurants and a lake.`,
        open: true,
        suggestedDuration: 'less than 1 hour',
        address: 'No.1 Wenjin Street, Xicheng District',
        images: [beihai1, beihai2,beihai3,beihai4] 
    },
    {
        id:'summer-palace',
        rating: '8788',
        title: 'Summer Palace (Yiheyuan)',
        text: `The Summer Palace is the summer resort for the Qing dynasty's royal family.It is covered 3/4 with the water,the rest are hills and palaces.The Long corridor is the longest corridor in the world.`,
        open: true,
        suggestedDuration: 'more than 3 hours',
        address: 'No.19 Xinjian Gongmen Road, Haidian District',
        images: [summerpalace1, summerpalace2,summerpalace3,summerpalace4] 
    },
    {
        id:'temple-heaven',
        rating: '6723',
        title: 'Temple of Heaven',
        text: `Built in 1420 with a total area of 270 acres, this is the largest building for religious worship in China, which was originally used by the Ming and Qing emperors to pay homage to Heaven and to pray for a year of rich harvest.`,
        open: false,
        suggestedDuration: '1-2 hours',
        address: 'Tiantan Road, Dongcheng District',
        images: [templeheaven1, templeheaven2,templeheaven3,templeheaven4] 
    },
    {
        id:'tianmen-square',
        rating: '9112',
        title: 'Tiananmen Square',
        text: `Located in the heart of modern China and the site for massive parades and rallies, this was the site when in 1949, from a rostrum on the Gate of Heavenly Peace, Chairman Mao announced the establishment of the People's Republic of China.`,
        open: true,
        suggestedDuration: '1-2 hours',
        address: 'West Changan Street, Dongcheng District',
        images: [tianmensquare1, tianmensquare2,tianmensquare3,tianmensquare4] 
    },

]
