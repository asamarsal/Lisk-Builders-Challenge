export type HeaderItem = {
  label: string;
  href: string;
};

export type avatar = {
  image: string;
  title: string;
};

export type brand = {
  image: string;
  title: string;
  darkImg: string;
};

export type innovation = {
  image: string;
  title: string;
  bg_color: string;
  txt_color: string;
};

export type onlinePresence = {
  image: string;
  title: string;
  tag: Array<string>;
  link: string;
};

export type creativeMind = {
  image: string;
  name: string;
  position: string;
  twitterLink: string;
  linkedinLink: string;
}

export type WebResultTag = {
  image: string;
  name: string;
  bg_color: string;
  txt_color: string;
}

export type startupPlan = {
  plan_bg_color: string;
  plan_name: string;
  plan_descp: string;
  plan_price: string;
  text_color: string;
  border_color: string;
  descp_color: string;
  icon_img: string;
  plan_feature: Array<string>;
}

export type faq = {
  faq_que: string;
  faq_ans: string;
}

export type achievements = {
  icon: string;
  sub_title: string;
  dark_icon: string;
  title: string;
  year: string;
  url: string;
}