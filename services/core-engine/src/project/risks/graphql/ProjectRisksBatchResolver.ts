export const ProjectRisksBatchGqlTypeDefs = `
  type ProjectRisksBatch {
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
    getProjectRisksBatch(id: ID!): ProjectRisksBatch
    listProjectRisksBatchs(tenantId: String!, limit: Int): [ProjectRisksBatch!]!
  }

  extend type Mutation {
    createProjectRisksBatch(tenantId: String!, code: String!, name: String!): ProjectRisksBatch!
    deleteProjectRisksBatch(id: ID!): Boolean!
  }
`;

export const ProjectRisksBatchGqlResolvers = {
  Query: {
    getProjectRisksBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
