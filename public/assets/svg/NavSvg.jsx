const MenuSvg = ({ openNavigation }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="overflow-visible"
    >
      {/* Top Bar */}
      <rect
        x="0"
        y="5"
        width="20"
        height="2"
        rx="1"
        fill="white"
        className="transition-transform duration-300 ease-in-out origin-center group-hover:fill-[#FFCA4F]"
        transform={
          openNavigation
            ? "translate(-15, 7) rotate(45 10 10)" // move down into center + rotate
            : "rotate(0 10 10)" // reset
        }
      />

      {/* Bottom Bar */}
      <rect
        x="0"
        y="13"
        width="20"
        height="2"
        rx="1"
        fill="white"
        className="transition-transform duration-300 ease-in-out origin-center group-hover:fill-[#FFCA4F]"
        transform={
          openNavigation
            ? "translate(-1, -12) rotate(-45 10 10)" // move up into center + rotate
            : "rotate(0 10 10)"
        }
      />
    </svg>
  );
};

export default MenuSvg;
