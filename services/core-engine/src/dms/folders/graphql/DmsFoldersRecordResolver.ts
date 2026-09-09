export const DmsFoldersRecordGqlTypeDefs = `
  type DmsFoldersRecord {
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
    getDmsFoldersRecord(id: ID!): DmsFoldersRecord
    listDmsFoldersRecords(tenantId: String!, limit: Int): [DmsFoldersRecord!]!
  }

  extend type Mutation {
    createDmsFoldersRecord(tenantId: String!, code: String!, name: String!): DmsFoldersRecord!
    deleteDmsFoldersRecord(id: ID!): Boolean!
  }
`;

export const DmsFoldersRecordGqlResolvers = {
  Query: {
    getDmsFoldersRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
