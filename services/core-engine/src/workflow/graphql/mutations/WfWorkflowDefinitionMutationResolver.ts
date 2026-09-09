export const WfWorkflowDefinitionMutationTypeDefs = `
  input CreateWfWorkflowDefinitionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfWorkflowDefinition(input: CreateWfWorkflowDefinitionInput!): WfWorkflowDefinition!
    deleteWfWorkflowDefinition(id: ID!): Boolean!
  }
`;

export const WfWorkflowDefinitionMutationResolvers = {
  Mutation: {
    createWfWorkflowDefinition: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfWorkflowDefinition: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
