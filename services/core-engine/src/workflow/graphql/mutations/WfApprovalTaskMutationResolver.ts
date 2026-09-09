export const WfApprovalTaskMutationTypeDefs = `
  input CreateWfApprovalTaskInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfApprovalTask(input: CreateWfApprovalTaskInput!): WfApprovalTask!
    deleteWfApprovalTask(id: ID!): Boolean!
  }
`;

export const WfApprovalTaskMutationResolvers = {
  Mutation: {
    createWfApprovalTask: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfApprovalTask: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
