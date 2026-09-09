export const InvTransferOrderMutationTypeDefs = `
  input CreateInvTransferOrderInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvTransferOrder(input: CreateInvTransferOrderInput!): InvTransferOrder!
    deleteInvTransferOrder(id: ID!): Boolean!
  }
`;

export const InvTransferOrderMutationResolvers = {
  Mutation: {
    createInvTransferOrder: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvTransferOrder: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
