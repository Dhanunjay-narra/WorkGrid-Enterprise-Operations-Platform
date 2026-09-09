export const ObsSpansMappingGqlTypeDefs = `
  type ObsSpansMapping {
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
    getObsSpansMapping(id: ID!): ObsSpansMapping
    listObsSpansMappings(tenantId: String!, limit: Int): [ObsSpansMapping!]!
  }

  extend type Mutation {
    createObsSpansMapping(tenantId: String!, code: String!, name: String!): ObsSpansMapping!
    deleteObsSpansMapping(id: ID!): Boolean!
  }
`;

export const ObsSpansMappingGqlResolvers = {
  Query: {
    getObsSpansMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
