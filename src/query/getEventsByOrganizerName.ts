import { GraphQLContext } from "../context";

const getEventsByOrganizerName = async (
  parent: unknown,
  args: { name: string, },
  context: GraphQLContext
) => {

  return context.prisma.event.findMany({
    where: {
      organizer: {
        name: args.name
      }
    }
  });
};

export default getEventsByOrganizerName;