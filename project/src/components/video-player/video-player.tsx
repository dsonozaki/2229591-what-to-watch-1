import {useEffect, useRef} from 'react';

export function VideoPlayer(props: {width: number; height: number;video: string;sound: boolean;poster:string}): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <video ref={videoRef} muted={!props.sound} width={props.width} height={props.height} src={props.video} className="player__video" poster={props.poster} autoPlay></video>
  );
}
