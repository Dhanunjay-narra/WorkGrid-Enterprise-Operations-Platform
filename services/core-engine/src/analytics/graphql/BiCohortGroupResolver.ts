export const BiCohortGroupTypeDefs = `
  type BiCohortGroup {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiCohortGroup(id: ID!): BiCohortGroup
    listBiCohortGroups(tenantId: String!): [BiCohortGroup!]!
  }
`;

export const BiCohortGroupResolvers = {
  Query: {
    getBiCohortGroup: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiCohortGroup", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiCohortGroups: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiCohortGroup", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
