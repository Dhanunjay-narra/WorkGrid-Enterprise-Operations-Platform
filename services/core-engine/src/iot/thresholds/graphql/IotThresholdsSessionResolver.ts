export const IotThresholdsSessionGqlTypeDefs = `
  type IotThresholdsSession {
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
    getIotThresholdsSession(id: ID!): IotThresholdsSession
    listIotThresholdsSessions(tenantId: String!, limit: Int): [IotThresholdsSession!]!
  }

  extend type Mutation {
    createIotThresholdsSession(tenantId: String!, code: String!, name: String!): IotThresholdsSession!
    deleteIotThresholdsSession(id: ID!): Boolean!
  }
`;

export const IotThresholdsSessionGqlResolvers = {
  Query: {
    getIotThresholdsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
