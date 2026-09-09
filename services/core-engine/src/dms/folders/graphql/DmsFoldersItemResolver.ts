export const DmsFoldersItemGqlTypeDefs = `
  type DmsFoldersItem {
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
    getDmsFoldersItem(id: ID!): DmsFoldersItem
    listDmsFoldersItems(tenantId: String!, limit: Int): [DmsFoldersItem!]!
  }

  extend type Mutation {
    createDmsFoldersItem(tenantId: String!, code: String!, name: String!): DmsFoldersItem!
    deleteDmsFoldersItem(id: ID!): Boolean!
  }
`;

export const DmsFoldersItemGqlResolvers = {
  Query: {
    getDmsFoldersItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
