Ext.define('honeybank.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Accounts',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Honey Bank'
                },

                html: [
                    "<h3>Dear Sencha...</h3>",
                    "Your getting started documents are full of s***. Anywhoo, this is the contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Transfer',
                iconCls: 'action',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Honey Bank'
                },

                html: [
                    "<h3>Transfer money to someone else...</h3>",
                    "ACH transfer. Provide account details form & pick from their accounts."
                ].join("")
            },
            {
                title: 'Contact Us',
                iconCls: 'compose',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Honey Bank'
                },

                html: [
                    "<h3>Contact Us...</h3>",
                    "Or maybe not."
                ].join("")
            },
            {
                title: 'Settings',
                iconCls: 'settings',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'How it works / test video'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/26826/820/21598416.mp4?token=1357803919_c6a8d060e511ed05b48ba3c74e490abc',
                        posterUrl: 'http://icons-search.com/img/yellowicon/Flat_Linux.zip/Flat_for_Linux-Movies-42-Movies_256x256.png-256x256.png'
                    }
                ]
            }
        ]
    }
});
