export const DmsExportBatchGqlTypeDefs = `
  type DmsExportBatch {
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
    getDmsExportBatch(id: ID!): DmsExportBatch
    listDmsExportBatchs(tenantId: String!, limit: Int): [DmsExportBatch!]!
  }

  extend type Mutation {
    createDmsExportBatch(tenantId: String!, code: String!, name: String!): DmsExportBatch!
    deleteDmsExportBatch(id: ID!): Boolean!
  }
`;

export const DmsExportBatchGqlResolvers = {
  Query: {
    getDmsExportBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
