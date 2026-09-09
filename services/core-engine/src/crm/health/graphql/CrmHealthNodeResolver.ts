export const CrmHealthNodeGqlTypeDefs = `
  type CrmHealthNode {
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
    getCrmHealthNode(id: ID!): CrmHealthNode
    listCrmHealthNodes(tenantId: String!, limit: Int): [CrmHealthNode!]!
  }

  extend type Mutation {
    createCrmHealthNode(tenantId: String!, code: String!, name: String!): CrmHealthNode!
    deleteCrmHealthNode(id: ID!): Boolean!
  }
`;

export const CrmHealthNodeGqlResolvers = {
  Query: {
    getCrmHealthNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmHealthNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
