export const DmsExportRecordGqlTypeDefs = `
  type DmsExportRecord {
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
    getDmsExportRecord(id: ID!): DmsExportRecord
    listDmsExportRecords(tenantId: String!, limit: Int): [DmsExportRecord!]!
  }

  extend type Mutation {
    createDmsExportRecord(tenantId: String!, code: String!, name: String!): DmsExportRecord!
    deleteDmsExportRecord(id: ID!): Boolean!
  }
`;

export const DmsExportRecordGqlResolvers = {
  Query: {
    getDmsExportRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
