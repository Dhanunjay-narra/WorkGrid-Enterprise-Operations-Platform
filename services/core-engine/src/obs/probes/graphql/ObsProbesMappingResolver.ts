export const ObsProbesMappingGqlTypeDefs = `
  type ObsProbesMapping {
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
    getObsProbesMapping(id: ID!): ObsProbesMapping
    listObsProbesMappings(tenantId: String!, limit: Int): [ObsProbesMapping!]!
  }

  extend type Mutation {
    createObsProbesMapping(tenantId: String!, code: String!, name: String!): ObsProbesMapping!
    deleteObsProbesMapping(id: ID!): Boolean!
  }
`;

export const ObsProbesMappingGqlResolvers = {
  Query: {
    getObsProbesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
