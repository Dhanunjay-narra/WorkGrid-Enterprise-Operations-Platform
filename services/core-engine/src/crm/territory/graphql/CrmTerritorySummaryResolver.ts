export const CrmTerritorySummaryGqlTypeDefs = `
  type CrmTerritorySummary {
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
    getCrmTerritorySummary(id: ID!): CrmTerritorySummary
    listCrmTerritorySummarys(tenantId: String!, limit: Int): [CrmTerritorySummary!]!
  }

  extend type Mutation {
    createCrmTerritorySummary(tenantId: String!, code: String!, name: String!): CrmTerritorySummary!
    deleteCrmTerritorySummary(id: ID!): Boolean!
  }
`;

export const CrmTerritorySummaryGqlResolvers = {
  Query: {
    getCrmTerritorySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritorySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
