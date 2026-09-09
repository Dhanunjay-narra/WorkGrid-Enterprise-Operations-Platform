export const ObsLoggingMappingGqlTypeDefs = `
  type ObsLoggingMapping {
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
    getObsLoggingMapping(id: ID!): ObsLoggingMapping
    listObsLoggingMappings(tenantId: String!, limit: Int): [ObsLoggingMapping!]!
  }

  extend type Mutation {
    createObsLoggingMapping(tenantId: String!, code: String!, name: String!): ObsLoggingMapping!
    deleteObsLoggingMapping(id: ID!): Boolean!
  }
`;

export const ObsLoggingMappingGqlResolvers = {
  Query: {
    getObsLoggingMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
