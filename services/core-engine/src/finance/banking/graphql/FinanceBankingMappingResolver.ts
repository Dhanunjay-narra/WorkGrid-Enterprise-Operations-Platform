export const FinanceBankingMappingGqlTypeDefs = `
  type FinanceBankingMapping {
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
    getFinanceBankingMapping(id: ID!): FinanceBankingMapping
    listFinanceBankingMappings(tenantId: String!, limit: Int): [FinanceBankingMapping!]!
  }

  extend type Mutation {
    createFinanceBankingMapping(tenantId: String!, code: String!, name: String!): FinanceBankingMapping!
    deleteFinanceBankingMapping(id: ID!): Boolean!
  }
`;

export const FinanceBankingMappingGqlResolvers = {
  Query: {
    getFinanceBankingMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
