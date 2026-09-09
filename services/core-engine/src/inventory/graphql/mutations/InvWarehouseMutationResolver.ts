export const InvWarehouseMutationTypeDefs = `
  input CreateInvWarehouseInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvWarehouse(input: CreateInvWarehouseInput!): InvWarehouse!
    deleteInvWarehouse(id: ID!): Boolean!
  }
`;

export const InvWarehouseMutationResolvers = {
  Mutation: {
    createInvWarehouse: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvWarehouse: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
