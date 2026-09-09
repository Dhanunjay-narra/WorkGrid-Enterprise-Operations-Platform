export const SupportCsatPayloadGqlTypeDefs = `
  type SupportCsatPayload {
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
    getSupportCsatPayload(id: ID!): SupportCsatPayload
    listSupportCsatPayloads(tenantId: String!, limit: Int): [SupportCsatPayload!]!
  }

  extend type Mutation {
    createSupportCsatPayload(tenantId: String!, code: String!, name: String!): SupportCsatPayload!
    deleteSupportCsatPayload(id: ID!): Boolean!
  }
`;

export const SupportCsatPayloadGqlResolvers = {
  Query: {
    getSupportCsatPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
