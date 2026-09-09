export const CommWebhooksProfileGqlTypeDefs = `
  type CommWebhooksProfile {
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
    getCommWebhooksProfile(id: ID!): CommWebhooksProfile
    listCommWebhooksProfiles(tenantId: String!, limit: Int): [CommWebhooksProfile!]!
  }

  extend type Mutation {
    createCommWebhooksProfile(tenantId: String!, code: String!, name: String!): CommWebhooksProfile!
    deleteCommWebhooksProfile(id: ID!): Boolean!
  }
`;

export const CommWebhooksProfileGqlResolvers = {
  Query: {
    getCommWebhooksProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
