export const DmsOcrThresholdGqlTypeDefs = `
  type DmsOcrThreshold {
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
    getDmsOcrThreshold(id: ID!): DmsOcrThreshold
    listDmsOcrThresholds(tenantId: String!, limit: Int): [DmsOcrThreshold!]!
  }

  extend type Mutation {
    createDmsOcrThreshold(tenantId: String!, code: String!, name: String!): DmsOcrThreshold!
    deleteDmsOcrThreshold(id: ID!): Boolean!
  }
`;

export const DmsOcrThresholdGqlResolvers = {
  Query: {
    getDmsOcrThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
