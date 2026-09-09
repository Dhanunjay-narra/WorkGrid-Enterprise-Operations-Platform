export const FinInvoiceItemMutationTypeDefs = `
  input CreateFinInvoiceItemInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinInvoiceItem(input: CreateFinInvoiceItemInput!): FinInvoiceItem!
    deleteFinInvoiceItem(id: ID!): Boolean!
  }
`;

export const FinInvoiceItemMutationResolvers = {
  Mutation: {
    createFinInvoiceItem: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinInvoiceItem: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
