export const CommThreadsItemGqlTypeDefs = `
  type CommThreadsItem {
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
    getCommThreadsItem(id: ID!): CommThreadsItem
    listCommThreadsItems(tenantId: String!, limit: Int): [CommThreadsItem!]!
  }

  extend type Mutation {
    createCommThreadsItem(tenantId: String!, code: String!, name: String!): CommThreadsItem!
    deleteCommThreadsItem(id: ID!): Boolean!
  }
`;

export const CommThreadsItemGqlResolvers = {
  Query: {
    getCommThreadsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
