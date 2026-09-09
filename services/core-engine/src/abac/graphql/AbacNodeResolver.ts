export const AbacNodeGqlTypeDefs = `
  type AbacNode {
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
    getAbacNode(id: ID!): AbacNode
    listAbacNodes(tenantId: String!, limit: Int): [AbacNode!]!
  }

  extend type Mutation {
    createAbacNode(tenantId: String!, code: String!, name: String!): AbacNode!
    deleteAbacNode(id: ID!): Boolean!
  }
`;

export const AbacNodeGqlResolvers = {
  Query: {
    getAbacNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
