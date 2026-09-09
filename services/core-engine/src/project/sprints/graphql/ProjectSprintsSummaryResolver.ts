export const ProjectSprintsSummaryGqlTypeDefs = `
  type ProjectSprintsSummary {
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
    getProjectSprintsSummary(id: ID!): ProjectSprintsSummary
    listProjectSprintsSummarys(tenantId: String!, limit: Int): [ProjectSprintsSummary!]!
  }

  extend type Mutation {
    createProjectSprintsSummary(tenantId: String!, code: String!, name: String!): ProjectSprintsSummary!
    deleteProjectSprintsSummary(id: ID!): Boolean!
  }
`;

export const ProjectSprintsSummaryGqlResolvers = {
  Query: {
    getProjectSprintsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
