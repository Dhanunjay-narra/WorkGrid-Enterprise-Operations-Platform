export const CrmDealsSnapshotGqlTypeDefs = `
  type CrmDealsSnapshot {
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
    getCrmDealsSnapshot(id: ID!): CrmDealsSnapshot
    listCrmDealsSnapshots(tenantId: String!, limit: Int): [CrmDealsSnapshot!]!
  }

  extend type Mutation {
    createCrmDealsSnapshot(tenantId: String!, code: String!, name: String!): CrmDealsSnapshot!
    deleteCrmDealsSnapshot(id: ID!): Boolean!
  }
`;

export const CrmDealsSnapshotGqlResolvers = {
  Query: {
    getCrmDealsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
