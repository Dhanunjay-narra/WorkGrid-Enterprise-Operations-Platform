export const IntSyncPayloadGqlTypeDefs = `
  type IntSyncPayload {
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
    getIntSyncPayload(id: ID!): IntSyncPayload
    listIntSyncPayloads(tenantId: String!, limit: Int): [IntSyncPayload!]!
  }

  extend type Mutation {
    createIntSyncPayload(tenantId: String!, code: String!, name: String!): IntSyncPayload!
    deleteIntSyncPayload(id: ID!): Boolean!
  }
`;

export const IntSyncPayloadGqlResolvers = {
  Query: {
    getIntSyncPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
