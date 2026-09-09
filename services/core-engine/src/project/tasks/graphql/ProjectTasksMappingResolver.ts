export const ProjectTasksMappingGqlTypeDefs = `
  type ProjectTasksMapping {
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
    getProjectTasksMapping(id: ID!): ProjectTasksMapping
    listProjectTasksMappings(tenantId: String!, limit: Int): [ProjectTasksMapping!]!
  }

  extend type Mutation {
    createProjectTasksMapping(tenantId: String!, code: String!, name: String!): ProjectTasksMapping!
    deleteProjectTasksMapping(id: ID!): Boolean!
  }
`;

export const ProjectTasksMappingGqlResolvers = {
  Query: {
    getProjectTasksMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
