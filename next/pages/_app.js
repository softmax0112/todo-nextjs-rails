import App, { Container } from 'next/app'
import jsHttpCookie from 'cookie'
import FlashProvider from '../components/FlashProvider'
import AuthProvider from '../components/AuthProvider'
import BackendUrlsProvider from '../components/BackendUrlsProvider'
import Page from '../components/Page'


class MyApp extends App {
  static getInitialProps = ({ ctx }) => {
    const props = {
      auth: {
        loggedIn: false, username: '', token: ''
      }
    }
    if (ctx.req && ctx.req.headers) {
      let jsCookie = ctx.req.headers.cookie
      if (typeof jsCookie === 'string') {
        jsCookie = jsHttpCookie.parse(jsCookie)
      }
      props.auth.loggedIn = jsCookie.loggedIn === 'true'
      props.auth.username = jsCookie.username || ''
      props.auth.token = jsCookie.token || ''
    }
    return props
  }

  render() {
    const { Component, pageProps, auth } = this.props
    return (
      <Container>
        <FlashProvider>
          <AuthProvider {...auth} >
            <BackendUrlsProvider>
              <Page>
                <Component {...pageProps} />
              </Page>
            </BackendUrlsProvider>
          </AuthProvider>
        </FlashProvider>
      </Container>
    )
  }
}

export default MyApp
