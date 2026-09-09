export const DmsFoldersPolicyGqlTypeDefs = `
  type DmsFoldersPolicy {
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
    getDmsFoldersPolicy(id: ID!): DmsFoldersPolicy
    listDmsFoldersPolicys(tenantId: String!, limit: Int): [DmsFoldersPolicy!]!
  }

  extend type Mutation {
    createDmsFoldersPolicy(tenantId: String!, code: String!, name: String!): DmsFoldersPolicy!
    deleteDmsFoldersPolicy(id: ID!): Boolean!
  }
`;

export const DmsFoldersPolicyGqlResolvers = {
  Query: {
    getDmsFoldersPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
