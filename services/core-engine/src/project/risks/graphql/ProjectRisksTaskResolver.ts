export const ProjectRisksTaskGqlTypeDefs = `
  type ProjectRisksTask {
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
    getProjectRisksTask(id: ID!): ProjectRisksTask
    listProjectRisksTasks(tenantId: String!, limit: Int): [ProjectRisksTask!]!
  }

  extend type Mutation {
    createProjectRisksTask(tenantId: String!, code: String!, name: String!): ProjectRisksTask!
    deleteProjectRisksTask(id: ID!): Boolean!
  }
`;

export const ProjectRisksTaskGqlResolvers = {
  Query: {
    getProjectRisksTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
