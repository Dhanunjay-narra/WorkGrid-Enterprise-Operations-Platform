export const CrmForecastingNodeGqlTypeDefs = `
  type CrmForecastingNode {
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
    getCrmForecastingNode(id: ID!): CrmForecastingNode
    listCrmForecastingNodes(tenantId: String!, limit: Int): [CrmForecastingNode!]!
  }

  extend type Mutation {
    createCrmForecastingNode(tenantId: String!, code: String!, name: String!): CrmForecastingNode!
    deleteCrmForecastingNode(id: ID!): Boolean!
  }
`;

export const CrmForecastingNodeGqlResolvers = {
  Query: {
    getCrmForecastingNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
