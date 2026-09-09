export const PrjWorkloadCapacityTypeDefs = `
  type PrjWorkloadCapacity {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjWorkloadCapacity(id: ID!): PrjWorkloadCapacity
    listPrjWorkloadCapacitys(tenantId: String!): [PrjWorkloadCapacity!]!
  }
`;

export const PrjWorkloadCapacityResolvers = {
  Query: {
    getPrjWorkloadCapacity: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjWorkloadCapacity", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjWorkloadCapacitys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjWorkloadCapacity", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
