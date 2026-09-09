export const CrmPipelineRecordGqlTypeDefs = `
  type CrmPipelineRecord {
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
    getCrmPipelineRecord(id: ID!): CrmPipelineRecord
    listCrmPipelineRecords(tenantId: String!, limit: Int): [CrmPipelineRecord!]!
  }

  extend type Mutation {
    createCrmPipelineRecord(tenantId: String!, code: String!, name: String!): CrmPipelineRecord!
    deleteCrmPipelineRecord(id: ID!): Boolean!
  }
`;

export const CrmPipelineRecordGqlResolvers = {
  Query: {
    getCrmPipelineRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
