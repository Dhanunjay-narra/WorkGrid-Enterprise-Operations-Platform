export const BiWidgetsPolicyGqlTypeDefs = `
  type BiWidgetsPolicy {
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
    getBiWidgetsPolicy(id: ID!): BiWidgetsPolicy
    listBiWidgetsPolicys(tenantId: String!, limit: Int): [BiWidgetsPolicy!]!
  }

  extend type Mutation {
    createBiWidgetsPolicy(tenantId: String!, code: String!, name: String!): BiWidgetsPolicy!
    deleteBiWidgetsPolicy(id: ID!): Boolean!
  }
`;

export const BiWidgetsPolicyGqlResolvers = {
  Query: {
    getBiWidgetsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
