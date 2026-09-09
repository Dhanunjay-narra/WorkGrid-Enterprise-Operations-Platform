export const FinanceTaxesRecordGqlTypeDefs = `
  type FinanceTaxesRecord {
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
    getFinanceTaxesRecord(id: ID!): FinanceTaxesRecord
    listFinanceTaxesRecords(tenantId: String!, limit: Int): [FinanceTaxesRecord!]!
  }

  extend type Mutation {
    createFinanceTaxesRecord(tenantId: String!, code: String!, name: String!): FinanceTaxesRecord!
    deleteFinanceTaxesRecord(id: ID!): Boolean!
  }
`;

export const FinanceTaxesRecordGqlResolvers = {
  Query: {
    getFinanceTaxesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
