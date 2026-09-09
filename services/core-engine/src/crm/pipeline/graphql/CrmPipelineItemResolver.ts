export const CrmPipelineItemGqlTypeDefs = `
  type CrmPipelineItem {
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
    getCrmPipelineItem(id: ID!): CrmPipelineItem
    listCrmPipelineItems(tenantId: String!, limit: Int): [CrmPipelineItem!]!
  }

  extend type Mutation {
    createCrmPipelineItem(tenantId: String!, code: String!, name: String!): CrmPipelineItem!
    deleteCrmPipelineItem(id: ID!): Boolean!
  }
`;

export const CrmPipelineItemGqlResolvers = {
  Query: {
    getCrmPipelineItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
