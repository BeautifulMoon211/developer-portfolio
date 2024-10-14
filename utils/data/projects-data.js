import yelp from '/public/image/yelp.jpg';
import redfin from '/public/image/redfin.jpg';
import onthemarket from '/public/image/onthemarket.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Yelp Scraping',
        description: "Web scraping tool used to record business addresses, phone numbers, website, supported area and other relevant information of companies from Yelp.com.",
        tools: ['Python', 'Playwright', 'Selenium', 'BeautifulSoup4', 'Markdown'],
        role: 'Data Scraper',
        code: '',
        demo: '',
        image: yelp,
    },
    {
        id: 2,
        name: 'Redfin Scraping',
        description: 'Web scraping tool used to get price, number of beds, number of baths, space, address, website link, and phone number - all attributes of real estates from Redfin.com',
        tools: ['Javascript', 'Requests', 'Scraper API', 'cheerio', 'Markdown'],
        role: 'Data Scraper',
        code: '',
        demo: '',
        image: redfin,
    },
    {
        id: 3,
        name: 'Redfin Scraping',
        description: 'Web scraping tool used to extract real estate information from OnTheMarket.com, a leading property portal in the United Kingdom.',
        tools: ['TypeScript', 'Requests', 'Scraper API', 'cheerio', 'Markdown'],
        code: '',
        role: 'Web Scraper',
        demo: '',
        image: onthemarket,
    }
];