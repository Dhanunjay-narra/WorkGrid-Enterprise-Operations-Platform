export const FinanceBankingStateGqlTypeDefs = `
  type FinanceBankingState {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getFinanceBankingState(id: ID!): FinanceBankingState
    listFinanceBankingStates(tenantId: String!, limit: Int): [FinanceBankingState!]!
  }

  extend type Mutation {
    createFinanceBankingState(tenantId: String!, code: String!, name: String!): FinanceBankingState!
    deleteFinanceBankingState(id: ID!): Boolean!
  }
`;

export const FinanceBankingStateGqlResolvers = {
  Query: {
    getFinanceBankingState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
