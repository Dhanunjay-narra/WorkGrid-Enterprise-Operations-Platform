export const BiCohortsPayloadGqlTypeDefs = `
  type BiCohortsPayload {
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
    getBiCohortsPayload(id: ID!): BiCohortsPayload
    listBiCohortsPayloads(tenantId: String!, limit: Int): [BiCohortsPayload!]!
  }

  extend type Mutation {
    createBiCohortsPayload(tenantId: String!, code: String!, name: String!): BiCohortsPayload!
    deleteBiCohortsPayload(id: ID!): Boolean!
  }
`;

export const BiCohortsPayloadGqlResolvers = {
  Query: {
    getBiCohortsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
