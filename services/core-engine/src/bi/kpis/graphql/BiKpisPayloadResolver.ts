export const BiKpisPayloadGqlTypeDefs = `
  type BiKpisPayload {
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
    getBiKpisPayload(id: ID!): BiKpisPayload
    listBiKpisPayloads(tenantId: String!, limit: Int): [BiKpisPayload!]!
  }

  extend type Mutation {
    createBiKpisPayload(tenantId: String!, code: String!, name: String!): BiKpisPayload!
    deleteBiKpisPayload(id: ID!): Boolean!
  }
`;

export const BiKpisPayloadGqlResolvers = {
  Query: {
    getBiKpisPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
