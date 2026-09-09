export const ObsProfilingMappingGqlTypeDefs = `
  type ObsProfilingMapping {
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
    getObsProfilingMapping(id: ID!): ObsProfilingMapping
    listObsProfilingMappings(tenantId: String!, limit: Int): [ObsProfilingMapping!]!
  }

  extend type Mutation {
    createObsProfilingMapping(tenantId: String!, code: String!, name: String!): ObsProfilingMapping!
    deleteObsProfilingMapping(id: ID!): Boolean!
  }
`;

export const ObsProfilingMappingGqlResolvers = {
  Query: {
    getObsProfilingMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
