export const DmsExportPayloadGqlTypeDefs = `
  type DmsExportPayload {
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
    getDmsExportPayload(id: ID!): DmsExportPayload
    listDmsExportPayloads(tenantId: String!, limit: Int): [DmsExportPayload!]!
  }

  extend type Mutation {
    createDmsExportPayload(tenantId: String!, code: String!, name: String!): DmsExportPayload!
    deleteDmsExportPayload(id: ID!): Boolean!
  }
`;

export const DmsExportPayloadGqlResolvers = {
  Query: {
    getDmsExportPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
