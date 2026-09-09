export const HrDepartmentsTransactionGqlTypeDefs = `
  type HrDepartmentsTransaction {
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
    getHrDepartmentsTransaction(id: ID!): HrDepartmentsTransaction
    listHrDepartmentsTransactions(tenantId: String!, limit: Int): [HrDepartmentsTransaction!]!
  }

  extend type Mutation {
    createHrDepartmentsTransaction(tenantId: String!, code: String!, name: String!): HrDepartmentsTransaction!
    deleteHrDepartmentsTransaction(id: ID!): Boolean!
  }
`;

export const HrDepartmentsTransactionGqlResolvers = {
  Query: {
    getHrDepartmentsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
