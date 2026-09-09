export const ProjectEpicsTransactionGqlTypeDefs = `
  type ProjectEpicsTransaction {
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
    getProjectEpicsTransaction(id: ID!): ProjectEpicsTransaction
    listProjectEpicsTransactions(tenantId: String!, limit: Int): [ProjectEpicsTransaction!]!
  }

  extend type Mutation {
    createProjectEpicsTransaction(tenantId: String!, code: String!, name: String!): ProjectEpicsTransaction!
    deleteProjectEpicsTransaction(id: ID!): Boolean!
  }
`;

export const ProjectEpicsTransactionGqlResolvers = {
  Query: {
    getProjectEpicsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
