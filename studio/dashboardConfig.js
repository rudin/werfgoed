export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e296250ce8b0f3de63727db',
                  title: 'Sanity Studio',
                  name: 'werfgoed-studio',
                  apiId: '6531b3b8-3a23-44e5-8722-2a5ec8abaebe'
                },
                {
                  buildHookId: '5e29625099c42b890868affa',
                  title: 'Blog Website',
                  name: 'werfgoed',
                  apiId: '47b324e4-14e0-486e-a661-b72a577a6059'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rudin/werfgoed',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://werfgoed.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
