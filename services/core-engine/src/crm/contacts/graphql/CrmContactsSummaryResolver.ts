export const CrmContactsSummaryGqlTypeDefs = `
  type CrmContactsSummary {
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
    getCrmContactsSummary(id: ID!): CrmContactsSummary
    listCrmContactsSummarys(tenantId: String!, limit: Int): [CrmContactsSummary!]!
  }

  extend type Mutation {
    createCrmContactsSummary(tenantId: String!, code: String!, name: String!): CrmContactsSummary!
    deleteCrmContactsSummary(id: ID!): Boolean!
  }
`;

export const CrmContactsSummaryGqlResolvers = {
  Query: {
    getCrmContactsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmContactsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
