export const ProjectSprintsMappingGqlTypeDefs = `
  type ProjectSprintsMapping {
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
    getProjectSprintsMapping(id: ID!): ProjectSprintsMapping
    listProjectSprintsMappings(tenantId: String!, limit: Int): [ProjectSprintsMapping!]!
  }

  extend type Mutation {
    createProjectSprintsMapping(tenantId: String!, code: String!, name: String!): ProjectSprintsMapping!
    deleteProjectSprintsMapping(id: ID!): Boolean!
  }
`;

export const ProjectSprintsMappingGqlResolvers = {
  Query: {
    getProjectSprintsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
