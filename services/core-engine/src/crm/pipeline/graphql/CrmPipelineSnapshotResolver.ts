export const CrmPipelineSnapshotGqlTypeDefs = `
  type CrmPipelineSnapshot {
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
    getCrmPipelineSnapshot(id: ID!): CrmPipelineSnapshot
    listCrmPipelineSnapshots(tenantId: String!, limit: Int): [CrmPipelineSnapshot!]!
  }

  extend type Mutation {
    createCrmPipelineSnapshot(tenantId: String!, code: String!, name: String!): CrmPipelineSnapshot!
    deleteCrmPipelineSnapshot(id: ID!): Boolean!
  }
`;

export const CrmPipelineSnapshotGqlResolvers = {
  Query: {
    getCrmPipelineSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
