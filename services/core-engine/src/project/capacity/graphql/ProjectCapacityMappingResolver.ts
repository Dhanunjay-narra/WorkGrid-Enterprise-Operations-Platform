export const ProjectCapacityMappingGqlTypeDefs = `
  type ProjectCapacityMapping {
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
    getProjectCapacityMapping(id: ID!): ProjectCapacityMapping
    listProjectCapacityMappings(tenantId: String!, limit: Int): [ProjectCapacityMapping!]!
  }

  extend type Mutation {
    createProjectCapacityMapping(tenantId: String!, code: String!, name: String!): ProjectCapacityMapping!
    deleteProjectCapacityMapping(id: ID!): Boolean!
  }
`;

export const ProjectCapacityMappingGqlResolvers = {
  Query: {
    getProjectCapacityMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
