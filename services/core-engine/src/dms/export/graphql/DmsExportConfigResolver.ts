export const DmsExportConfigGqlTypeDefs = `
  type DmsExportConfig {
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
    getDmsExportConfig(id: ID!): DmsExportConfig
    listDmsExportConfigs(tenantId: String!, limit: Int): [DmsExportConfig!]!
  }

  extend type Mutation {
    createDmsExportConfig(tenantId: String!, code: String!, name: String!): DmsExportConfig!
    deleteDmsExportConfig(id: ID!): Boolean!
  }
`;

export const DmsExportConfigGqlResolvers = {
  Query: {
    getDmsExportConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
