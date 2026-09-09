export const SupportCsatMappingGqlTypeDefs = `
  type SupportCsatMapping {
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
    getSupportCsatMapping(id: ID!): SupportCsatMapping
    listSupportCsatMappings(tenantId: String!, limit: Int): [SupportCsatMapping!]!
  }

  extend type Mutation {
    createSupportCsatMapping(tenantId: String!, code: String!, name: String!): SupportCsatMapping!
    deleteSupportCsatMapping(id: ID!): Boolean!
  }
`;

export const SupportCsatMappingGqlResolvers = {
  Query: {
    getSupportCsatMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
