export const ObsProbesPolicyGqlTypeDefs = `
  type ObsProbesPolicy {
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
    getObsProbesPolicy(id: ID!): ObsProbesPolicy
    listObsProbesPolicys(tenantId: String!, limit: Int): [ObsProbesPolicy!]!
  }

  extend type Mutation {
    createObsProbesPolicy(tenantId: String!, code: String!, name: String!): ObsProbesPolicy!
    deleteObsProbesPolicy(id: ID!): Boolean!
  }
`;

export const ObsProbesPolicyGqlResolvers = {
  Query: {
    getObsProbesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
