export const HrLeaveBatchGqlTypeDefs = `
  type HrLeaveBatch {
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
    getHrLeaveBatch(id: ID!): HrLeaveBatch
    listHrLeaveBatchs(tenantId: String!, limit: Int): [HrLeaveBatch!]!
  }

  extend type Mutation {
    createHrLeaveBatch(tenantId: String!, code: String!, name: String!): HrLeaveBatch!
    deleteHrLeaveBatch(id: ID!): Boolean!
  }
`;

export const HrLeaveBatchGqlResolvers = {
  Query: {
    getHrLeaveBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
