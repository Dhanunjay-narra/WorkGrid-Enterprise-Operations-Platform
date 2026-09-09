export const HrShiftsBatchGqlTypeDefs = `
  type HrShiftsBatch {
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
    getHrShiftsBatch(id: ID!): HrShiftsBatch
    listHrShiftsBatchs(tenantId: String!, limit: Int): [HrShiftsBatch!]!
  }

  extend type Mutation {
    createHrShiftsBatch(tenantId: String!, code: String!, name: String!): HrShiftsBatch!
    deleteHrShiftsBatch(id: ID!): Boolean!
  }
`;

export const HrShiftsBatchGqlResolvers = {
  Query: {
    getHrShiftsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
