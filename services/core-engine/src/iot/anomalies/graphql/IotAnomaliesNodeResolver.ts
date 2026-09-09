export const IotAnomaliesNodeGqlTypeDefs = `
  type IotAnomaliesNode {
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
    getIotAnomaliesNode(id: ID!): IotAnomaliesNode
    listIotAnomaliesNodes(tenantId: String!, limit: Int): [IotAnomaliesNode!]!
  }

  extend type Mutation {
    createIotAnomaliesNode(tenantId: String!, code: String!, name: String!): IotAnomaliesNode!
    deleteIotAnomaliesNode(id: ID!): Boolean!
  }
`;

export const IotAnomaliesNodeGqlResolvers = {
  Query: {
    getIotAnomaliesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
