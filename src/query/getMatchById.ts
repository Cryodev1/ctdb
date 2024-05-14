import { GraphQLContext } from "../context";


const getMatchById = async (
  parent: unknown,
  args: {
    id: string,
  },
  context: GraphQLContext
) => {

  return context.prisma.match.findUnique({
    where: {
      id: args.id,
    }
  });

};

export default getMatchById;