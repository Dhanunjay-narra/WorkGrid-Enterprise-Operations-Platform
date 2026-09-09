export const SupportQueuesProfileGqlTypeDefs = `
  type SupportQueuesProfile {
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
    getSupportQueuesProfile(id: ID!): SupportQueuesProfile
    listSupportQueuesProfiles(tenantId: String!, limit: Int): [SupportQueuesProfile!]!
  }

  extend type Mutation {
    createSupportQueuesProfile(tenantId: String!, code: String!, name: String!): SupportQueuesProfile!
    deleteSupportQueuesProfile(id: ID!): Boolean!
  }
`;

export const SupportQueuesProfileGqlResolvers = {
  Query: {
    getSupportQueuesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
