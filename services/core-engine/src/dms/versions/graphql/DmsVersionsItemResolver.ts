export const DmsVersionsItemGqlTypeDefs = `
  type DmsVersionsItem {
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
    getDmsVersionsItem(id: ID!): DmsVersionsItem
    listDmsVersionsItems(tenantId: String!, limit: Int): [DmsVersionsItem!]!
  }

  extend type Mutation {
    createDmsVersionsItem(tenantId: String!, code: String!, name: String!): DmsVersionsItem!
    deleteDmsVersionsItem(id: ID!): Boolean!
  }
`;

export const DmsVersionsItemGqlResolvers = {
  Query: {
    getDmsVersionsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
