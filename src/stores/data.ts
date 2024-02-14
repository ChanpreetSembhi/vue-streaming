import channelIconOne from '@/assets/img/channel-profile/icon-1.png'
import channelIconTwo from '@/assets/img/channel-profile/icon-2.png'
import channelIconThree from '@/assets/img/channel-profile/icon-3.png'
import channelIconFour from '@/assets/img/channel-profile/icon-4.png'
import channelIconFive from '@/assets/img/channel-profile/icon-5.png'
import channelIconSix from '@/assets/img/channel-profile/icon-6.png'
import channelIconSeven from '@/assets/img/channel-profile/icon-7.png'
import channelIconEight from '@/assets/img/channel-profile/icon-8.png'
import channelIconNine from '@/assets/img/channel-profile/icon-9.png'
import channelIconTen from '@/assets/img/channel-profile/icon-10.png'
import channelIconEleven from '@/assets/img/channel-profile/icon-11.png'
import channelIconTwelev from '@/assets/img/channel-profile/icon-12.png'
import thumbanilOne from '@/assets/img/thumbnail/thumbnail-1.jpg'
import thumbanilTwo from '@/assets/img/thumbnail/thumbnail-2.jpg'
import thumbanilThree from '@/assets/img/thumbnail/thumbnail-3.jpg'
import thumbanilFour from '@/assets/img/thumbnail/thumbnail-4.jpg'
import thumbanilFive from '@/assets/img/thumbnail/thumbnail-5.jpg'
import thumbanilSix from '@/assets/img/thumbnail/thumbnail-6.jpg'
import thumbanilSeven from '@/assets/img/thumbnail/thumbnail-7.jpg'
import thumbanilEight from '@/assets/img/thumbnail/thumbnail-8.jpg'
import thumbanilNine from '@/assets/img/thumbnail/thumbnail-9.jpg'
import thumbanilTen from '@/assets/img/thumbnail/thumbnail-10.jpg'
import thumbanilEleven from '@/assets/img/thumbnail/thumbnail-11.jpg'
import thumbanilTwelev from '@/assets/img/thumbnail/thumbnail-12.jpg'

// explore page
export type Videos = {
    id: string,
    thumbnail: string
    channelIcon: string
    views: string
    uploadTime: string
    title: string
    channelName: string
    trending?: boolean
    verify: boolean
}

export const video: Videos[] = [
    {
        id: '0',
        thumbnail: thumbanilOne,
        channelIcon: channelIconOne,
        views: '2.6K',
        uploadTime: '1 days',
        title: 'Vue.js Tutorial: Beginner to Front-End Developer',
        channelName: 'Vue Master',
        trending: true,
        verify: true
    },
    {
        id: '1',
        thumbnail: thumbanilTwo,
        channelIcon: channelIconTwo,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '2',
        thumbnail: thumbanilThree,
        channelIcon: channelIconThree,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '3',
        thumbnail: thumbanilFour,
        channelIcon: channelIconFour,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '4',
        thumbnail: thumbanilFive,
        channelIcon: channelIconFive,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '5',
        thumbnail: thumbanilSix,
        channelIcon: channelIconSix,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '6',
        thumbnail: thumbanilSeven,
        channelIcon: channelIconSeven,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '7',
        thumbnail: thumbanilEight,
        channelIcon: channelIconEight,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'James Tyler',
        trending: false,
        verify: false
    },
    {
        id: '8',
        thumbnail: thumbanilNine,
        channelIcon: channelIconNine,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '9',
        thumbnail: thumbanilTen,
        channelIcon: channelIconTen,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '10',
        thumbnail: thumbanilEleven,
        channelIcon: channelIconEleven,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '11',
        thumbnail: thumbanilTwelev,
        channelIcon: channelIconTwelev,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    }
];

// trending Page

export type Trendings = {
    id: string,
    thumbnail: string,
    channelIcon: string,
    views: string,
    uploadTime: string,
    title: string,
    channelName: string,
    trending: boolean,
    verify: boolean
};

export const trending: Trendings[] = [
    {
        id: '0',
        thumbnail: thumbanilOne,
        channelIcon: channelIconOne,
        views: '2.6K',
        uploadTime: '1 days',
        title: 'Vue.js Tutorial: Beginner to Front-End Developer',
        channelName: 'Vue Master',
        trending: true,
        verify: true
    },
    {
        id: '1',
        thumbnail: thumbanilTwo,
        channelIcon: channelIconTwo,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: true,
        verify: false
    },
    {
        id: '2',
        thumbnail: thumbanilFour,
        channelIcon: channelIconFour,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: true,
        verify: false
    },
    {
        id: '3',
        thumbnail: thumbanilThree,
        channelIcon: channelIconThree,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: true,
        verify: false
    },
    {
        id: '4',
        thumbnail: thumbanilSix,
        channelIcon: channelIconSix,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: true,
        verify: false
    },
    {
        id: '5',
        thumbnail: thumbanilFive,
        channelIcon: channelIconFive,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: true,
        verify: false
    },
    {
        id: '6',
        thumbnail: thumbanilSeven,
        channelIcon: channelIconSeven,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: true,
        verify: false
    },
    {
        id: '7',
        thumbnail: thumbanilNine,
        channelIcon: channelIconNine,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: true,
        verify: false
    },
    {
        id: '8',
        thumbnail: thumbanilEight,
        channelIcon: channelIconEight,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Eight',
        channelName: 'Pythan Guru',
        trending: true,
        verify: false
    },
];

// Subscribe profiles Page
export type Channels = {
    id: string,
    img: string
    name: string
    subscriber: string
}

export const channel: Channels[] = [
    {
        id: '0',
        img: channelIconOne,
        name: 'King',
        subscriber: '1.5K',
    },
    {
        id: '1',
        img: channelIconTwo,
        name: "Dahlia O'donnell",
        subscriber: '8.6K',
    },
    {
        id: '2',
        img: channelIconThree,
        name: "Buckminster Petty",
        subscriber: '1.8K',
    },
    {
        id: '3',
        img: channelIconFour,
        name: "Porter Gray",
        subscriber: '6.8K',
    },
    {
        id: '4',
        img: channelIconFive,
        name: "Daria Ware",
        subscriber: '9.2K',
    },
    {
        id: '5',
        img: channelIconSix,
        name: "Amelia Norton",
        subscriber: '2.4K',
    },
    {
        id: '6',
        img: channelIconSeven,
        name: "Lillith Patton",
        subscriber: '8.5K',
    },
    {
        id: '7',
        img: channelIconEight,
        name: "Vivien Fry",
        subscriber: '7.5K',
    },
    {
        id: '8',
        img: channelIconNine,
        name: "Rhea Logan",
        subscriber: '4.5K',
    },
    {
        id: '9',
        img: channelIconTen,
        name: "Jeanette Franco",
        subscriber: '5K',
    },
    {
        id: '10',
        img: channelIconEleven,
        name: "Molly Pate",
        subscriber: '2.5K',
    },
]


// history page

export type Histories = {
    id: string
    thumbnail: string
    channelIcon: string
    views: string
    uploadTime: string
    title: string
    content: string
    channelName: string
    trending?: boolean
    verify: boolean
}

export const histories: Histories[] = [
    {
        id: '0',
        thumbnail: thumbanilOne,
        channelIcon: channelIconOne,
        views: '2.6K',
        uploadTime: '1 days',
        title: 'Vue.js Tutorial: Beginner to Front-End Developer',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Vue Master',
        trending: true,
        verify: true
    },
    {
        id: '1',
        thumbnail: thumbanilTwo,
        channelIcon: channelIconTwo,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '2',
        thumbnail: thumbanilThree,
        channelIcon: channelIconThree,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '3',
        thumbnail: thumbanilFour,
        channelIcon: channelIconFour,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '4',
        thumbnail: thumbanilFive,
        channelIcon: channelIconFive,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '5',
        thumbnail: thumbanilSix,
        channelIcon: channelIconSix,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '6',
        thumbnail: thumbanilSeven,
        channelIcon: channelIconSeven,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '7',
        thumbnail: thumbanilEight,
        channelIcon: channelIconEight,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '8',
        thumbnail: thumbanilNine,
        channelIcon: channelIconNine,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '9',
        thumbnail: thumbanilTen,
        channelIcon: channelIconTen,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '10',
        thumbnail: thumbanilEleven,
        channelIcon: channelIconTwo,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '11',
        thumbnail: thumbanilTwelev,
        channelIcon: channelIconSeven,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr's standard dummy text ever since the 1500s`,
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    }
]

//   subscribe profile tabs page
export type ForYouVideos = {
    id: string,
    thumbnail: string
    channelIcon: string
    views: string
    uploadTime: string
    title: string
    channelName: string
    trending?: boolean
    verify: boolean
}

export const ForYouVideo: ForYouVideos[] = [
    {
        id: '0',
        thumbnail: thumbanilOne,
        channelIcon: channelIconOne,
        views: '2.6K',
        uploadTime: '1 days',
        title: 'Vue.js Tutorial: Beginner to Front-End Developer',
        channelName: 'Vue Master',
        trending: true,
        verify: true
    },
    {
        id: '1',
        thumbnail: thumbanilTwo,
        channelIcon: channelIconTwo,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '2',
        thumbnail: thumbanilThree,
        channelIcon: channelIconThree,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    }
]

export type PopularVideos = {
    id: string,
    thumbnail: string
    channelIcon: string
    views: string
    uploadTime: string
    title: string
    channelName: string
    trending?: boolean
    verify: boolean
}

export const PopularVideo: PopularVideos[] = [
    {
        id: '0',
        thumbnail: thumbanilEight,
        channelIcon: channelIconEight,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '1',
        thumbnail: thumbanilNine,
        channelIcon: channelIconNine,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '2',
        thumbnail: thumbanilTen,
        channelIcon: channelIconTen,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '3',
        thumbnail: thumbanilEleven,
        channelIcon: channelIconTwo,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    },
    {
        id: '4',
        thumbnail: thumbanilTwelev,
        channelIcon: channelIconSeven,
        views: '60K',
        uploadTime: '3 days',
        title: 'Python Tutorial for Beginners | Learn Python',
        channelName: 'Pythan Guru',
        trending: false,
        verify: false
    }
];