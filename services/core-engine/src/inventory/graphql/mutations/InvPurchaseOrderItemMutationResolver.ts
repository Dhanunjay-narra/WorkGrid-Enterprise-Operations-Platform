export const InvPurchaseOrderItemMutationTypeDefs = `
  input CreateInvPurchaseOrderItemInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvPurchaseOrderItem(input: CreateInvPurchaseOrderItemInput!): InvPurchaseOrderItem!
    deleteInvPurchaseOrderItem(id: ID!): Boolean!
  }
`;

export const InvPurchaseOrderItemMutationResolvers = {
  Mutation: {
    createInvPurchaseOrderItem: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvPurchaseOrderItem: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
