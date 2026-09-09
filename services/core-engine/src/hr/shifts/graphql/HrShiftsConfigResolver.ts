export const HrShiftsConfigGqlTypeDefs = `
  type HrShiftsConfig {
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
    getHrShiftsConfig(id: ID!): HrShiftsConfig
    listHrShiftsConfigs(tenantId: String!, limit: Int): [HrShiftsConfig!]!
  }

  extend type Mutation {
    createHrShiftsConfig(tenantId: String!, code: String!, name: String!): HrShiftsConfig!
    deleteHrShiftsConfig(id: ID!): Boolean!
  }
`;

export const HrShiftsConfigGqlResolvers = {
  Query: {
    getHrShiftsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
