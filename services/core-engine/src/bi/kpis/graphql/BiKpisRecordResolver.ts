export const BiKpisRecordGqlTypeDefs = `
  type BiKpisRecord {
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
    getBiKpisRecord(id: ID!): BiKpisRecord
    listBiKpisRecords(tenantId: String!, limit: Int): [BiKpisRecord!]!
  }

  extend type Mutation {
    createBiKpisRecord(tenantId: String!, code: String!, name: String!): BiKpisRecord!
    deleteBiKpisRecord(id: ID!): Boolean!
  }
`;

export const BiKpisRecordGqlResolvers = {
  Query: {
    getBiKpisRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
