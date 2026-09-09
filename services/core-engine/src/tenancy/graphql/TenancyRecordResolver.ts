export const TenancyRecordGqlTypeDefs = `
  type TenancyRecord {
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
    getTenancyRecord(id: ID!): TenancyRecord
    listTenancyRecords(tenantId: String!, limit: Int): [TenancyRecord!]!
  }

  extend type Mutation {
    createTenancyRecord(tenantId: String!, code: String!, name: String!): TenancyRecord!
    deleteTenancyRecord(id: ID!): Boolean!
  }
`;

export const TenancyRecordGqlResolvers = {
  Query: {
    getTenancyRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
