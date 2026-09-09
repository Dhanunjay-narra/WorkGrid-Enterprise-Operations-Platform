export const SupportAgentsPayloadGqlTypeDefs = `
  type SupportAgentsPayload {
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
    getSupportAgentsPayload(id: ID!): SupportAgentsPayload
    listSupportAgentsPayloads(tenantId: String!, limit: Int): [SupportAgentsPayload!]!
  }

  extend type Mutation {
    createSupportAgentsPayload(tenantId: String!, code: String!, name: String!): SupportAgentsPayload!
    deleteSupportAgentsPayload(id: ID!): Boolean!
  }
`;

export const SupportAgentsPayloadGqlResolvers = {
  Query: {
    getSupportAgentsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
