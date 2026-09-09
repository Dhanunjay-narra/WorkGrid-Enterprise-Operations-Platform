export const CommDigestPayloadGqlTypeDefs = `
  type CommDigestPayload {
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
    getCommDigestPayload(id: ID!): CommDigestPayload
    listCommDigestPayloads(tenantId: String!, limit: Int): [CommDigestPayload!]!
  }

  extend type Mutation {
    createCommDigestPayload(tenantId: String!, code: String!, name: String!): CommDigestPayload!
    deleteCommDigestPayload(id: ID!): Boolean!
  }
`;

export const CommDigestPayloadGqlResolvers = {
  Query: {
    getCommDigestPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
