export const IntWebhooksProfileGqlTypeDefs = `
  type IntWebhooksProfile {
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
    getIntWebhooksProfile(id: ID!): IntWebhooksProfile
    listIntWebhooksProfiles(tenantId: String!, limit: Int): [IntWebhooksProfile!]!
  }

  extend type Mutation {
    createIntWebhooksProfile(tenantId: String!, code: String!, name: String!): IntWebhooksProfile!
    deleteIntWebhooksProfile(id: ID!): Boolean!
  }
`;

export const IntWebhooksProfileGqlResolvers = {
  Query: {
    getIntWebhooksProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
