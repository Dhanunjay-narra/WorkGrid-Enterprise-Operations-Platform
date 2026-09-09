export const TenancyThresholdGqlTypeDefs = `
  type TenancyThreshold {
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
    getTenancyThreshold(id: ID!): TenancyThreshold
    listTenancyThresholds(tenantId: String!, limit: Int): [TenancyThreshold!]!
  }

  extend type Mutation {
    createTenancyThreshold(tenantId: String!, code: String!, name: String!): TenancyThreshold!
    deleteTenancyThreshold(id: ID!): Boolean!
  }
`;

export const TenancyThresholdGqlResolvers = {
  Query: {
    getTenancyThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
