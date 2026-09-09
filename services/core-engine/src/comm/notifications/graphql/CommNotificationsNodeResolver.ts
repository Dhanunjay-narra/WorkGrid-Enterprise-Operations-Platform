export const CommNotificationsNodeGqlTypeDefs = `
  type CommNotificationsNode {
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
    getCommNotificationsNode(id: ID!): CommNotificationsNode
    listCommNotificationsNodes(tenantId: String!, limit: Int): [CommNotificationsNode!]!
  }

  extend type Mutation {
    createCommNotificationsNode(tenantId: String!, code: String!, name: String!): CommNotificationsNode!
    deleteCommNotificationsNode(id: ID!): Boolean!
  }
`;

export const CommNotificationsNodeGqlResolvers = {
  Query: {
    getCommNotificationsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
