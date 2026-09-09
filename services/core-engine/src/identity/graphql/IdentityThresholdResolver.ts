export const IdentityThresholdGqlTypeDefs = `
  type IdentityThreshold {
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
    getIdentityThreshold(id: ID!): IdentityThreshold
    listIdentityThresholds(tenantId: String!, limit: Int): [IdentityThreshold!]!
  }

  extend type Mutation {
    createIdentityThreshold(tenantId: String!, code: String!, name: String!): IdentityThreshold!
    deleteIdentityThreshold(id: ID!): Boolean!
  }
`;

export const IdentityThresholdGqlResolvers = {
  Query: {
    getIdentityThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
