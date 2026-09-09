export const IntSyncHistoryMutationTypeDefs = `
  input CreateIntSyncHistoryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntSyncHistory(input: CreateIntSyncHistoryInput!): IntSyncHistory!
    deleteIntSyncHistory(id: ID!): Boolean!
  }
`;

export const IntSyncHistoryMutationResolvers = {
  Mutation: {
    createIntSyncHistory: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntSyncHistory: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
