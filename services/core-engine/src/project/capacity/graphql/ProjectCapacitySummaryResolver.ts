export const ProjectCapacitySummaryGqlTypeDefs = `
  type ProjectCapacitySummary {
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
    getProjectCapacitySummary(id: ID!): ProjectCapacitySummary
    listProjectCapacitySummarys(tenantId: String!, limit: Int): [ProjectCapacitySummary!]!
  }

  extend type Mutation {
    createProjectCapacitySummary(tenantId: String!, code: String!, name: String!): ProjectCapacitySummary!
    deleteProjectCapacitySummary(id: ID!): Boolean!
  }
`;

export const ProjectCapacitySummaryGqlResolvers = {
  Query: {
    getProjectCapacitySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacitySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
