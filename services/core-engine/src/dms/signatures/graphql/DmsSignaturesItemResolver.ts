export const DmsSignaturesItemGqlTypeDefs = `
  type DmsSignaturesItem {
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
    getDmsSignaturesItem(id: ID!): DmsSignaturesItem
    listDmsSignaturesItems(tenantId: String!, limit: Int): [DmsSignaturesItem!]!
  }

  extend type Mutation {
    createDmsSignaturesItem(tenantId: String!, code: String!, name: String!): DmsSignaturesItem!
    deleteDmsSignaturesItem(id: ID!): Boolean!
  }
`;

export const DmsSignaturesItemGqlResolvers = {
  Query: {
    getDmsSignaturesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
