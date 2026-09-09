export const BiWidgetsPayloadGqlTypeDefs = `
  type BiWidgetsPayload {
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
    getBiWidgetsPayload(id: ID!): BiWidgetsPayload
    listBiWidgetsPayloads(tenantId: String!, limit: Int): [BiWidgetsPayload!]!
  }

  extend type Mutation {
    createBiWidgetsPayload(tenantId: String!, code: String!, name: String!): BiWidgetsPayload!
    deleteBiWidgetsPayload(id: ID!): Boolean!
  }
`;

export const BiWidgetsPayloadGqlResolvers = {
  Query: {
    getBiWidgetsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
