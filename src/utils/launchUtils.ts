export function launchConfig(
  upcoming: boolean,
  page: number,
  limit: number,
  order: "asc" | "desc"
) {
  const config = {
    query: { upcoming },
    options: {
      limit: limit,
      page: page,
      select: [
        "crew",
        "upcoming",
        "links.patch",
        "links.webcast",
        "webcast",
        "details",
        "failures",
        "date_unix",
        "upcoming",
        "success",
        "flight_number",
        "name",
      ],
      sort: {
        flight_number: order,
      },
    },
  };

  return config;
}
