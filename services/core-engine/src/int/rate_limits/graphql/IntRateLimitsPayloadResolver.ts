export const IntRateLimitsPayloadGqlTypeDefs = `
  type IntRateLimitsPayload {
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
    getIntRateLimitsPayload(id: ID!): IntRateLimitsPayload
    listIntRateLimitsPayloads(tenantId: String!, limit: Int): [IntRateLimitsPayload!]!
  }

  extend type Mutation {
    createIntRateLimitsPayload(tenantId: String!, code: String!, name: String!): IntRateLimitsPayload!
    deleteIntRateLimitsPayload(id: ID!): Boolean!
  }
`;

export const IntRateLimitsPayloadGqlResolvers = {
  Query: {
    getIntRateLimitsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
