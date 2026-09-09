export const InvPurchaseOrderMutationTypeDefs = `
  input CreateInvPurchaseOrderInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvPurchaseOrder(input: CreateInvPurchaseOrderInput!): InvPurchaseOrder!
    deleteInvPurchaseOrder(id: ID!): Boolean!
  }
`;

export const InvPurchaseOrderMutationResolvers = {
  Mutation: {
    createInvPurchaseOrder: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvPurchaseOrder: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
