export const BiCohortsPolicyGqlTypeDefs = `
  type BiCohortsPolicy {
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
    getBiCohortsPolicy(id: ID!): BiCohortsPolicy
    listBiCohortsPolicys(tenantId: String!, limit: Int): [BiCohortsPolicy!]!
  }

  extend type Mutation {
    createBiCohortsPolicy(tenantId: String!, code: String!, name: String!): BiCohortsPolicy!
    deleteBiCohortsPolicy(id: ID!): Boolean!
  }
`;

export const BiCohortsPolicyGqlResolvers = {
  Query: {
    getBiCohortsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
