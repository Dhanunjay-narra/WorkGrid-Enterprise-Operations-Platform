export const TenancyEntryGqlTypeDefs = `
  type TenancyEntry {
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
    getTenancyEntry(id: ID!): TenancyEntry
    listTenancyEntrys(tenantId: String!, limit: Int): [TenancyEntry!]!
  }

  extend type Mutation {
    createTenancyEntry(tenantId: String!, code: String!, name: String!): TenancyEntry!
    deleteTenancyEntry(id: ID!): Boolean!
  }
`;

export const TenancyEntryGqlResolvers = {
  Query: {
    getTenancyEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
