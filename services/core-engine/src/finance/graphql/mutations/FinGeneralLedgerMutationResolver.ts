export const FinGeneralLedgerMutationTypeDefs = `
  input CreateFinGeneralLedgerInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinGeneralLedger(input: CreateFinGeneralLedgerInput!): FinGeneralLedger!
    deleteFinGeneralLedger(id: ID!): Boolean!
  }
`;

export const FinGeneralLedgerMutationResolvers = {
  Mutation: {
    createFinGeneralLedger: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinGeneralLedger: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
