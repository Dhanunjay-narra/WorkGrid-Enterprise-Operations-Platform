export const EvtEventBatchMutationTypeDefs = `
  input CreateEvtEventBatchInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtEventBatch(input: CreateEvtEventBatchInput!): EvtEventBatch!
    deleteEvtEventBatch(id: ID!): Boolean!
  }
`;

export const EvtEventBatchMutationResolvers = {
  Mutation: {
    createEvtEventBatch: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtEventBatch: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
