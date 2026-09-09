export const PrjSprintRetrospectiveTypeDefs = `
  type PrjSprintRetrospective {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjSprintRetrospective(id: ID!): PrjSprintRetrospective
    listPrjSprintRetrospectives(tenantId: String!): [PrjSprintRetrospective!]!
  }
`;

export const PrjSprintRetrospectiveResolvers = {
  Query: {
    getPrjSprintRetrospective: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjSprintRetrospective", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjSprintRetrospectives: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjSprintRetrospective", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
