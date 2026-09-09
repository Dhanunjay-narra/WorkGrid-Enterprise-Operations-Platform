export const DmsOcrItemGqlTypeDefs = `
  type DmsOcrItem {
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
    getDmsOcrItem(id: ID!): DmsOcrItem
    listDmsOcrItems(tenantId: String!, limit: Int): [DmsOcrItem!]!
  }

  extend type Mutation {
    createDmsOcrItem(tenantId: String!, code: String!, name: String!): DmsOcrItem!
    deleteDmsOcrItem(id: ID!): Boolean!
  }
`;

export const DmsOcrItemGqlResolvers = {
  Query: {
    getDmsOcrItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
