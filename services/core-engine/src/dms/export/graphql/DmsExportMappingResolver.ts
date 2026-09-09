export const DmsExportMappingGqlTypeDefs = `
  type DmsExportMapping {
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
    getDmsExportMapping(id: ID!): DmsExportMapping
    listDmsExportMappings(tenantId: String!, limit: Int): [DmsExportMapping!]!
  }

  extend type Mutation {
    createDmsExportMapping(tenantId: String!, code: String!, name: String!): DmsExportMapping!
    deleteDmsExportMapping(id: ID!): Boolean!
  }
`;

export const DmsExportMappingGqlResolvers = {
  Query: {
    getDmsExportMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
