export const HrAttendanceConfigGqlTypeDefs = `
  type HrAttendanceConfig {
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
    getHrAttendanceConfig(id: ID!): HrAttendanceConfig
    listHrAttendanceConfigs(tenantId: String!, limit: Int): [HrAttendanceConfig!]!
  }

  extend type Mutation {
    createHrAttendanceConfig(tenantId: String!, code: String!, name: String!): HrAttendanceConfig!
    deleteHrAttendanceConfig(id: ID!): Boolean!
  }
`;

export const HrAttendanceConfigGqlResolvers = {
  Query: {
    getHrAttendanceConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
