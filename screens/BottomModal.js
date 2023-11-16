import React, { useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Modal,
  PanResponder,
} from 'react-native';

const BottomModal = ({ visible, onDismiss, children }) => {
  const panY = useRef(new Animated.Value(Dimensions.get('screen').height)).current;

  const resetPositionAnim = useRef(
    Animated.timing(panY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false
    })
  ).current;

  const closeAnim = useRef(
    Animated.timing(panY, {
      toValue: Dimensions.get('screen').height,
      duration: 500,
      useNativeDriver: false
    })
  ).current;

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, { dy: panY }],{ useNativeDriver: false }),
      onPanResponderRelease: (e, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return closeAnim.start(() => onDismiss());
        }
        return resetPositionAnim.start();
      },
    })
  ).current;

  useEffect(() => {
    if (visible) {
      resetPositionAnim.start();
    }
  }, [visible, resetPositionAnim]);

  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <Modal animated animationType="fade" visible={visible} transparent onRequestClose={onDismiss}>
      <View style={styles.overlay}>
        <Animated.View style={[styles.container, { top }]} {...panResponders.panHandlers}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});


export default BottomModal;