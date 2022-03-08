const sidbarWidth = `20rem`
const mainContentWidth = `calc(100vw-${sidbarWidth})`
const sidbarDropdownListH = `2.5rem`
const dashBoardHeader = `3rem`
const sidbarLogoListH = `calc(${dashBoardHeader} - ${sidbarDropdownListH})`
const dash_board_header_right_logo = `2.5rem`
const sidebar_open_icon = `5rem`
const minHeight = "667px"
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "full_screen": "729px",
        "sidebar_full_screen": `${minHeight} + ${dashBoardHeader}`,
      },
      minWidth: {
        "full_screen": "393px",
      },
      height: {
        "dash_board_logo": sidbarLogoListH,
        "dash_board_header": dashBoardHeader,
        "dash_board_body":`calc(100% - ${dashBoardHeader})`,
        "sidbar_dropdown_list": sidbarDropdownListH,
      },
      width: {
        "sidbar": sidbarWidth,
        "main_content_left_normal": "40rem",
        "main_content_left_expand": "15rem",
        "main_content": mainContentWidth,
        "sidebar_open_icon": sidebar_open_icon,  
        // "dash_board_header_right_space": `calc(100vw- ${sidbarWidth} - ${sidebar_open_icon} - ${dash_board_header_right_logo})`,
        // "dash_board_header_right_space_expand": `calc(100vw- ${sidbarWidth} - ${sidebar_open_icon} - ${dash_board_header_right_logo} +25rem) `, // normal-expand
        "dash_board_header_right_logo": dash_board_header_right_logo,
      },
      translate: {
        "dash_board_trans":"-16rem",
      },
      margin: {
        "conpensate_side_bar_sublist": sidbarWidth,
      },

    },
  },
  plugins: [],
}
