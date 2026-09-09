export const DmsFoldersThresholdGqlTypeDefs = `
  type DmsFoldersThreshold {
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
    getDmsFoldersThreshold(id: ID!): DmsFoldersThreshold
    listDmsFoldersThresholds(tenantId: String!, limit: Int): [DmsFoldersThreshold!]!
  }

  extend type Mutation {
    createDmsFoldersThreshold(tenantId: String!, code: String!, name: String!): DmsFoldersThreshold!
    deleteDmsFoldersThreshold(id: ID!): Boolean!
  }
`;

export const DmsFoldersThresholdGqlResolvers = {
  Query: {
    getDmsFoldersThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
