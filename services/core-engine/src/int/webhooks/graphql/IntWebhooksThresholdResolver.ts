export const IntWebhooksThresholdGqlTypeDefs = `
  type IntWebhooksThreshold {
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
    getIntWebhooksThreshold(id: ID!): IntWebhooksThreshold
    listIntWebhooksThresholds(tenantId: String!, limit: Int): [IntWebhooksThreshold!]!
  }

  extend type Mutation {
    createIntWebhooksThreshold(tenantId: String!, code: String!, name: String!): IntWebhooksThreshold!
    deleteIntWebhooksThreshold(id: ID!): Boolean!
  }
`;

export const IntWebhooksThresholdGqlResolvers = {
  Query: {
    getIntWebhooksThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
