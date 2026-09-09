export const IotThresholdsThresholdGqlTypeDefs = `
  type IotThresholdsThreshold {
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
    getIotThresholdsThreshold(id: ID!): IotThresholdsThreshold
    listIotThresholdsThresholds(tenantId: String!, limit: Int): [IotThresholdsThreshold!]!
  }

  extend type Mutation {
    createIotThresholdsThreshold(tenantId: String!, code: String!, name: String!): IotThresholdsThreshold!
    deleteIotThresholdsThreshold(id: ID!): Boolean!
  }
`;

export const IotThresholdsThresholdGqlResolvers = {
  Query: {
    getIotThresholdsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
