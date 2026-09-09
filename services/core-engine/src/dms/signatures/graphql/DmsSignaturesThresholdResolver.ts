export const DmsSignaturesThresholdGqlTypeDefs = `
  type DmsSignaturesThreshold {
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
    getDmsSignaturesThreshold(id: ID!): DmsSignaturesThreshold
    listDmsSignaturesThresholds(tenantId: String!, limit: Int): [DmsSignaturesThreshold!]!
  }

  extend type Mutation {
    createDmsSignaturesThreshold(tenantId: String!, code: String!, name: String!): DmsSignaturesThreshold!
    deleteDmsSignaturesThreshold(id: ID!): Boolean!
  }
`;

export const DmsSignaturesThresholdGqlResolvers = {
  Query: {
    getDmsSignaturesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
