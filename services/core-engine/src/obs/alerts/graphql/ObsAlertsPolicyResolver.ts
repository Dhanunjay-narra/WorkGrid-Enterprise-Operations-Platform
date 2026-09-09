export const ObsAlertsPolicyGqlTypeDefs = `
  type ObsAlertsPolicy {
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
    getObsAlertsPolicy(id: ID!): ObsAlertsPolicy
    listObsAlertsPolicys(tenantId: String!, limit: Int): [ObsAlertsPolicy!]!
  }

  extend type Mutation {
    createObsAlertsPolicy(tenantId: String!, code: String!, name: String!): ObsAlertsPolicy!
    deleteObsAlertsPolicy(id: ID!): Boolean!
  }
`;

export const ObsAlertsPolicyGqlResolvers = {
  Query: {
    getObsAlertsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
