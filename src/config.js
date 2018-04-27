function config(){
  const APP_NAME = 'Thumb API';
  switch(process.env.NODE_ENV){
      case 'dev':
          return {
              'APP_SETTINGS': {
                'MILES_TO_ADD_FOR_SEARCH_BOUNDARY': 10
              },
          };

      case 'test':
          return {
            'APP_SETTINGS': {
              'MILES_TO_ADD_FOR_SEARCH_BOUNDARY': 10
            },
          };

      case 'prod':
          return {
            'APP_SETTINGS': {
              'MILES_TO_ADD_FOR_SEARCH_BOUNDARY': 10
            },
          };

      default:
          throw "Invalid configuration choice. NODE_ENV include ('dev', 'test', 'prod')";
  }
}

// Export for use in init_api
module.exports = config()
