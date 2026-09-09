export const ObsLoggingPolicyGqlTypeDefs = `
  type ObsLoggingPolicy {
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
    getObsLoggingPolicy(id: ID!): ObsLoggingPolicy
    listObsLoggingPolicys(tenantId: String!, limit: Int): [ObsLoggingPolicy!]!
  }

  extend type Mutation {
    createObsLoggingPolicy(tenantId: String!, code: String!, name: String!): ObsLoggingPolicy!
    deleteObsLoggingPolicy(id: ID!): Boolean!
  }
`;

export const ObsLoggingPolicyGqlResolvers = {
  Query: {
    getObsLoggingPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
