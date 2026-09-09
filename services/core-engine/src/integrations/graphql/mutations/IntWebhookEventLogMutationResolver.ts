export const IntWebhookEventLogMutationTypeDefs = `
  input CreateIntWebhookEventLogInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntWebhookEventLog(input: CreateIntWebhookEventLogInput!): IntWebhookEventLog!
    deleteIntWebhookEventLog(id: ID!): Boolean!
  }
`;

export const IntWebhookEventLogMutationResolvers = {
  Mutation: {
    createIntWebhookEventLog: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntWebhookEventLog: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
