export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const hostname = url.hostname;
    
    // Check if it's airports.indy.center
    if (hostname === 'airports.indy.center') {
      const path = url.pathname;
      
      // Redirect to wiki with the same path
      const targetUrl = `https://wiki.flyindycenter.com/pilots${path}${url.search}`;
      
      return Response.redirect(targetUrl, 301);
    }
    
    // Pass through for other hosts
    return fetch(request);
  }
};
