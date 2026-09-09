export const FinanceForecastSnapshotGqlTypeDefs = `
  type FinanceForecastSnapshot {
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
    getFinanceForecastSnapshot(id: ID!): FinanceForecastSnapshot
    listFinanceForecastSnapshots(tenantId: String!, limit: Int): [FinanceForecastSnapshot!]!
  }

  extend type Mutation {
    createFinanceForecastSnapshot(tenantId: String!, code: String!, name: String!): FinanceForecastSnapshot!
    deleteFinanceForecastSnapshot(id: ID!): Boolean!
  }
`;

export const FinanceForecastSnapshotGqlResolvers = {
  Query: {
    getFinanceForecastSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
