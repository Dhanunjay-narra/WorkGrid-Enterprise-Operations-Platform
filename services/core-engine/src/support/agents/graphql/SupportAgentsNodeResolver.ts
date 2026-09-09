export const SupportAgentsNodeGqlTypeDefs = `
  type SupportAgentsNode {
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
    getSupportAgentsNode(id: ID!): SupportAgentsNode
    listSupportAgentsNodes(tenantId: String!, limit: Int): [SupportAgentsNode!]!
  }

  extend type Mutation {
    createSupportAgentsNode(tenantId: String!, code: String!, name: String!): SupportAgentsNode!
    deleteSupportAgentsNode(id: ID!): Boolean!
  }
`;

export const SupportAgentsNodeGqlResolvers = {
  Query: {
    getSupportAgentsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
