export const SupportEscalationPayloadGqlTypeDefs = `
  type SupportEscalationPayload {
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
    getSupportEscalationPayload(id: ID!): SupportEscalationPayload
    listSupportEscalationPayloads(tenantId: String!, limit: Int): [SupportEscalationPayload!]!
  }

  extend type Mutation {
    createSupportEscalationPayload(tenantId: String!, code: String!, name: String!): SupportEscalationPayload!
    deleteSupportEscalationPayload(id: ID!): Boolean!
  }
`;

export const SupportEscalationPayloadGqlResolvers = {
  Query: {
    getSupportEscalationPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
