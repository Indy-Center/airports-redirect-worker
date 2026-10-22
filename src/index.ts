export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)

    if (url.hostname === 'airports.indy.center') {
      const path = url.pathname.toLowerCase()
      const target = `https://wiki.flyindycenter.com/pilots${path}${url.search}`
      return Response.redirect(target, 301)
    }

    return fetch(request)
  },
} satisfies ExportedHandler
