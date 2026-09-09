export const DmsRetentionThresholdGqlTypeDefs = `
  type DmsRetentionThreshold {
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
    getDmsRetentionThreshold(id: ID!): DmsRetentionThreshold
    listDmsRetentionThresholds(tenantId: String!, limit: Int): [DmsRetentionThreshold!]!
  }

  extend type Mutation {
    createDmsRetentionThreshold(tenantId: String!, code: String!, name: String!): DmsRetentionThreshold!
    deleteDmsRetentionThreshold(id: ID!): Boolean!
  }
`;

export const DmsRetentionThresholdGqlResolvers = {
  Query: {
    getDmsRetentionThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
