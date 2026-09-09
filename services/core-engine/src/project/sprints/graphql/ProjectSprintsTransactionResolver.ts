export const ProjectSprintsTransactionGqlTypeDefs = `
  type ProjectSprintsTransaction {
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
    getProjectSprintsTransaction(id: ID!): ProjectSprintsTransaction
    listProjectSprintsTransactions(tenantId: String!, limit: Int): [ProjectSprintsTransaction!]!
  }

  extend type Mutation {
    createProjectSprintsTransaction(tenantId: String!, code: String!, name: String!): ProjectSprintsTransaction!
    deleteProjectSprintsTransaction(id: ID!): Boolean!
  }
`;

export const ProjectSprintsTransactionGqlResolvers = {
  Query: {
    getProjectSprintsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
