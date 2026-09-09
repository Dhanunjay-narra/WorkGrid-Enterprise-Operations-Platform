export const IntRateLimitsStateGqlTypeDefs = `
  type IntRateLimitsState {
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
    getIntRateLimitsState(id: ID!): IntRateLimitsState
    listIntRateLimitsStates(tenantId: String!, limit: Int): [IntRateLimitsState!]!
  }

  extend type Mutation {
    createIntRateLimitsState(tenantId: String!, code: String!, name: String!): IntRateLimitsState!
    deleteIntRateLimitsState(id: ID!): Boolean!
  }
`;

export const IntRateLimitsStateGqlResolvers = {
  Query: {
    getIntRateLimitsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
