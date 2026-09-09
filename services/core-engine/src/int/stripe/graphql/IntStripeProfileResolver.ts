export const IntStripeProfileGqlTypeDefs = `
  type IntStripeProfile {
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
    getIntStripeProfile(id: ID!): IntStripeProfile
    listIntStripeProfiles(tenantId: String!, limit: Int): [IntStripeProfile!]!
  }

  extend type Mutation {
    createIntStripeProfile(tenantId: String!, code: String!, name: String!): IntStripeProfile!
    deleteIntStripeProfile(id: ID!): Boolean!
  }
`;

export const IntStripeProfileGqlResolvers = {
  Query: {
    getIntStripeProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
