export const ObsAlertsTransactionGqlTypeDefs = `
  type ObsAlertsTransaction {
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
    getObsAlertsTransaction(id: ID!): ObsAlertsTransaction
    listObsAlertsTransactions(tenantId: String!, limit: Int): [ObsAlertsTransaction!]!
  }

  extend type Mutation {
    createObsAlertsTransaction(tenantId: String!, code: String!, name: String!): ObsAlertsTransaction!
    deleteObsAlertsTransaction(id: ID!): Boolean!
  }
`;

export const ObsAlertsTransactionGqlResolvers = {
  Query: {
    getObsAlertsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
