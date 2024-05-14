import { GraphQLContext } from "../context";


const getAllEvents = async (
  parent: unknown,
  args: { }, // eslint-disable-line
  context: GraphQLContext
) => {
  return context.prisma.event.findMany();
};

export default getAllEvents;
