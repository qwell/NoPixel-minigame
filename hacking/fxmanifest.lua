fx_version 'cerulean'
game 'gta5'

ui_page 'index.html'

client_scripts {
    'client/main.lua',
}

files {
    'index.html',
    '*.css',
    'src/*.js',
    'assets/*.png',
    'assets/*.mp3',
    'assets/tutorials/*.jpg'
}

exports {
    'OpenHackingGame',
    'GetHackingStatus',
}
