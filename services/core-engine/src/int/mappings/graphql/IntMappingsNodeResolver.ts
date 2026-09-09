export const IntMappingsNodeGqlTypeDefs = `
  type IntMappingsNode {
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
    getIntMappingsNode(id: ID!): IntMappingsNode
    listIntMappingsNodes(tenantId: String!, limit: Int): [IntMappingsNode!]!
  }

  extend type Mutation {
    createIntMappingsNode(tenantId: String!, code: String!, name: String!): IntMappingsNode!
    deleteIntMappingsNode(id: ID!): Boolean!
  }
`;

export const IntMappingsNodeGqlResolvers = {
  Query: {
    getIntMappingsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
