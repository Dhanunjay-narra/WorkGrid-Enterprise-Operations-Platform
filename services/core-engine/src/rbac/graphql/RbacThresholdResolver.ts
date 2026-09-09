export const RbacThresholdGqlTypeDefs = `
  type RbacThreshold {
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
    getRbacThreshold(id: ID!): RbacThreshold
    listRbacThresholds(tenantId: String!, limit: Int): [RbacThreshold!]!
  }

  extend type Mutation {
    createRbacThreshold(tenantId: String!, code: String!, name: String!): RbacThreshold!
    deleteRbacThreshold(id: ID!): Boolean!
  }
`;

export const RbacThresholdGqlResolvers = {
  Query: {
    getRbacThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
