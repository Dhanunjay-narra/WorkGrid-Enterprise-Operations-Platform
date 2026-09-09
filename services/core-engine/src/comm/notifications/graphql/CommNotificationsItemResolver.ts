export const CommNotificationsItemGqlTypeDefs = `
  type CommNotificationsItem {
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
    getCommNotificationsItem(id: ID!): CommNotificationsItem
    listCommNotificationsItems(tenantId: String!, limit: Int): [CommNotificationsItem!]!
  }

  extend type Mutation {
    createCommNotificationsItem(tenantId: String!, code: String!, name: String!): CommNotificationsItem!
    deleteCommNotificationsItem(id: ID!): Boolean!
  }
`;

export const CommNotificationsItemGqlResolvers = {
  Query: {
    getCommNotificationsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
