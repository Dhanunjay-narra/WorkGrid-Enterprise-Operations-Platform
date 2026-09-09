export const IotFleetPolicyGqlTypeDefs = `
  type IotFleetPolicy {
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
    getIotFleetPolicy(id: ID!): IotFleetPolicy
    listIotFleetPolicys(tenantId: String!, limit: Int): [IotFleetPolicy!]!
  }

  extend type Mutation {
    createIotFleetPolicy(tenantId: String!, code: String!, name: String!): IotFleetPolicy!
    deleteIotFleetPolicy(id: ID!): Boolean!
  }
`;

export const IotFleetPolicyGqlResolvers = {
  Query: {
    getIotFleetPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
