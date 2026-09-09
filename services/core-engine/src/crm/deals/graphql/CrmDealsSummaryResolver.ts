export const CrmDealsSummaryGqlTypeDefs = `
  type CrmDealsSummary {
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
    getCrmDealsSummary(id: ID!): CrmDealsSummary
    listCrmDealsSummarys(tenantId: String!, limit: Int): [CrmDealsSummary!]!
  }

  extend type Mutation {
    createCrmDealsSummary(tenantId: String!, code: String!, name: String!): CrmDealsSummary!
    deleteCrmDealsSummary(id: ID!): Boolean!
  }
`;

export const CrmDealsSummaryGqlResolvers = {
  Query: {
    getCrmDealsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
