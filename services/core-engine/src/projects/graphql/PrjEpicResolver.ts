export const PrjEpicTypeDefs = `
  type PrjEpic {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjEpic(id: ID!): PrjEpic
    listPrjEpics(tenantId: String!): [PrjEpic!]!
  }
`;

export const PrjEpicResolvers = {
  Query: {
    getPrjEpic: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjEpic", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjEpics: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjEpic", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
