export const CommPresencePayloadGqlTypeDefs = `
  type CommPresencePayload {
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
    getCommPresencePayload(id: ID!): CommPresencePayload
    listCommPresencePayloads(tenantId: String!, limit: Int): [CommPresencePayload!]!
  }

  extend type Mutation {
    createCommPresencePayload(tenantId: String!, code: String!, name: String!): CommPresencePayload!
    deleteCommPresencePayload(id: ID!): Boolean!
  }
`;

export const CommPresencePayloadGqlResolvers = {
  Query: {
    getCommPresencePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresencePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
