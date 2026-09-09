export const IotCommandsThresholdGqlTypeDefs = `
  type IotCommandsThreshold {
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
    getIotCommandsThreshold(id: ID!): IotCommandsThreshold
    listIotCommandsThresholds(tenantId: String!, limit: Int): [IotCommandsThreshold!]!
  }

  extend type Mutation {
    createIotCommandsThreshold(tenantId: String!, code: String!, name: String!): IotCommandsThreshold!
    deleteIotCommandsThreshold(id: ID!): Boolean!
  }
`;

export const IotCommandsThresholdGqlResolvers = {
  Query: {
    getIotCommandsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
