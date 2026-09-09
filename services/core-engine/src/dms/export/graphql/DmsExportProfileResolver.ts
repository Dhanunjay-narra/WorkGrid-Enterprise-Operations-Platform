export const DmsExportProfileGqlTypeDefs = `
  type DmsExportProfile {
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
    getDmsExportProfile(id: ID!): DmsExportProfile
    listDmsExportProfiles(tenantId: String!, limit: Int): [DmsExportProfile!]!
  }

  extend type Mutation {
    createDmsExportProfile(tenantId: String!, code: String!, name: String!): DmsExportProfile!
    deleteDmsExportProfile(id: ID!): Boolean!
  }
`;

export const DmsExportProfileGqlResolvers = {
  Query: {
    getDmsExportProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
