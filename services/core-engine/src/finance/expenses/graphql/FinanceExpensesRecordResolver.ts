export const FinanceExpensesRecordGqlTypeDefs = `
  type FinanceExpensesRecord {
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
    getFinanceExpensesRecord(id: ID!): FinanceExpensesRecord
    listFinanceExpensesRecords(tenantId: String!, limit: Int): [FinanceExpensesRecord!]!
  }

  extend type Mutation {
    createFinanceExpensesRecord(tenantId: String!, code: String!, name: String!): FinanceExpensesRecord!
    deleteFinanceExpensesRecord(id: ID!): Boolean!
  }
`;

export const FinanceExpensesRecordGqlResolvers = {
  Query: {
    getFinanceExpensesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
