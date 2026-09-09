export const FinanceLedgerMappingGqlTypeDefs = `
  type FinanceLedgerMapping {
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
    getFinanceLedgerMapping(id: ID!): FinanceLedgerMapping
    listFinanceLedgerMappings(tenantId: String!, limit: Int): [FinanceLedgerMapping!]!
  }

  extend type Mutation {
    createFinanceLedgerMapping(tenantId: String!, code: String!, name: String!): FinanceLedgerMapping!
    deleteFinanceLedgerMapping(id: ID!): Boolean!
  }
`;

export const FinanceLedgerMappingGqlResolvers = {
  Query: {
    getFinanceLedgerMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
