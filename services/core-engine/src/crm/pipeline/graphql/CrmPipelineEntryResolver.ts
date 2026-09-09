export const CrmPipelineEntryGqlTypeDefs = `
  type CrmPipelineEntry {
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
    getCrmPipelineEntry(id: ID!): CrmPipelineEntry
    listCrmPipelineEntrys(tenantId: String!, limit: Int): [CrmPipelineEntry!]!
  }

  extend type Mutation {
    createCrmPipelineEntry(tenantId: String!, code: String!, name: String!): CrmPipelineEntry!
    deleteCrmPipelineEntry(id: ID!): Boolean!
  }
`;

export const CrmPipelineEntryGqlResolvers = {
  Query: {
    getCrmPipelineEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
