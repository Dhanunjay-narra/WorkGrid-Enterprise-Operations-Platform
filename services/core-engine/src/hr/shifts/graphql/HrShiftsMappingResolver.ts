export const HrShiftsMappingGqlTypeDefs = `
  type HrShiftsMapping {
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
    getHrShiftsMapping(id: ID!): HrShiftsMapping
    listHrShiftsMappings(tenantId: String!, limit: Int): [HrShiftsMapping!]!
  }

  extend type Mutation {
    createHrShiftsMapping(tenantId: String!, code: String!, name: String!): HrShiftsMapping!
    deleteHrShiftsMapping(id: ID!): Boolean!
  }
`;

export const HrShiftsMappingGqlResolvers = {
  Query: {
    getHrShiftsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
