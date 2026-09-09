export const BiForecastsPolicyGqlTypeDefs = `
  type BiForecastsPolicy {
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
    getBiForecastsPolicy(id: ID!): BiForecastsPolicy
    listBiForecastsPolicys(tenantId: String!, limit: Int): [BiForecastsPolicy!]!
  }

  extend type Mutation {
    createBiForecastsPolicy(tenantId: String!, code: String!, name: String!): BiForecastsPolicy!
    deleteBiForecastsPolicy(id: ID!): Boolean!
  }
`;

export const BiForecastsPolicyGqlResolvers = {
  Query: {
    getBiForecastsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
