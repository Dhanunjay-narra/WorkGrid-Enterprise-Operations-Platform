export const CommCallsItemGqlTypeDefs = `
  type CommCallsItem {
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
    getCommCallsItem(id: ID!): CommCallsItem
    listCommCallsItems(tenantId: String!, limit: Int): [CommCallsItem!]!
  }

  extend type Mutation {
    createCommCallsItem(tenantId: String!, code: String!, name: String!): CommCallsItem!
    deleteCommCallsItem(id: ID!): Boolean!
  }
`;

export const CommCallsItemGqlResolvers = {
  Query: {
    getCommCallsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
