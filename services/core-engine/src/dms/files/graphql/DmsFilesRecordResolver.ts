export const DmsFilesRecordGqlTypeDefs = `
  type DmsFilesRecord {
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
    getDmsFilesRecord(id: ID!): DmsFilesRecord
    listDmsFilesRecords(tenantId: String!, limit: Int): [DmsFilesRecord!]!
  }

  extend type Mutation {
    createDmsFilesRecord(tenantId: String!, code: String!, name: String!): DmsFilesRecord!
    deleteDmsFilesRecord(id: ID!): Boolean!
  }
`;

export const DmsFilesRecordGqlResolvers = {
  Query: {
    getDmsFilesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
