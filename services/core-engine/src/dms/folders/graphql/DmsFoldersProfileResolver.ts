export const DmsFoldersProfileGqlTypeDefs = `
  type DmsFoldersProfile {
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
    getDmsFoldersProfile(id: ID!): DmsFoldersProfile
    listDmsFoldersProfiles(tenantId: String!, limit: Int): [DmsFoldersProfile!]!
  }

  extend type Mutation {
    createDmsFoldersProfile(tenantId: String!, code: String!, name: String!): DmsFoldersProfile!
    deleteDmsFoldersProfile(id: ID!): Boolean!
  }
`;

export const DmsFoldersProfileGqlResolvers = {
  Query: {
    getDmsFoldersProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
