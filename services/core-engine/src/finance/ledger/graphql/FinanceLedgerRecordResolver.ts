export const FinanceLedgerRecordGqlTypeDefs = `
  type FinanceLedgerRecord {
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
    getFinanceLedgerRecord(id: ID!): FinanceLedgerRecord
    listFinanceLedgerRecords(tenantId: String!, limit: Int): [FinanceLedgerRecord!]!
  }

  extend type Mutation {
    createFinanceLedgerRecord(tenantId: String!, code: String!, name: String!): FinanceLedgerRecord!
    deleteFinanceLedgerRecord(id: ID!): Boolean!
  }
`;

export const FinanceLedgerRecordGqlResolvers = {
  Query: {
    getFinanceLedgerRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
