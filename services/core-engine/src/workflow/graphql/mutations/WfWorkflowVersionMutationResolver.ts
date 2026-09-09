export const WfWorkflowVersionMutationTypeDefs = `
  input CreateWfWorkflowVersionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfWorkflowVersion(input: CreateWfWorkflowVersionInput!): WfWorkflowVersion!
    deleteWfWorkflowVersion(id: ID!): Boolean!
  }
`;

export const WfWorkflowVersionMutationResolvers = {
  Mutation: {
    createWfWorkflowVersion: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfWorkflowVersion: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
