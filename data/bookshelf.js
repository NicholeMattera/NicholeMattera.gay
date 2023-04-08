import commonData from './common.json';

const data = {
    page: 'bookshelf',
    title: 'Nichole &quot;Nickel&quot; Mattera - Bookshelf',
    description: 'Books that Nichole has read and interested in',
    finished: [
        {
            completionDate: '2023-03-24',
            coverImage: '/images/book-covers/ace.webp',
            name: 'Ace: What Asexuality Reveals About Desire, Society, and the Meaning of Sex',
            author: 'Angela Chen',
            tags: ['loved', 'lgbt']
        },
        {
            completionDate: '2023-03-24',
            coverImage: '/images/book-covers/subtle-art-of-not-giving-a-f-ck.webp',
            name: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
            author: 'Mark Manson',
            tags: ['liked']
        },
        {
            completionDate: '2023-02-23',
            coverImage: '/images/book-covers/is-love-the-answer.webp',
            name: 'Is Love the Answer?',
            author: 'Uta Isaki',
            tags: ['loved', 'lgbt']
        },
        {
            completionDate: '2023-01-30',
            coverImage: '/images/book-covers/heartstopper-volume-1.webp',
            name: 'Heartstopper, Volume 1',
            author: 'Alice Oseman',
            tags: ['cute', 'lgbt']
        },
        {
            completionDate: '2023-01-18',
            coverImage: '/images/book-covers/lets-talk-about-love.webp',
            name: 'Let\'s Talk About Love',
            author: 'Claire Kann',
            tags: ['loved', 'lgbt']
        },
        {
            completionDate: '2023-01-12',
            coverImage: '/images/book-covers/cat-gamer-volume-2.webp',
            name: 'Cat + Gamer Volume 2',
            author: 'Wataru Nadatani',
            tags: ['cute']
        },
        {
            completionDate: '2023-01-06',
            coverImage: '/images/book-covers/loveless.webp',
            name: 'Loveless',
            author: 'Alice Oseman',
            tags: ['loved', 'lgbt']
        },
        {
            completionDate: '2022-12-22',
            coverImage: '/images/book-covers/cat-gamer-volume-1.webp',
            name: 'Cat + Gamer Volume 1',
            author: 'Wataru Nadatani',
            tags: ['cute']
        }
    ],
    readingNow: [
        {
            coverImage: '/images/book-covers/self-ish.webp',
            name: 'SELF-ish: A Transgender Awakening',
            author: 'Chloe Schwenke',
            tags: ['library', 'lgbt']
        },
    ],
    toRead: [
        {
            coverImage: '/images/book-covers/the-invisible-orientation.webp',
            name: 'The Invisible Orientation: An Introduction to Asexuality',
            author: 'Julie Sondra Decker',
            priority: true,
            tags: ['library', 'lgbt']
        },
        {
            coverImage: '/images/book-covers/several-people-are-typing.webp',
            name: 'Several People Are Typing: A Novel',
            author: 'Calvin Kasulke',
            tags: []
        },
        {
            coverImage: '/images/book-covers/headtrash.webp',
            name: 'HEADTRASH: The Leading Killer of Human Potential',
            author: 'Renie Cavallari',
            tags: []
        },
        {
            coverImage: '/images/book-covers/more-than-two.webp',
            name: 'More Than Two: A Practical Guide to Ethical Polyamory',
            author: 'Franklin Veaux and Eve Rickert',
            tags: ['reread']
        }
    ]
};

export default {
    ...commonData,
    ...data,
    finished: data.finished.sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime()),
    readingNow: data.readingNow.sort((a, b) => b.progress - a.progress),
    toRead: data.toRead.sort((a, b) => {
        if (a.priority && !b.priority) return -1;
        else if(!a.priority && b.priority) return 1;
        else {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) return -1;
            else if(nameA > nameB) return 1;
        }

        return 0;
    })
};
