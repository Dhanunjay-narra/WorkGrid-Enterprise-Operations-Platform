export const ProjectEpicsSummaryGqlTypeDefs = `
  type ProjectEpicsSummary {
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
    getProjectEpicsSummary(id: ID!): ProjectEpicsSummary
    listProjectEpicsSummarys(tenantId: String!, limit: Int): [ProjectEpicsSummary!]!
  }

  extend type Mutation {
    createProjectEpicsSummary(tenantId: String!, code: String!, name: String!): ProjectEpicsSummary!
    deleteProjectEpicsSummary(id: ID!): Boolean!
  }
`;

export const ProjectEpicsSummaryGqlResolvers = {
  Query: {
    getProjectEpicsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
