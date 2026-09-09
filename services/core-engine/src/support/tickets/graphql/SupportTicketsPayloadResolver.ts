export const SupportTicketsPayloadGqlTypeDefs = `
  type SupportTicketsPayload {
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
    getSupportTicketsPayload(id: ID!): SupportTicketsPayload
    listSupportTicketsPayloads(tenantId: String!, limit: Int): [SupportTicketsPayload!]!
  }

  extend type Mutation {
    createSupportTicketsPayload(tenantId: String!, code: String!, name: String!): SupportTicketsPayload!
    deleteSupportTicketsPayload(id: ID!): Boolean!
  }
`;

export const SupportTicketsPayloadGqlResolvers = {
  Query: {
    getSupportTicketsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
