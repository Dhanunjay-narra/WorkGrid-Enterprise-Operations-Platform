export const ProjectGanttSummaryGqlTypeDefs = `
  type ProjectGanttSummary {
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
    getProjectGanttSummary(id: ID!): ProjectGanttSummary
    listProjectGanttSummarys(tenantId: String!, limit: Int): [ProjectGanttSummary!]!
  }

  extend type Mutation {
    createProjectGanttSummary(tenantId: String!, code: String!, name: String!): ProjectGanttSummary!
    deleteProjectGanttSummary(id: ID!): Boolean!
  }
`;

export const ProjectGanttSummaryGqlResolvers = {
  Query: {
    getProjectGanttSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
