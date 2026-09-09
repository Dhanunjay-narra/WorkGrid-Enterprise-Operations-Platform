export const ProjectTasksSummaryGqlTypeDefs = `
  type ProjectTasksSummary {
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
    getProjectTasksSummary(id: ID!): ProjectTasksSummary
    listProjectTasksSummarys(tenantId: String!, limit: Int): [ProjectTasksSummary!]!
  }

  extend type Mutation {
    createProjectTasksSummary(tenantId: String!, code: String!, name: String!): ProjectTasksSummary!
    deleteProjectTasksSummary(id: ID!): Boolean!
  }
`;

export const ProjectTasksSummaryGqlResolvers = {
  Query: {
    getProjectTasksSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
