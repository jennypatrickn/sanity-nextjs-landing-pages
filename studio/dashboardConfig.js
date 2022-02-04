export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fcff6f7cbcef8ca6e603ea',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5x29zd5s',
                  apiId: 'f021a891-29da-49f8-8263-6d06013da642'
                },
                {
                  buildHookId: '61fcff6fdc1a4c7997e5cd36',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-smx7mwfz',
                  apiId: '9572114e-0e2e-41f1-a0af-bd01552a66b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jennypatrickn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-smx7mwfz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
