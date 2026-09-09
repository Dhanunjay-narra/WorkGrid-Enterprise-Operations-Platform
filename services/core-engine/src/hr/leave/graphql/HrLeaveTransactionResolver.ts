export const HrLeaveTransactionGqlTypeDefs = `
  type HrLeaveTransaction {
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
    getHrLeaveTransaction(id: ID!): HrLeaveTransaction
    listHrLeaveTransactions(tenantId: String!, limit: Int): [HrLeaveTransaction!]!
  }

  extend type Mutation {
    createHrLeaveTransaction(tenantId: String!, code: String!, name: String!): HrLeaveTransaction!
    deleteHrLeaveTransaction(id: ID!): Boolean!
  }
`;

export const HrLeaveTransactionGqlResolvers = {
  Query: {
    getHrLeaveTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
