export const FinVendorBillMutationTypeDefs = `
  input CreateFinVendorBillInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinVendorBill(input: CreateFinVendorBillInput!): FinVendorBill!
    deleteFinVendorBill(id: ID!): Boolean!
  }
`;

export const FinVendorBillMutationResolvers = {
  Mutation: {
    createFinVendorBill: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinVendorBill: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
