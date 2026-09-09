export const SupportSlaPayloadGqlTypeDefs = `
  type SupportSlaPayload {
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
    getSupportSlaPayload(id: ID!): SupportSlaPayload
    listSupportSlaPayloads(tenantId: String!, limit: Int): [SupportSlaPayload!]!
  }

  extend type Mutation {
    createSupportSlaPayload(tenantId: String!, code: String!, name: String!): SupportSlaPayload!
    deleteSupportSlaPayload(id: ID!): Boolean!
  }
`;

export const SupportSlaPayloadGqlResolvers = {
  Query: {
    getSupportSlaPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
