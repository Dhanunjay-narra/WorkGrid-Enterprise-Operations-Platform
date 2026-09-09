export const FinFiscalYearMutationTypeDefs = `
  input CreateFinFiscalYearInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinFiscalYear(input: CreateFinFiscalYearInput!): FinFiscalYear!
    deleteFinFiscalYear(id: ID!): Boolean!
  }
`;

export const FinFiscalYearMutationResolvers = {
  Mutation: {
    createFinFiscalYear: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinFiscalYear: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
