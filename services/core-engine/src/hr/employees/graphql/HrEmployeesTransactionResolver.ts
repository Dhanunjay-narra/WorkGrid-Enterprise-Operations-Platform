export const HrEmployeesTransactionGqlTypeDefs = `
  type HrEmployeesTransaction {
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
    getHrEmployeesTransaction(id: ID!): HrEmployeesTransaction
    listHrEmployeesTransactions(tenantId: String!, limit: Int): [HrEmployeesTransaction!]!
  }

  extend type Mutation {
    createHrEmployeesTransaction(tenantId: String!, code: String!, name: String!): HrEmployeesTransaction!
    deleteHrEmployeesTransaction(id: ID!): Boolean!
  }
`;

export const HrEmployeesTransactionGqlResolvers = {
  Query: {
    getHrEmployeesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
