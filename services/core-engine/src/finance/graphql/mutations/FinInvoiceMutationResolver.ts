export const FinInvoiceMutationTypeDefs = `
  input CreateFinInvoiceInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinInvoice(input: CreateFinInvoiceInput!): FinInvoice!
    deleteFinInvoice(id: ID!): Boolean!
  }
`;

export const FinInvoiceMutationResolvers = {
  Mutation: {
    createFinInvoice: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinInvoice: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
