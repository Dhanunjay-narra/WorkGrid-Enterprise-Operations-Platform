export const IotThresholdsStateGqlTypeDefs = `
  type IotThresholdsState {
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
    getIotThresholdsState(id: ID!): IotThresholdsState
    listIotThresholdsStates(tenantId: String!, limit: Int): [IotThresholdsState!]!
  }

  extend type Mutation {
    createIotThresholdsState(tenantId: String!, code: String!, name: String!): IotThresholdsState!
    deleteIotThresholdsState(id: ID!): Boolean!
  }
`;

export const IotThresholdsStateGqlResolvers = {
  Query: {
    getIotThresholdsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
