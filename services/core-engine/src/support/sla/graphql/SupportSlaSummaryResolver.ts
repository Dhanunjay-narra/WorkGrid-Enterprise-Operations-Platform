export const SupportSlaSummaryGqlTypeDefs = `
  type SupportSlaSummary {
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
    getSupportSlaSummary(id: ID!): SupportSlaSummary
    listSupportSlaSummarys(tenantId: String!, limit: Int): [SupportSlaSummary!]!
  }

  extend type Mutation {
    createSupportSlaSummary(tenantId: String!, code: String!, name: String!): SupportSlaSummary!
    deleteSupportSlaSummary(id: ID!): Boolean!
  }
`;

export const SupportSlaSummaryGqlResolvers = {
  Query: {
    getSupportSlaSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
