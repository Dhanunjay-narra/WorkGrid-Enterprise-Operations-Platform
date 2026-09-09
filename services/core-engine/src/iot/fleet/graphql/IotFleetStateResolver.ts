export const IotFleetStateGqlTypeDefs = `
  type IotFleetState {
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
    getIotFleetState(id: ID!): IotFleetState
    listIotFleetStates(tenantId: String!, limit: Int): [IotFleetState!]!
  }

  extend type Mutation {
    createIotFleetState(tenantId: String!, code: String!, name: String!): IotFleetState!
    deleteIotFleetState(id: ID!): Boolean!
  }
`;

export const IotFleetStateGqlResolvers = {
  Query: {
    getIotFleetState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
