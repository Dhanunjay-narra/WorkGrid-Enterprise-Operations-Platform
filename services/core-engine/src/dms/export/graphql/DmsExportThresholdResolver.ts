export const DmsExportThresholdGqlTypeDefs = `
  type DmsExportThreshold {
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
    getDmsExportThreshold(id: ID!): DmsExportThreshold
    listDmsExportThresholds(tenantId: String!, limit: Int): [DmsExportThreshold!]!
  }

  extend type Mutation {
    createDmsExportThreshold(tenantId: String!, code: String!, name: String!): DmsExportThreshold!
    deleteDmsExportThreshold(id: ID!): Boolean!
  }
`;

export const DmsExportThresholdGqlResolvers = {
  Query: {
    getDmsExportThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
