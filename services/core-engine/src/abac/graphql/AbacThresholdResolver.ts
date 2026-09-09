export const AbacThresholdGqlTypeDefs = `
  type AbacThreshold {
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
    getAbacThreshold(id: ID!): AbacThreshold
    listAbacThresholds(tenantId: String!, limit: Int): [AbacThreshold!]!
  }

  extend type Mutation {
    createAbacThreshold(tenantId: String!, code: String!, name: String!): AbacThreshold!
    deleteAbacThreshold(id: ID!): Boolean!
  }
`;

export const AbacThresholdGqlResolvers = {
  Query: {
    getAbacThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
