export const HrLeaveConfigGqlTypeDefs = `
  type HrLeaveConfig {
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
    getHrLeaveConfig(id: ID!): HrLeaveConfig
    listHrLeaveConfigs(tenantId: String!, limit: Int): [HrLeaveConfig!]!
  }

  extend type Mutation {
    createHrLeaveConfig(tenantId: String!, code: String!, name: String!): HrLeaveConfig!
    deleteHrLeaveConfig(id: ID!): Boolean!
  }
`;

export const HrLeaveConfigGqlResolvers = {
  Query: {
    getHrLeaveConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
