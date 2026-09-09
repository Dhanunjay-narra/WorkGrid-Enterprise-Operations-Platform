export const BiAnomaliesPayloadGqlTypeDefs = `
  type BiAnomaliesPayload {
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
    getBiAnomaliesPayload(id: ID!): BiAnomaliesPayload
    listBiAnomaliesPayloads(tenantId: String!, limit: Int): [BiAnomaliesPayload!]!
  }

  extend type Mutation {
    createBiAnomaliesPayload(tenantId: String!, code: String!, name: String!): BiAnomaliesPayload!
    deleteBiAnomaliesPayload(id: ID!): Boolean!
  }
`;

export const BiAnomaliesPayloadGqlResolvers = {
  Query: {
    getBiAnomaliesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
