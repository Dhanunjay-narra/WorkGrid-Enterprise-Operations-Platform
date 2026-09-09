export const ProjectGanttTransactionGqlTypeDefs = `
  type ProjectGanttTransaction {
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
    getProjectGanttTransaction(id: ID!): ProjectGanttTransaction
    listProjectGanttTransactions(tenantId: String!, limit: Int): [ProjectGanttTransaction!]!
  }

  extend type Mutation {
    createProjectGanttTransaction(tenantId: String!, code: String!, name: String!): ProjectGanttTransaction!
    deleteProjectGanttTransaction(id: ID!): Boolean!
  }
`;

export const ProjectGanttTransactionGqlResolvers = {
  Query: {
    getProjectGanttTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
