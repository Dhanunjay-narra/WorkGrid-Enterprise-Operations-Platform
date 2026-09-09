export const IotThresholdsPolicyGqlTypeDefs = `
  type IotThresholdsPolicy {
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
    getIotThresholdsPolicy(id: ID!): IotThresholdsPolicy
    listIotThresholdsPolicys(tenantId: String!, limit: Int): [IotThresholdsPolicy!]!
  }

  extend type Mutation {
    createIotThresholdsPolicy(tenantId: String!, code: String!, name: String!): IotThresholdsPolicy!
    deleteIotThresholdsPolicy(id: ID!): Boolean!
  }
`;

export const IotThresholdsPolicyGqlResolvers = {
  Query: {
    getIotThresholdsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
