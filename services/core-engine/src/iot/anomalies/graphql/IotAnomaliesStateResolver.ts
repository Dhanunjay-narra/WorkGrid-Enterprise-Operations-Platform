export const IotAnomaliesStateGqlTypeDefs = `
  type IotAnomaliesState {
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
    getIotAnomaliesState(id: ID!): IotAnomaliesState
    listIotAnomaliesStates(tenantId: String!, limit: Int): [IotAnomaliesState!]!
  }

  extend type Mutation {
    createIotAnomaliesState(tenantId: String!, code: String!, name: String!): IotAnomaliesState!
    deleteIotAnomaliesState(id: ID!): Boolean!
  }
`;

export const IotAnomaliesStateGqlResolvers = {
  Query: {
    getIotAnomaliesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
