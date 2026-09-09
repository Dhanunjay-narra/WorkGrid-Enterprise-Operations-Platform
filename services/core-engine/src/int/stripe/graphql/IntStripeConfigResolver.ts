export const IntStripeConfigGqlTypeDefs = `
  type IntStripeConfig {
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
    getIntStripeConfig(id: ID!): IntStripeConfig
    listIntStripeConfigs(tenantId: String!, limit: Int): [IntStripeConfig!]!
  }

  extend type Mutation {
    createIntStripeConfig(tenantId: String!, code: String!, name: String!): IntStripeConfig!
    deleteIntStripeConfig(id: ID!): Boolean!
  }
`;

export const IntStripeConfigGqlResolvers = {
  Query: {
    getIntStripeConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
