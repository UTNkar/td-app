import {Dryck1,
        Foretag1,
        Foretag2,
        Kalas1,
        Kalas2,
        Kalas3,
        Mat1,
        Mynt1,
        Talt1,
        Talt2} from '../../texts/Gruppkoordinatorer.ts';

const GKs = [
    { firstName: Dryck1.firstName, lastName: Dryck1.lastName, url:require('./Dryck1.jpg'),  sort: 'Dryck', longsort: 'Dryckeskoordinator', key: '1', quote: Dryck1.quote},
    { firstName: Foretag1.firstName, lastName: Foretag1.lastName, url:require('./Företag1.jpg'), sort: 'Företag', longsort: 'Företagskoordinator', key: '2', quote: Foretag1.quote},
    { firstName: Foretag2.firstName, lastName: Foretag2.lastName, url:require('./Företag2.jpg'), sort: 'Företag', longsort: 'Företagskoordinator', key: '3', quote: Foretag2.quote},
    { firstName: Kalas1.firstName, lastName: Kalas1.lastName, url:require('./Kalas1.jpg'), sort: 'Kalas', longsort:'Kalaskoordinator', key: '4', quote: Kalas1.quote,},
    { firstName: Kalas2.firstName, lastName: Kalas2.lastName, url:require('./Kalas2.jpg'), sort: 'Kalas', longsort:'Kalaskoordinator', key: '5', quote: Kalas2.quote},
    { firstName: Kalas3.firstName, lastName: Kalas3.lastName, url:require('./Kalas3.jpg'), sort: 'Kalas', longsort:'Kalaskoordinator', key: '6', quote: Kalas3.quote,},
    { firstName: Mat1.firstName, lastName: Mat1.lastName, url:require('./Mat1.jpg'), sort: 'Mat', longsort:'Matkoordinator', key: '7', quote: Mat1.quote},
    { firstName: Mynt1.firstName, lastName: Mynt1.lastName, url:require('./Mynt1.jpg'), sort: 'Mynt', longsort:'Myntkoordinator', key: '8', quote: Mynt1.quote},
    { firstName: Talt1.firstName, lastName: Talt1.lastName, url:require('./Tält1.jpg'), sort: 'Tält', longsort:'Tältkoordinator', key: '9', quote: Talt1.quote},
    { firstName: Talt2.firstName, lastName: Talt2.lastName, url:require('./Tält2.jpg'), sort: 'Tält', longsort:'Tältkoordinator', key: '10', quote: Talt2.quote},
]

export default GKs
