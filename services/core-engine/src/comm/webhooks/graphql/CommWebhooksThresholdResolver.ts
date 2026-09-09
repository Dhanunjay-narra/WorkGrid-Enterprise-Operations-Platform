export const CommWebhooksThresholdGqlTypeDefs = `
  type CommWebhooksThreshold {
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
    getCommWebhooksThreshold(id: ID!): CommWebhooksThreshold
    listCommWebhooksThresholds(tenantId: String!, limit: Int): [CommWebhooksThreshold!]!
  }

  extend type Mutation {
    createCommWebhooksThreshold(tenantId: String!, code: String!, name: String!): CommWebhooksThreshold!
    deleteCommWebhooksThreshold(id: ID!): Boolean!
  }
`;

export const CommWebhooksThresholdGqlResolvers = {
  Query: {
    getCommWebhooksThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
