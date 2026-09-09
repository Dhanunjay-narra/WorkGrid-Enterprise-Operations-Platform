export const SupSupportAgentMutationTypeDefs = `
  input CreateSupSupportAgentInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupSupportAgent(input: CreateSupSupportAgentInput!): SupSupportAgent!
    deleteSupSupportAgent(id: ID!): Boolean!
  }
`;

export const SupSupportAgentMutationResolvers = {
  Mutation: {
    createSupSupportAgent: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupSupportAgent: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
