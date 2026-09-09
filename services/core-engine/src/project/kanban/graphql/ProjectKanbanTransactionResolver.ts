export const ProjectKanbanTransactionGqlTypeDefs = `
  type ProjectKanbanTransaction {
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
    getProjectKanbanTransaction(id: ID!): ProjectKanbanTransaction
    listProjectKanbanTransactions(tenantId: String!, limit: Int): [ProjectKanbanTransaction!]!
  }

  extend type Mutation {
    createProjectKanbanTransaction(tenantId: String!, code: String!, name: String!): ProjectKanbanTransaction!
    deleteProjectKanbanTransaction(id: ID!): Boolean!
  }
`;

export const ProjectKanbanTransactionGqlResolvers = {
  Query: {
    getProjectKanbanTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
