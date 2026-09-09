export const WfWorkflowNodeMutationTypeDefs = `
  input CreateWfWorkflowNodeInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfWorkflowNode(input: CreateWfWorkflowNodeInput!): WfWorkflowNode!
    deleteWfWorkflowNode(id: ID!): Boolean!
  }
`;

export const WfWorkflowNodeMutationResolvers = {
  Mutation: {
    createWfWorkflowNode: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfWorkflowNode: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
