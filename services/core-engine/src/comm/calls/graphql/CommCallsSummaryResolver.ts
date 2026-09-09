export const CommCallsSummaryGqlTypeDefs = `
  type CommCallsSummary {
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
    getCommCallsSummary(id: ID!): CommCallsSummary
    listCommCallsSummarys(tenantId: String!, limit: Int): [CommCallsSummary!]!
  }

  extend type Mutation {
    createCommCallsSummary(tenantId: String!, code: String!, name: String!): CommCallsSummary!
    deleteCommCallsSummary(id: ID!): Boolean!
  }
`;

export const CommCallsSummaryGqlResolvers = {
  Query: {
    getCommCallsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
