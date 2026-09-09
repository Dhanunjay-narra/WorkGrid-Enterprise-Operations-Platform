export const EvtReplayJobMutationTypeDefs = `
  input CreateEvtReplayJobInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtReplayJob(input: CreateEvtReplayJobInput!): EvtReplayJob!
    deleteEvtReplayJob(id: ID!): Boolean!
  }
`;

export const EvtReplayJobMutationResolvers = {
  Mutation: {
    createEvtReplayJob: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtReplayJob: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
