export const WfDeadLetterQueueMutationTypeDefs = `
  input CreateWfDeadLetterQueueInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfDeadLetterQueue(input: CreateWfDeadLetterQueueInput!): WfDeadLetterQueue!
    deleteWfDeadLetterQueue(id: ID!): Boolean!
  }
`;

export const WfDeadLetterQueueMutationResolvers = {
  Mutation: {
    createWfDeadLetterQueue: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfDeadLetterQueue: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
