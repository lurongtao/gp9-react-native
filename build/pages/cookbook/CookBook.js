// render() {
//   const listData = this.props.store.list.listData
//   return (
//     <ScrollView>
//       <View style={styles.swiperWrapper}>
//         {
//           listData.length > 0
//             ? (
//                 <Swiper autoplay={true}>
//                   {
//                     listData.slice(0, 3)
//                       .map((v:any, i:number) => {
//                         return (
//                           <View key={i} style={styles.swiperSlide}>
//                             <Image source={{uri: v.img}} style={{width: '100%', height: '100%'}}></Image>
//                           </View>
//                         )
//                       })
//                   }
//                 </Swiper>
//               )
//             : null
//         }
//       </View>
//       <View style={styles.hotCateContainer}>
//       {
//         this.state.hotCateList.slice(0, 11).map((v, i) => {
//           return (
//             <View key={i} style={styles.hotCateItem}>
//               <TouchableOpacity onPress={this._onPressHotCate.bind(this, i)}>
//                 <View style={styles.hotCateImgWrap}>
//                   <Image source={{uri: v.img}} style={styles.hotCateImg}></Image>
//                 </View>
//                 <View style={styles.hotCateTextWrap}>
//                   <Text style={styles.hotCateText}>{v.title}</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           )
//         })
//       }
//         <View style={styles.hotCateLastItem}>
//           <View style={styles.hotCateTextWrap}>
//             <Text style={styles.hotCateText}>更多...</Text>
//           </View>
//         </View>
//       </View>
//       <List start={0} count={10}></List>
//     </ScrollView>
//   )
// }
//# sourceMappingURL=CookBook.js.map