import {TrackPlayer, Capability, RepeatMode} from 'react-native-track-player';
import playlistData from '../src/data/playlist.json';

import localTrack from '../src/audio/audio.m4a';
const setupIfNecessary = async () => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return;
  }
  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  });
  await TrackPlayer.add(playlistData);
  await TrackPlayer.add({
    url: localTrack,
    title: 'Pure (Demo)',
    artist: 'David Chavez',
    artwork: 'https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6',
    duration: 28,
  });
  TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
export default setupIfNecessary;
