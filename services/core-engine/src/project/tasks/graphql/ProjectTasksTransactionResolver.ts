export const ProjectTasksTransactionGqlTypeDefs = `
  type ProjectTasksTransaction {
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
    getProjectTasksTransaction(id: ID!): ProjectTasksTransaction
    listProjectTasksTransactions(tenantId: String!, limit: Int): [ProjectTasksTransaction!]!
  }

  extend type Mutation {
    createProjectTasksTransaction(tenantId: String!, code: String!, name: String!): ProjectTasksTransaction!
    deleteProjectTasksTransaction(id: ID!): Boolean!
  }
`;

export const ProjectTasksTransactionGqlResolvers = {
  Query: {
    getProjectTasksTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
