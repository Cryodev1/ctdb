// Allocator for the query resolvers

import getOrganizationByName from "./getOrganizationByName";
import getOrganizationById from "./getOrganizationById";
import getAllOrganizations from "./getAllOrganizations";

import getAllEvents from "./getAllEvents";
import getEventById from "./getEventById";
import getEventByName from "./getEventByName";
import getEventsByEdition from "./getEventsByEdition";
import getEventsByOrganizerId from "./getEventsByOrganizerId";
import getEventsByOrganizerName from "./getEventsByOrganizerName";

import getAllMatches from "./getAllMatches";
import getMatchesByPlayer from "./getMatchesByPlayer";
import getMatchById from "./getMatchById"

import getPlayerByEloName from "./getPlayerByEloName";
import getPlayerById from "./getPlayerById";
import getAllPlayers from "./getAllPlayers";

const query = {
  info: () => "GraphQL API for CTDB",
  getOrganizationByName,
  getOrganizationById,
  getAllOrganizations,

  getAllEvents,
  getEventById,
  getEventByName,
  getEventsByEdition,
  getEventsByOrganizerId,
  getEventsByOrganizerName,

  getAllMatches,
  getMatchById,
  getMatchesByPlayer,

  getPlayerByEloName,
  getPlayerById,
  getAllPlayers,
};

export default query;
