export const CrmLeadsSummaryGqlTypeDefs = `
  type CrmLeadsSummary {
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
    getCrmLeadsSummary(id: ID!): CrmLeadsSummary
    listCrmLeadsSummarys(tenantId: String!, limit: Int): [CrmLeadsSummary!]!
  }

  extend type Mutation {
    createCrmLeadsSummary(tenantId: String!, code: String!, name: String!): CrmLeadsSummary!
    deleteCrmLeadsSummary(id: ID!): Boolean!
  }
`;

export const CrmLeadsSummaryGqlResolvers = {
  Query: {
    getCrmLeadsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
