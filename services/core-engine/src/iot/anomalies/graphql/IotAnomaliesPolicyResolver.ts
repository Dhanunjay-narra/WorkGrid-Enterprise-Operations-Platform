export const IotAnomaliesPolicyGqlTypeDefs = `
  type IotAnomaliesPolicy {
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
    getIotAnomaliesPolicy(id: ID!): IotAnomaliesPolicy
    listIotAnomaliesPolicys(tenantId: String!, limit: Int): [IotAnomaliesPolicy!]!
  }

  extend type Mutation {
    createIotAnomaliesPolicy(tenantId: String!, code: String!, name: String!): IotAnomaliesPolicy!
    deleteIotAnomaliesPolicy(id: ID!): Boolean!
  }
`;

export const IotAnomaliesPolicyGqlResolvers = {
  Query: {
    getIotAnomaliesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
