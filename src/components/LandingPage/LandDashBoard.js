import "../styles/LandDashBoard.css";
import React from "react";
import PageRedirect from './PageRedirect';
class LandDashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    link: "https://www.mauquangcao.com/ad/phong-vu-2/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Phong Vũ",
                    post_date: "11-05-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/phongvuvietnam/posts/2108728532694854&width=363" width="363" height="532" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 1
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 1
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 1
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 1
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    link: "https://www.mauquangcao.com/ad/do-choi-cong-nghe-3/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Đồ chơi công nghệ",
                    post_date: "09-05-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/dochoicongnghethongminh/posts/2138477906383406&width=363" width="363" height="649" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 2
                            }
                        },
                        {
                            ad_id: 2,
                            description: "Dịch Vụ",
                            item_adcareer: {
                                adcareer_id: 2,
                                item_id: 2
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 2
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 2
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 2
                            }
                        }
                    ]
                },
                {
                    id: 3,
                    link: "https://www.mauquangcao.com/ad/phong-vu/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Phong Vũ",
                    post_date: "04-05-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/phongvuvietnam/posts/2108596889374685&width=363" width="363" height="613" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 3
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 3
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 3
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 3
                            }
                        }
                    ]
                },
                {
                    id: 4,
                    link: "https://www.mauquangcao.com/ad/pixel-photography/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Pixel Photography",
                    post_date: "04-05-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/pixelstudiovn/posts/1598580360238958&width=363" width="363" height="526" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 4
                            }
                        },
                        {
                            ad_id: 2,
                            description: "Dịch Vụ",
                            item_adcareer: {
                                adcareer_id: 2,
                                item_id: 4
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 4
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 4
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 4
                            }
                        }
                    ]
                },
                {
                    id: 5,
                    link: "https://www.mauquangcao.com/ad/phu-kien-thong-minh/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Phụ kiện thông minh",
                    post_date: "04-05-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/479416948874434/videos/1020985661384224/&show_text=0&width=363" width="363" height="460" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 5
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 5
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 5
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 5
                            }
                        }
                    ]
                },
                {
                    id: 6,
                    link: "https://www.mauquangcao.com/ad/timo-2/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Timo",
                    post_date: "02-05-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/yourtimo/posts/1368572883244013&width=363" width="363" height="485" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 6
                            }
                        },
                        {
                            ad_id: 2,
                            description: "Dịch Vụ",
                            item_adcareer: {
                                adcareer_id: 2,
                                item_id: 6
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 6
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 6
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 6
                            }
                        }
                    ]
                },
                {
                    id: 8,
                    link: "https://www.mauquangcao.com/ad/laptop-88/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Laptop 88",
                    post_date: "27-04-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/laptop88.vn/posts/1745303865688418&width=363" width="363" height="666" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 8
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 8
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 8
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 8
                            }
                        }
                    ]
                },
                {
                    id: 9,
                    link:
                        "https://www.mauquangcao.com/ad/cellphones-he-thong-ban-le-di-dong-toan-quoc-2/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "CellphoneS - Hệ thống bán lẻ di động toàn quốc",
                    post_date: "26-04-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/CellphoneSVietnam/posts/2221245587893265&width=363" width="363" height="677" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 9
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 9
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 9
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 9
                            }
                        }
                    ]
                },
                {
                    id: 10,
                    link: "https://www.mauquangcao.com/ad/mua-ban-laptop-cu/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Mua Bán Laptop cũ",
                    post_date: "15-04-2017",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/huunghihathanh/posts/1330900920334585&width=363" width="363" height="637" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 10
                            }
                        },
                        {
                            ad_id: 2,
                            description: "Dịch Vụ",
                            item_adcareer: {
                                adcareer_id: 2,
                                item_id: 10
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 10
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 10
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 10
                            }
                        }
                    ]
                },
                {
                    id: 11,
                    link:
                        "https://www.mauquangcao.com/ad/the-gioi-di-dong-thegioididong-com-3/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Thế Giới Di Động (thegioididong.com)",
                    post_date: "14-04-2017",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/thegioididongcom/posts/1340839309296567&width=363" width="363" height="282" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 11
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 11
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 4,
                            description: "Quảng cáo Link website",
                            item_adtype: {
                                adtype_id: 4,
                                item_id: 11
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 11
                            }
                        }
                    ]
                },
                {
                    id: 12,
                    link: "https://www.mauquangcao.com/ad/yourphone-2/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "Yourphone",
                    post_date: "08-04-2017",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/Yourphone.vn/posts/1454304614581630&width=363" width="363" height="654" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 12
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 1,
                            description: "Kinh doanh sản phẩm/dịch vụ",
                            item_adpurpose: {
                                adpurpose_id: 1,
                                item_id: 12
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 12
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 12
                            }
                        }
                    ]
                },
                {
                    id: 7,
                    link: "https://www.mauquangcao.com/ad/lg-electronics-vietnam/",
                    thumb:
                        "https://www.mauquangcao.com/wp-includes/images/media/default.png",
                    title: "LG Electronics Vietnam",
                    post_date: "02-05-2018",
                    link_embed:
                        '<iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/lge.vietnam/videos/196499807742287/&show_text=0&width=363" width="363" height="249" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
                    adcareers: [
                        {
                            ad_id: 1,
                            description: "Công Nghệ",
                            item_adcareer: {
                                adcareer_id: 1,
                                item_id: 7
                            }
                        },
                        {
                            ad_id: 5,
                            description: "E-commerce",
                            item_adcareer: {
                                adcareer_id: 5,
                                item_id: 7
                            }
                        },
                        {
                            ad_id: 9,
                            description: "Nhà cửa-Vật dụng gia đình",
                            item_adcareer: {
                                adcareer_id: 9,
                                item_id: 7
                            }
                        }
                    ],
                    adpurposes: [
                        {
                            ad_id: 2,
                            description: "Sự kiện,cuộc thi,tuyển dụng",
                            item_adpurpose: {
                                adpurpose_id: 2,
                                item_id: 7
                            }
                        }
                    ],
                    adtypes: [
                        {
                            ad_id: 2,
                            description: "Quảng cáo bài viết",
                            item_adtype: {
                                adtype_id: 2,
                                item_id: 7
                            }
                        }
                    ],
                    adbases: [
                        {
                            ad_id: 2,
                            description: "Link nhúng",
                            item_adbase: {
                                adbase_id: 2,
                                item_id: 7
                            }
                        }
                    ]
                }
            ]
        };
    }

    formatLink = obj => {
        let link = obj.link_embed;
        let arr = [];
        for (let i = 0; i < link.length; i++) {
            if (link[i] === '"') arr.push(i);
        }

        let src = link.slice(arr[0] + 1, arr[1]);
        let width = link.slice(arr[2] + 1, arr[3]);
        let height = link.slice(arr[4] + 1, arr[5]);

        return { src, width, height };
    };
    render() {
        let arr = this.state.data.map(obj => {
            let { src, width, height } = this.formatLink(obj);

            return (
                <div className="card">
                    <iframe src={src} width={width} height={height} />
                    <h3 className="card__title"> <a href="https://www.advertiseform.us">{obj.title}</a></h3>
                    <div className="card__date">{obj.post_date}</div>
                </div>
            );
        });
        return (
            <div className="land-dash">
                <div className="land-dash__container">{arr}</div>
                <PageRedirect />
            </div>
        );
    }
}

export default LandDashBoard;
