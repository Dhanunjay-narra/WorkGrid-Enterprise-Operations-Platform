export const DmsFoldersBatchGqlTypeDefs = `
  type DmsFoldersBatch {
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
    getDmsFoldersBatch(id: ID!): DmsFoldersBatch
    listDmsFoldersBatchs(tenantId: String!, limit: Int): [DmsFoldersBatch!]!
  }

  extend type Mutation {
    createDmsFoldersBatch(tenantId: String!, code: String!, name: String!): DmsFoldersBatch!
    deleteDmsFoldersBatch(id: ID!): Boolean!
  }
`;

export const DmsFoldersBatchGqlResolvers = {
  Query: {
    getDmsFoldersBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
