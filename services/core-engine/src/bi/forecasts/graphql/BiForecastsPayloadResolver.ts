export const BiForecastsPayloadGqlTypeDefs = `
  type BiForecastsPayload {
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
    getBiForecastsPayload(id: ID!): BiForecastsPayload
    listBiForecastsPayloads(tenantId: String!, limit: Int): [BiForecastsPayload!]!
  }

  extend type Mutation {
    createBiForecastsPayload(tenantId: String!, code: String!, name: String!): BiForecastsPayload!
    deleteBiForecastsPayload(id: ID!): Boolean!
  }
`;

export const BiForecastsPayloadGqlResolvers = {
  Query: {
    getBiForecastsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
