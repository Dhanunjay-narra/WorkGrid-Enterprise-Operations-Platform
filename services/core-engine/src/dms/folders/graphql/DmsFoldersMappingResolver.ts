export const DmsFoldersMappingGqlTypeDefs = `
  type DmsFoldersMapping {
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
    getDmsFoldersMapping(id: ID!): DmsFoldersMapping
    listDmsFoldersMappings(tenantId: String!, limit: Int): [DmsFoldersMapping!]!
  }

  extend type Mutation {
    createDmsFoldersMapping(tenantId: String!, code: String!, name: String!): DmsFoldersMapping!
    deleteDmsFoldersMapping(id: ID!): Boolean!
  }
`;

export const DmsFoldersMappingGqlResolvers = {
  Query: {
    getDmsFoldersMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
