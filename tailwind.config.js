const sidbarWidth = `20rem`//20rem
const mainContentWidth = `calc(100vw-${sidbarWidth})`

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "login-page-block":"26rem",

        "sidbar_dropdown_list":"3rem",
        "dash_board_header":"4rem",
      },
      width: {
        "sidbar": sidbarWidth,
        "main_content_left_normal": "35rem",
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
