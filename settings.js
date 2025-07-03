require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAC9C41rZUBksUAQAAG8HAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nVGrkqUtVVgyjgBQUvtLo1DxEChrtJQHHK*76F3T09D7uzvTxQIaTO+c53yU+QF5iiOWqA+hOUBNeQoXbJmhIBFYyqMEQEdEEAGQQqUDSmh8fVbuDE1ob6nWrTE+7Jq4n1M3eK+FtVpDsmpX3Nm76ARxeU1SnF*h8Kxs414QMFO+4yzg3Rj6ki2cFy6aU8jDuybBmjVLhUm4EVvYBHWxFigvNoUp5RhghM56hxICZfg49WuivsI9vbEurVdahQbh7nsidGc26R9fis42vZrC8a+eFr8H0pm8YeH0nehugSn4nY1mqjHhU3F4tNxz3GpuSeqaCvuTf4FEc5CqYByhlmzZd5L0w93p9HUKysur+wI4FVC324Puj23kax7dPtRNQ1bxaKk68BJ4Zuk2I*uydzX7hgVC3uy2psap3s2A8Hd8MkVh57y6Eiar8Dd8iHV5L*w*tUw1pn1uQiwZ6dyJO1Ugy4nn27BvndqEZOmUBae7oWGl+EP8RnSeNvs*n+uJzKpuTUs3V+YwXnwFsq3Oad0ToU5ciyjOsnfMgq8ieUi3HPtI792PHnsyQ9C5G50rXytuGacuHOg57iHhWPP4l6RFMfn8pzcQ*4ADeVkZHXziq*JdlwvE5ee44Q8Yu60wyFG76+PCdKUDMNgMo*uoCgCFNGIMNF*twT+10Ag3qDfILYk16wsi+CNDi4SbZfBpwt4Tl3Dg5VlkMezfalsdMGS2tJFpP75AV0QUkKH1GKAgtTVpDGRpTCCFGg*vWjC3J0Y2*Cte1EvgtCTCjb5VWZFjD4UPXjJ*T9osrZpsl9vV0gAlTucxsxhvOItjxWOST+GddIP0NGgRrClKJfEyKCAqAyUqFfqdWLoCVeMU1FHh+PoAuypyA4ACoQZInnJEmWucFQVb7Tb9e2KizLbzlioAvS5yle4QRe5MR+++IkVfne7j9+4WvLBYhBnFKgAt2ph2JRmJPZXs5s2zQ1N9L0SAOf83wY4414epr0h+Pw9UIWjJxuUnbYJXtuPMb9qsD6EC*F13KWcMpd517+oQhQQeBxmLJ8u3j1V86pis2RWDediUndShcjWkjrKytmRhlMjPu24FGjv5qks8DjqrRinrciaYM6Wswup1zumFyfmxr52H1puwWoxj76vdn8qinpfZ8ELKybLFsrPeJ44y0c9swt4Tk2XKSzfu9QX6aT6Xg*v6*RNhKJqBnrTBHj68GVlulpmBzvYs+NK7RLto11dt8s+4xM+n5V4aeZWqXazxCjZ*Jz2Or3n8q94W79xT26v5V4v0r+JY6jk3lb1a7IXy7NAAoKmmXGzBhqV6kil2lUH+KAv2yOS8e+MvB4*OiCMoUsLEgGVADzgBQ4AF1Aiqo17DQPiz8000fT6eh98BRSpn2GYIszRBnMSqDyA5mXRa4vKW+nHFKUFqTnlgNvMLjsWkc3WlluGGQfmQJa+zjeAjz+BlBLAQIUAxQAAAgIAC9C41rZUBksUAQAAG8HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
