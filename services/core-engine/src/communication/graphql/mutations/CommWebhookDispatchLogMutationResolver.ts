export const CommWebhookDispatchLogMutationTypeDefs = `
  input CreateCommWebhookDispatchLogInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommWebhookDispatchLog(input: CreateCommWebhookDispatchLogInput!): CommWebhookDispatchLog!
    deleteCommWebhookDispatchLog(id: ID!): Boolean!
  }
`;

export const CommWebhookDispatchLogMutationResolvers = {
  Mutation: {
    createCommWebhookDispatchLog: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommWebhookDispatchLog: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
