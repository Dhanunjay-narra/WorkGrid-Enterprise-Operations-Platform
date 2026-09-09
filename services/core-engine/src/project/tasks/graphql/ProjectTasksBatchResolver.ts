export const ProjectTasksBatchGqlTypeDefs = `
  type ProjectTasksBatch {
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
    getProjectTasksBatch(id: ID!): ProjectTasksBatch
    listProjectTasksBatchs(tenantId: String!, limit: Int): [ProjectTasksBatch!]!
  }

  extend type Mutation {
    createProjectTasksBatch(tenantId: String!, code: String!, name: String!): ProjectTasksBatch!
    deleteProjectTasksBatch(id: ID!): Boolean!
  }
`;

export const ProjectTasksBatchGqlResolvers = {
  Query: {
    getProjectTasksBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
