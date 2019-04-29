import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  swiperWrapper: {
    height: 240
  },

  swiperSlide: {
    height: 240,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  swiperText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  hotCateContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    flexWrap: 'wrap'
  },

  hotCateItem: {
    width: '25%'
  },

  hotCateImgWrap: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },

  hotCateImg: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
  },

  hotCateLastItem: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  hotCateTextWrap: {
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  hotCateText: {
    fontSize: 12
  },

  better: {
    flexDirection: 'row',
    paddingLeft: 10,
    width: '100%',
    flexWrap: 'wrap'
  },

  betterWrapper: {
    paddingRight: 10,
    width: '50%',
    paddingBottom: 15
  },

  betterImgWrapper: {
    height: 170
  },

  betterTitle: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  betterHot: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }

})