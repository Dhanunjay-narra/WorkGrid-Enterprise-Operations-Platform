export const ProjectRisksThresholdGqlTypeDefs = `
  type ProjectRisksThreshold {
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
    getProjectRisksThreshold(id: ID!): ProjectRisksThreshold
    listProjectRisksThresholds(tenantId: String!, limit: Int): [ProjectRisksThreshold!]!
  }

  extend type Mutation {
    createProjectRisksThreshold(tenantId: String!, code: String!, name: String!): ProjectRisksThreshold!
    deleteProjectRisksThreshold(id: ID!): Boolean!
  }
`;

export const ProjectRisksThresholdGqlResolvers = {
  Query: {
    getProjectRisksThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
