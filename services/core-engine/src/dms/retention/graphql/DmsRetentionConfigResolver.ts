export const DmsRetentionConfigGqlTypeDefs = `
  type DmsRetentionConfig {
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
    getDmsRetentionConfig(id: ID!): DmsRetentionConfig
    listDmsRetentionConfigs(tenantId: String!, limit: Int): [DmsRetentionConfig!]!
  }

  extend type Mutation {
    createDmsRetentionConfig(tenantId: String!, code: String!, name: String!): DmsRetentionConfig!
    deleteDmsRetentionConfig(id: ID!): Boolean!
  }
`;

export const DmsRetentionConfigGqlResolvers = {
  Query: {
    getDmsRetentionConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
