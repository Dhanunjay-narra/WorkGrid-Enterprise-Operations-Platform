export const ObsMetricsPayloadGqlTypeDefs = `
  type ObsMetricsPayload {
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
    getObsMetricsPayload(id: ID!): ObsMetricsPayload
    listObsMetricsPayloads(tenantId: String!, limit: Int): [ObsMetricsPayload!]!
  }

  extend type Mutation {
    createObsMetricsPayload(tenantId: String!, code: String!, name: String!): ObsMetricsPayload!
    deleteObsMetricsPayload(id: ID!): Boolean!
  }
`;

export const ObsMetricsPayloadGqlResolvers = {
  Query: {
    getObsMetricsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
