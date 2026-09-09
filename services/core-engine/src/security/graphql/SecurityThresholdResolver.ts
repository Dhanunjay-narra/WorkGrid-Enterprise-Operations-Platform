export const SecurityThresholdGqlTypeDefs = `
  type SecurityThreshold {
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
    getSecurityThreshold(id: ID!): SecurityThreshold
    listSecurityThresholds(tenantId: String!, limit: Int): [SecurityThreshold!]!
  }

  extend type Mutation {
    createSecurityThreshold(tenantId: String!, code: String!, name: String!): SecurityThreshold!
    deleteSecurityThreshold(id: ID!): Boolean!
  }
`;

export const SecurityThresholdGqlResolvers = {
  Query: {
    getSecurityThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
