export const ProjectEpicsMappingGqlTypeDefs = `
  type ProjectEpicsMapping {
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
    getProjectEpicsMapping(id: ID!): ProjectEpicsMapping
    listProjectEpicsMappings(tenantId: String!, limit: Int): [ProjectEpicsMapping!]!
  }

  extend type Mutation {
    createProjectEpicsMapping(tenantId: String!, code: String!, name: String!): ProjectEpicsMapping!
    deleteProjectEpicsMapping(id: ID!): Boolean!
  }
`;

export const ProjectEpicsMappingGqlResolvers = {
  Query: {
    getProjectEpicsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
