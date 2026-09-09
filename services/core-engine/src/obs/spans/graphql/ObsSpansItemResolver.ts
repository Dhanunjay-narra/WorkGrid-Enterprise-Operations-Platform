export const ObsSpansItemGqlTypeDefs = `
  type ObsSpansItem {
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
    getObsSpansItem(id: ID!): ObsSpansItem
    listObsSpansItems(tenantId: String!, limit: Int): [ObsSpansItem!]!
  }

  extend type Mutation {
    createObsSpansItem(tenantId: String!, code: String!, name: String!): ObsSpansItem!
    deleteObsSpansItem(id: ID!): Boolean!
  }
`;

export const ObsSpansItemGqlResolvers = {
  Query: {
    getObsSpansItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
