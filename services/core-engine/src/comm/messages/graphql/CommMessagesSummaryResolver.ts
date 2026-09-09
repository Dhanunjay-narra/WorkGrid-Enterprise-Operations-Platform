export const CommMessagesSummaryGqlTypeDefs = `
  type CommMessagesSummary {
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
    getCommMessagesSummary(id: ID!): CommMessagesSummary
    listCommMessagesSummarys(tenantId: String!, limit: Int): [CommMessagesSummary!]!
  }

  extend type Mutation {
    createCommMessagesSummary(tenantId: String!, code: String!, name: String!): CommMessagesSummary!
    deleteCommMessagesSummary(id: ID!): Boolean!
  }
`;

export const CommMessagesSummaryGqlResolvers = {
  Query: {
    getCommMessagesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
