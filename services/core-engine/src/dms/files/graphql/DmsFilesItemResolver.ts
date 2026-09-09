export const DmsFilesItemGqlTypeDefs = `
  type DmsFilesItem {
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
    getDmsFilesItem(id: ID!): DmsFilesItem
    listDmsFilesItems(tenantId: String!, limit: Int): [DmsFilesItem!]!
  }

  extend type Mutation {
    createDmsFilesItem(tenantId: String!, code: String!, name: String!): DmsFilesItem!
    deleteDmsFilesItem(id: ID!): Boolean!
  }
`;

export const DmsFilesItemGqlResolvers = {
  Query: {
    getDmsFilesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
