export const IntOauthPayloadGqlTypeDefs = `
  type IntOauthPayload {
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
    getIntOauthPayload(id: ID!): IntOauthPayload
    listIntOauthPayloads(tenantId: String!, limit: Int): [IntOauthPayload!]!
  }

  extend type Mutation {
    createIntOauthPayload(tenantId: String!, code: String!, name: String!): IntOauthPayload!
    deleteIntOauthPayload(id: ID!): Boolean!
  }
`;

export const IntOauthPayloadGqlResolvers = {
  Query: {
    getIntOauthPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
