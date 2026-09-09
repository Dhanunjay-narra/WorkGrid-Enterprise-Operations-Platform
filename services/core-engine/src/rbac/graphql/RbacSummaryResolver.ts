export const RbacSummaryGqlTypeDefs = `
  type RbacSummary {
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
    getRbacSummary(id: ID!): RbacSummary
    listRbacSummarys(tenantId: String!, limit: Int): [RbacSummary!]!
  }

  extend type Mutation {
    createRbacSummary(tenantId: String!, code: String!, name: String!): RbacSummary!
    deleteRbacSummary(id: ID!): Boolean!
  }
`;

export const RbacSummaryGqlResolvers = {
  Query: {
    getRbacSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
