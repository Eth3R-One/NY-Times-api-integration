const DETAILS = [
  {
    heading: "Popular Articles",
    details: "The most viewed articles on NYTimes.com today",
  },
  {
    heading: "Most Shared Articles",
    details: "The most shared articles on NYTimes.com",
  },
];

export function getSectionDetails(sectionId) {
  return DETAILS[sectionId];
}
