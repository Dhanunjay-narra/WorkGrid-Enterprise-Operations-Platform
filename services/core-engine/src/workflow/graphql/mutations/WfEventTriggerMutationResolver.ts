export const WfEventTriggerMutationTypeDefs = `
  input CreateWfEventTriggerInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfEventTrigger(input: CreateWfEventTriggerInput!): WfEventTrigger!
    deleteWfEventTrigger(id: ID!): Boolean!
  }
`;

export const WfEventTriggerMutationResolvers = {
  Mutation: {
    createWfEventTrigger: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfEventTrigger: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
