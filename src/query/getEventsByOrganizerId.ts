import { GraphQLContext } from "../context";

const getEventsByOrganizerId = async (
  parent: unknown,
  args: { id: string, },
  context: GraphQLContext
) => {

  return context.prisma.event.findMany({
    where: {
      organizer: {
        id: args.id
      }
    }
  });
};

export default getEventsByOrganizerId;