export const HrDepartmentsThresholdGqlTypeDefs = `
  type HrDepartmentsThreshold {
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
    getHrDepartmentsThreshold(id: ID!): HrDepartmentsThreshold
    listHrDepartmentsThresholds(tenantId: String!, limit: Int): [HrDepartmentsThreshold!]!
  }

  extend type Mutation {
    createHrDepartmentsThreshold(tenantId: String!, code: String!, name: String!): HrDepartmentsThreshold!
    deleteHrDepartmentsThreshold(id: ID!): Boolean!
  }
`;

export const HrDepartmentsThresholdGqlResolvers = {
  Query: {
    getHrDepartmentsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
