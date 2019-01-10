const prismicConfig = {
  apiEndpoint: 'https://thor-website.cdn.prismic.io/api/v2',
  accessToken: 'MC5YRGU4NVJBQUFDRUFXOG9L.Dxzvv70v77-9JQtFZ--_ve-_ve-_vTtP77-9fO-_vSXvv703HwHvv73vv71v77-977-977-9XALvv73vv70',
  linkResolver: function (doc) {
    if (doc.isBroken) { return '/not-found' }
    if (doc.type === 'content_page') { return doc.uid === 'home-page' ? '/' : `/content/${doc.uid}` }
    if (doc.type === 'team_page') { return '/team' }
    if (doc.type === 'team_member') { return '/team/' + doc.uid }
    if (doc.type === 'story_landing') { return '/stories' }
    if (doc.type === 'story') { return '/stories/' + doc.uid }
    return '/'
  }
}

module.exports = prismicConfig;
