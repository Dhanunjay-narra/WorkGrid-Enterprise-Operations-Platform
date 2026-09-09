export const FinLedgerAccountMutationTypeDefs = `
  input CreateFinLedgerAccountInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinLedgerAccount(input: CreateFinLedgerAccountInput!): FinLedgerAccount!
    deleteFinLedgerAccount(id: ID!): Boolean!
  }
`;

export const FinLedgerAccountMutationResolvers = {
  Mutation: {
    createFinLedgerAccount: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinLedgerAccount: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
