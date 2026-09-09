export const FinanceTaxesSnapshotGqlTypeDefs = `
  type FinanceTaxesSnapshot {
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
    getFinanceTaxesSnapshot(id: ID!): FinanceTaxesSnapshot
    listFinanceTaxesSnapshots(tenantId: String!, limit: Int): [FinanceTaxesSnapshot!]!
  }

  extend type Mutation {
    createFinanceTaxesSnapshot(tenantId: String!, code: String!, name: String!): FinanceTaxesSnapshot!
    deleteFinanceTaxesSnapshot(id: ID!): Boolean!
  }
`;

export const FinanceTaxesSnapshotGqlResolvers = {
  Query: {
    getFinanceTaxesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
