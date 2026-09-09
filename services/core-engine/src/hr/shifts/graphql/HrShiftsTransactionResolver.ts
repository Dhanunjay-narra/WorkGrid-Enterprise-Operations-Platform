export const HrShiftsTransactionGqlTypeDefs = `
  type HrShiftsTransaction {
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
    getHrShiftsTransaction(id: ID!): HrShiftsTransaction
    listHrShiftsTransactions(tenantId: String!, limit: Int): [HrShiftsTransaction!]!
  }

  extend type Mutation {
    createHrShiftsTransaction(tenantId: String!, code: String!, name: String!): HrShiftsTransaction!
    deleteHrShiftsTransaction(id: ID!): Boolean!
  }
`;

export const HrShiftsTransactionGqlResolvers = {
  Query: {
    getHrShiftsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
