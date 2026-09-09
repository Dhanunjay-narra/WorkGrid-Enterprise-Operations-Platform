export const IntSyncQueueItemMutationTypeDefs = `
  input CreateIntSyncQueueItemInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntSyncQueueItem(input: CreateIntSyncQueueItemInput!): IntSyncQueueItem!
    deleteIntSyncQueueItem(id: ID!): Boolean!
  }
`;

export const IntSyncQueueItemMutationResolvers = {
  Mutation: {
    createIntSyncQueueItem: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntSyncQueueItem: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
