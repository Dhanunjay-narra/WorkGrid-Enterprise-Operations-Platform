export const DmsFoldersNodeGqlTypeDefs = `
  type DmsFoldersNode {
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
    getDmsFoldersNode(id: ID!): DmsFoldersNode
    listDmsFoldersNodes(tenantId: String!, limit: Int): [DmsFoldersNode!]!
  }

  extend type Mutation {
    createDmsFoldersNode(tenantId: String!, code: String!, name: String!): DmsFoldersNode!
    deleteDmsFoldersNode(id: ID!): Boolean!
  }
`;

export const DmsFoldersNodeGqlResolvers = {
  Query: {
    getDmsFoldersNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
