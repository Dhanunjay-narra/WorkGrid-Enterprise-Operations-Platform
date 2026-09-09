export const BiKpisPolicyGqlTypeDefs = `
  type BiKpisPolicy {
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
    getBiKpisPolicy(id: ID!): BiKpisPolicy
    listBiKpisPolicys(tenantId: String!, limit: Int): [BiKpisPolicy!]!
  }

  extend type Mutation {
    createBiKpisPolicy(tenantId: String!, code: String!, name: String!): BiKpisPolicy!
    deleteBiKpisPolicy(id: ID!): Boolean!
  }
`;

export const BiKpisPolicyGqlResolvers = {
  Query: {
    getBiKpisPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
