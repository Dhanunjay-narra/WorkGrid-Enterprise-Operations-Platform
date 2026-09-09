export const ProjectWorkspacesTransactionGqlTypeDefs = `
  type ProjectWorkspacesTransaction {
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
    getProjectWorkspacesTransaction(id: ID!): ProjectWorkspacesTransaction
    listProjectWorkspacesTransactions(tenantId: String!, limit: Int): [ProjectWorkspacesTransaction!]!
  }

  extend type Mutation {
    createProjectWorkspacesTransaction(tenantId: String!, code: String!, name: String!): ProjectWorkspacesTransaction!
    deleteProjectWorkspacesTransaction(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesTransactionGqlResolvers = {
  Query: {
    getProjectWorkspacesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
