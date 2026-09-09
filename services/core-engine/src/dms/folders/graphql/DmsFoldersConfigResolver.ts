export const DmsFoldersConfigGqlTypeDefs = `
  type DmsFoldersConfig {
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
    getDmsFoldersConfig(id: ID!): DmsFoldersConfig
    listDmsFoldersConfigs(tenantId: String!, limit: Int): [DmsFoldersConfig!]!
  }

  extend type Mutation {
    createDmsFoldersConfig(tenantId: String!, code: String!, name: String!): DmsFoldersConfig!
    deleteDmsFoldersConfig(id: ID!): Boolean!
  }
`;

export const DmsFoldersConfigGqlResolvers = {
  Query: {
    getDmsFoldersConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
