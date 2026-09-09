export const ProjectRisksSummaryGqlTypeDefs = `
  type ProjectRisksSummary {
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
    getProjectRisksSummary(id: ID!): ProjectRisksSummary
    listProjectRisksSummarys(tenantId: String!, limit: Int): [ProjectRisksSummary!]!
  }

  extend type Mutation {
    createProjectRisksSummary(tenantId: String!, code: String!, name: String!): ProjectRisksSummary!
    deleteProjectRisksSummary(id: ID!): Boolean!
  }
`;

export const ProjectRisksSummaryGqlResolvers = {
  Query: {
    getProjectRisksSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
