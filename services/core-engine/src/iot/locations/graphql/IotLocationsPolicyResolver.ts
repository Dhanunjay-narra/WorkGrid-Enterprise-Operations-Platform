export const IotLocationsPolicyGqlTypeDefs = `
  type IotLocationsPolicy {
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
    getIotLocationsPolicy(id: ID!): IotLocationsPolicy
    listIotLocationsPolicys(tenantId: String!, limit: Int): [IotLocationsPolicy!]!
  }

  extend type Mutation {
    createIotLocationsPolicy(tenantId: String!, code: String!, name: String!): IotLocationsPolicy!
    deleteIotLocationsPolicy(id: ID!): Boolean!
  }
`;

export const IotLocationsPolicyGqlResolvers = {
  Query: {
    getIotLocationsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
