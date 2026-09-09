export const ProjectCapacityEntryGqlTypeDefs = `
  type ProjectCapacityEntry {
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
    getProjectCapacityEntry(id: ID!): ProjectCapacityEntry
    listProjectCapacityEntrys(tenantId: String!, limit: Int): [ProjectCapacityEntry!]!
  }

  extend type Mutation {
    createProjectCapacityEntry(tenantId: String!, code: String!, name: String!): ProjectCapacityEntry!
    deleteProjectCapacityEntry(id: ID!): Boolean!
  }
`;

export const ProjectCapacityEntryGqlResolvers = {
  Query: {
    getProjectCapacityEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
