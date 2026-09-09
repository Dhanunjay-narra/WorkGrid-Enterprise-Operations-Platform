export const CrmAccountsSummaryGqlTypeDefs = `
  type CrmAccountsSummary {
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
    getCrmAccountsSummary(id: ID!): CrmAccountsSummary
    listCrmAccountsSummarys(tenantId: String!, limit: Int): [CrmAccountsSummary!]!
  }

  extend type Mutation {
    createCrmAccountsSummary(tenantId: String!, code: String!, name: String!): CrmAccountsSummary!
    deleteCrmAccountsSummary(id: ID!): Boolean!
  }
`;

export const CrmAccountsSummaryGqlResolvers = {
  Query: {
    getCrmAccountsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
