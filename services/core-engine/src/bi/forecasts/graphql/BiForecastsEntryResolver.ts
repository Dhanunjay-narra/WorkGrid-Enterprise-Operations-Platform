export const BiForecastsEntryGqlTypeDefs = `
  type BiForecastsEntry {
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
    getBiForecastsEntry(id: ID!): BiForecastsEntry
    listBiForecastsEntrys(tenantId: String!, limit: Int): [BiForecastsEntry!]!
  }

  extend type Mutation {
    createBiForecastsEntry(tenantId: String!, code: String!, name: String!): BiForecastsEntry!
    deleteBiForecastsEntry(id: ID!): Boolean!
  }
`;

export const BiForecastsEntryGqlResolvers = {
  Query: {
    getBiForecastsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
