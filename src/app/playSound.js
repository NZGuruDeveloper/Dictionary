"use client";
import Image from "next/image";
import iconPlay from "../assets/images/icon-play.svg";

/**
 * Plays a sound.
 *
 * @param {object} props - The props object containing the sound URL.
 * @return {undefined} This function does not return a value.
 */
export default function PlaySound(props) {
  let audio = new Audio(props.soundUrl);
  const start = () => {
    props.soundUrl ? audio.play() : null;
  };

  return (
    <div>
      <Image
        //onClick={play}
        src={iconPlay}
        alt="play"
        className="cursor-pointer hover:invert-[.25] hover:brightness-150"
        onClick={start}
      />
    </div>
  );
}
