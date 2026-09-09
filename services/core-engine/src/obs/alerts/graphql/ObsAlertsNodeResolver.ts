export const ObsAlertsNodeGqlTypeDefs = `
  type ObsAlertsNode {
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
    getObsAlertsNode(id: ID!): ObsAlertsNode
    listObsAlertsNodes(tenantId: String!, limit: Int): [ObsAlertsNode!]!
  }

  extend type Mutation {
    createObsAlertsNode(tenantId: String!, code: String!, name: String!): ObsAlertsNode!
    deleteObsAlertsNode(id: ID!): Boolean!
  }
`;

export const ObsAlertsNodeGqlResolvers = {
  Query: {
    getObsAlertsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
