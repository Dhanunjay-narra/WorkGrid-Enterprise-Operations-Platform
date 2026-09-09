export const IotAnomaliesSessionGqlTypeDefs = `
  type IotAnomaliesSession {
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
    getIotAnomaliesSession(id: ID!): IotAnomaliesSession
    listIotAnomaliesSessions(tenantId: String!, limit: Int): [IotAnomaliesSession!]!
  }

  extend type Mutation {
    createIotAnomaliesSession(tenantId: String!, code: String!, name: String!): IotAnomaliesSession!
    deleteIotAnomaliesSession(id: ID!): Boolean!
  }
`;

export const IotAnomaliesSessionGqlResolvers = {
  Query: {
    getIotAnomaliesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
