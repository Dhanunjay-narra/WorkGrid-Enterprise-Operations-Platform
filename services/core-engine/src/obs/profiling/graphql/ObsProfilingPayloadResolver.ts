export const ObsProfilingPayloadGqlTypeDefs = `
  type ObsProfilingPayload {
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
    getObsProfilingPayload(id: ID!): ObsProfilingPayload
    listObsProfilingPayloads(tenantId: String!, limit: Int): [ObsProfilingPayload!]!
  }

  extend type Mutation {
    createObsProfilingPayload(tenantId: String!, code: String!, name: String!): ObsProfilingPayload!
    deleteObsProfilingPayload(id: ID!): Boolean!
  }
`;

export const ObsProfilingPayloadGqlResolvers = {
  Query: {
    getObsProfilingPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
