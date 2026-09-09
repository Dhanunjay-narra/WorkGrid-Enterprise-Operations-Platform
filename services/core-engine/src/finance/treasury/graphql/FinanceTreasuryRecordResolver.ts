export const FinanceTreasuryRecordGqlTypeDefs = `
  type FinanceTreasuryRecord {
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
    getFinanceTreasuryRecord(id: ID!): FinanceTreasuryRecord
    listFinanceTreasuryRecords(tenantId: String!, limit: Int): [FinanceTreasuryRecord!]!
  }

  extend type Mutation {
    createFinanceTreasuryRecord(tenantId: String!, code: String!, name: String!): FinanceTreasuryRecord!
    deleteFinanceTreasuryRecord(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryRecordGqlResolvers = {
  Query: {
    getFinanceTreasuryRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
