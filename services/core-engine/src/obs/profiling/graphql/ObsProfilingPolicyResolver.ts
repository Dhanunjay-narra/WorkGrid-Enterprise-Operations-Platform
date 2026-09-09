export const ObsProfilingPolicyGqlTypeDefs = `
  type ObsProfilingPolicy {
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
    getObsProfilingPolicy(id: ID!): ObsProfilingPolicy
    listObsProfilingPolicys(tenantId: String!, limit: Int): [ObsProfilingPolicy!]!
  }

  extend type Mutation {
    createObsProfilingPolicy(tenantId: String!, code: String!, name: String!): ObsProfilingPolicy!
    deleteObsProfilingPolicy(id: ID!): Boolean!
  }
`;

export const ObsProfilingPolicyGqlResolvers = {
  Query: {
    getObsProfilingPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
