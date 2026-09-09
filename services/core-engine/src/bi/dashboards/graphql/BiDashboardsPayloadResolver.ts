export const BiDashboardsPayloadGqlTypeDefs = `
  type BiDashboardsPayload {
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
    getBiDashboardsPayload(id: ID!): BiDashboardsPayload
    listBiDashboardsPayloads(tenantId: String!, limit: Int): [BiDashboardsPayload!]!
  }

  extend type Mutation {
    createBiDashboardsPayload(tenantId: String!, code: String!, name: String!): BiDashboardsPayload!
    deleteBiDashboardsPayload(id: ID!): Boolean!
  }
`;

export const BiDashboardsPayloadGqlResolvers = {
  Query: {
    getBiDashboardsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
