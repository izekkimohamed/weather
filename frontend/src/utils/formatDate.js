export const formatDate = (dt) => {
  const date = new Date(dt * 1000);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return `Today . ${date.toLocaleString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    })}`;
  } else if (tomorrow.toDateString() === date.toDateString()) {
    return "Tomorrow";
  } else {
    return date.toLocaleString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }
};
