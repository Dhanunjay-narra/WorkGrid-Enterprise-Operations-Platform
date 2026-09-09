export const CommDigestQueueMutationTypeDefs = `
  input CreateCommDigestQueueInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommDigestQueue(input: CreateCommDigestQueueInput!): CommDigestQueue!
    deleteCommDigestQueue(id: ID!): Boolean!
  }
`;

export const CommDigestQueueMutationResolvers = {
  Mutation: {
    createCommDigestQueue: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommDigestQueue: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
