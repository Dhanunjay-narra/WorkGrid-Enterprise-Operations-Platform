export const CommPresenceNodeGqlTypeDefs = `
  type CommPresenceNode {
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
    getCommPresenceNode(id: ID!): CommPresenceNode
    listCommPresenceNodes(tenantId: String!, limit: Int): [CommPresenceNode!]!
  }

  extend type Mutation {
    createCommPresenceNode(tenantId: String!, code: String!, name: String!): CommPresenceNode!
    deleteCommPresenceNode(id: ID!): Boolean!
  }
`;

export const CommPresenceNodeGqlResolvers = {
  Query: {
    getCommPresenceNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
