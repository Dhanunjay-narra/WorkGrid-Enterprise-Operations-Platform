export const SupportSlaMappingGqlTypeDefs = `
  type SupportSlaMapping {
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
    getSupportSlaMapping(id: ID!): SupportSlaMapping
    listSupportSlaMappings(tenantId: String!, limit: Int): [SupportSlaMapping!]!
  }

  extend type Mutation {
    createSupportSlaMapping(tenantId: String!, code: String!, name: String!): SupportSlaMapping!
    deleteSupportSlaMapping(id: ID!): Boolean!
  }
`;

export const SupportSlaMappingGqlResolvers = {
  Query: {
    getSupportSlaMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
