export const InvStockReservationMutationTypeDefs = `
  input CreateInvStockReservationInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvStockReservation(input: CreateInvStockReservationInput!): InvStockReservation!
    deleteInvStockReservation(id: ID!): Boolean!
  }
`;

export const InvStockReservationMutationResolvers = {
  Mutation: {
    createInvStockReservation: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvStockReservation: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
