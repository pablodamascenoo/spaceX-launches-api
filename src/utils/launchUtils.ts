const selectArr = [
  "crew",
  "upcoming",
  "links.patch",
  "links.youtube_id",
  "details",
  "failures",
  "date_unix",
  "upcoming",
  "success",
  "flight_number",
  "name",
];

export function launchConfigById(id: string) {
  const config = {
    query: {
      _id: id,
    },
    options: {
      limit: 1,
      select: selectArr,
    },
  };

  return config;
}

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
      select: selectArr,
      sort: {
        flight_number: order,
      },
    },
  };

  return config;
}
