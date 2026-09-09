export const SupQueueMutationTypeDefs = `
  input CreateSupQueueInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupQueue(input: CreateSupQueueInput!): SupQueue!
    deleteSupQueue(id: ID!): Boolean!
  }
`;

export const SupQueueMutationResolvers = {
  Mutation: {
    createSupQueue: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupQueue: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
