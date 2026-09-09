export const DmsRetentionPolicyGqlTypeDefs = `
  type DmsRetentionPolicy {
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
    getDmsRetentionPolicy(id: ID!): DmsRetentionPolicy
    listDmsRetentionPolicys(tenantId: String!, limit: Int): [DmsRetentionPolicy!]!
  }

  extend type Mutation {
    createDmsRetentionPolicy(tenantId: String!, code: String!, name: String!): DmsRetentionPolicy!
    deleteDmsRetentionPolicy(id: ID!): Boolean!
  }
`;

export const DmsRetentionPolicyGqlResolvers = {
  Query: {
    getDmsRetentionPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
