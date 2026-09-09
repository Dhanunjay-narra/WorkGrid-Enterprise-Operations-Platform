export const BiWidgetsRecordGqlTypeDefs = `
  type BiWidgetsRecord {
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
    getBiWidgetsRecord(id: ID!): BiWidgetsRecord
    listBiWidgetsRecords(tenantId: String!, limit: Int): [BiWidgetsRecord!]!
  }

  extend type Mutation {
    createBiWidgetsRecord(tenantId: String!, code: String!, name: String!): BiWidgetsRecord!
    deleteBiWidgetsRecord(id: ID!): Boolean!
  }
`;

export const BiWidgetsRecordGqlResolvers = {
  Query: {
    getBiWidgetsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
