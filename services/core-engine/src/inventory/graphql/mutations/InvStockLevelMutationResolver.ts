export const InvStockLevelMutationTypeDefs = `
  input CreateInvStockLevelInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvStockLevel(input: CreateInvStockLevelInput!): InvStockLevel!
    deleteInvStockLevel(id: ID!): Boolean!
  }
`;

export const InvStockLevelMutationResolvers = {
  Mutation: {
    createInvStockLevel: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvStockLevel: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
