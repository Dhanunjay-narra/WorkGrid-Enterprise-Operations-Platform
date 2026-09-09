export const ProjectRisksTransactionGqlTypeDefs = `
  type ProjectRisksTransaction {
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
    getProjectRisksTransaction(id: ID!): ProjectRisksTransaction
    listProjectRisksTransactions(tenantId: String!, limit: Int): [ProjectRisksTransaction!]!
  }

  extend type Mutation {
    createProjectRisksTransaction(tenantId: String!, code: String!, name: String!): ProjectRisksTransaction!
    deleteProjectRisksTransaction(id: ID!): Boolean!
  }
`;

export const ProjectRisksTransactionGqlResolvers = {
  Query: {
    getProjectRisksTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
