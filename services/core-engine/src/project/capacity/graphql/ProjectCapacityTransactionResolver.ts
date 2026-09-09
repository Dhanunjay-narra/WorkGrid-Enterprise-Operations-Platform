export const ProjectCapacityTransactionGqlTypeDefs = `
  type ProjectCapacityTransaction {
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
    getProjectCapacityTransaction(id: ID!): ProjectCapacityTransaction
    listProjectCapacityTransactions(tenantId: String!, limit: Int): [ProjectCapacityTransaction!]!
  }

  extend type Mutation {
    createProjectCapacityTransaction(tenantId: String!, code: String!, name: String!): ProjectCapacityTransaction!
    deleteProjectCapacityTransaction(id: ID!): Boolean!
  }
`;

export const ProjectCapacityTransactionGqlResolvers = {
  Query: {
    getProjectCapacityTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
