export const DmsFilesProfileGqlTypeDefs = `
  type DmsFilesProfile {
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
    getDmsFilesProfile(id: ID!): DmsFilesProfile
    listDmsFilesProfiles(tenantId: String!, limit: Int): [DmsFilesProfile!]!
  }

  extend type Mutation {
    createDmsFilesProfile(tenantId: String!, code: String!, name: String!): DmsFilesProfile!
    deleteDmsFilesProfile(id: ID!): Boolean!
  }
`;

export const DmsFilesProfileGqlResolvers = {
  Query: {
    getDmsFilesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
