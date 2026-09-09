export const DmsVersionsThresholdGqlTypeDefs = `
  type DmsVersionsThreshold {
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
    getDmsVersionsThreshold(id: ID!): DmsVersionsThreshold
    listDmsVersionsThresholds(tenantId: String!, limit: Int): [DmsVersionsThreshold!]!
  }

  extend type Mutation {
    createDmsVersionsThreshold(tenantId: String!, code: String!, name: String!): DmsVersionsThreshold!
    deleteDmsVersionsThreshold(id: ID!): Boolean!
  }
`;

export const DmsVersionsThresholdGqlResolvers = {
  Query: {
    getDmsVersionsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
