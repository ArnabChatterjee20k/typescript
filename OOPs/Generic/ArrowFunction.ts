// const getMorePdt = () =>{}
const getMorePdt = <T>(pdts: T[]): T => {
  return pdts[3];
};

// how peple write the same thing in codebases to keep things differnt from jsx
// they put a comma
const getPdt = <T,>(pdts: T[]): T => {
    return pdts[3];
  };