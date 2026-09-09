export const HrAttendanceTransactionGqlTypeDefs = `
  type HrAttendanceTransaction {
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
    getHrAttendanceTransaction(id: ID!): HrAttendanceTransaction
    listHrAttendanceTransactions(tenantId: String!, limit: Int): [HrAttendanceTransaction!]!
  }

  extend type Mutation {
    createHrAttendanceTransaction(tenantId: String!, code: String!, name: String!): HrAttendanceTransaction!
    deleteHrAttendanceTransaction(id: ID!): Boolean!
  }
`;

export const HrAttendanceTransactionGqlResolvers = {
  Query: {
    getHrAttendanceTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
