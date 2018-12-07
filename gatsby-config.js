module.exports = {
  siteMetadata: {
    title: 'Gossip Girl',
    author: 'XOXO Gossip Girl',
    description: 'The Site ABOUT the Upper East Side, FOR the Upper East Side and BY the Upper East Side!',
    siteUrl: 'https://tehfedaykin.github.io/GossipGirl/',
  },
  pathPrefix: '/GossipGirl',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/assets/img/`
      }
    },
    `gatsby-transformer-json`,
    {
       resolve: `gatsby-source-filesystem`,
       options: {
         path: `./src/data/`,
       },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gossip Girls`,
        short_name: `GossopGirl`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/ggkiss.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-less`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'src/utils/typography',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:100,300,400,700`]
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    }
  ],
}
