export const SupportQueuesPayloadGqlTypeDefs = `
  type SupportQueuesPayload {
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
    getSupportQueuesPayload(id: ID!): SupportQueuesPayload
    listSupportQueuesPayloads(tenantId: String!, limit: Int): [SupportQueuesPayload!]!
  }

  extend type Mutation {
    createSupportQueuesPayload(tenantId: String!, code: String!, name: String!): SupportQueuesPayload!
    deleteSupportQueuesPayload(id: ID!): Boolean!
  }
`;

export const SupportQueuesPayloadGqlResolvers = {
  Query: {
    getSupportQueuesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
