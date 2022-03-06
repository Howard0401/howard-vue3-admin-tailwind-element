const sidbarWidth = `20rem`
const mainContentWidth = `calc(100vw-${sidbarWidth})`
const sidbarDropdownListH = `2.5rem`
const dashBoardHeader = `3rem`
const sidbarLogoListH = `calc(${dashBoardHeader} - ${sidbarDropdownListH})`

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "dash_board_logo": sidbarLogoListH,
        "dash_board_header": dashBoardHeader,
        "sidbar_dropdown_list": sidbarDropdownListH,
        
      },
      width: {
        "sidbar": sidbarWidth,
        "main_content_left_normal": "40rem",
        "main_content_left_expand": "15rem",
        "main_content": mainContentWidth,
      },
      translate: {
        "dash_board_trans":"-16rem",
      },

    },
  },
  plugins: [],
}
