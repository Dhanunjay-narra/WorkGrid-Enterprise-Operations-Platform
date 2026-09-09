export const WfNodeExecutionLogMutationTypeDefs = `
  input CreateWfNodeExecutionLogInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfNodeExecutionLog(input: CreateWfNodeExecutionLogInput!): WfNodeExecutionLog!
    deleteWfNodeExecutionLog(id: ID!): Boolean!
  }
`;

export const WfNodeExecutionLogMutationResolvers = {
  Mutation: {
    createWfNodeExecutionLog: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfNodeExecutionLog: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
