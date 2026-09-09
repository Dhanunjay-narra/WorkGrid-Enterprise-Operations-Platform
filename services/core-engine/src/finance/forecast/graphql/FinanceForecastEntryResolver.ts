export const FinanceForecastEntryGqlTypeDefs = `
  type FinanceForecastEntry {
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
    getFinanceForecastEntry(id: ID!): FinanceForecastEntry
    listFinanceForecastEntrys(tenantId: String!, limit: Int): [FinanceForecastEntry!]!
  }

  extend type Mutation {
    createFinanceForecastEntry(tenantId: String!, code: String!, name: String!): FinanceForecastEntry!
    deleteFinanceForecastEntry(id: ID!): Boolean!
  }
`;

export const FinanceForecastEntryGqlResolvers = {
  Query: {
    getFinanceForecastEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
