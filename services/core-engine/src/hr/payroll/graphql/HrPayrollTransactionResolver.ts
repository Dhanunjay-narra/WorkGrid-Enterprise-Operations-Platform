export const HrPayrollTransactionGqlTypeDefs = `
  type HrPayrollTransaction {
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
    getHrPayrollTransaction(id: ID!): HrPayrollTransaction
    listHrPayrollTransactions(tenantId: String!, limit: Int): [HrPayrollTransaction!]!
  }

  extend type Mutation {
    createHrPayrollTransaction(tenantId: String!, code: String!, name: String!): HrPayrollTransaction!
    deleteHrPayrollTransaction(id: ID!): Boolean!
  }
`;

export const HrPayrollTransactionGqlResolvers = {
  Query: {
    getHrPayrollTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
