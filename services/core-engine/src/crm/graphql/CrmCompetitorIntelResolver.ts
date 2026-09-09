export const CrmCompetitorIntelTypeDefs = `
  type CrmCompetitorIntel {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmCompetitorIntel(id: ID!): CrmCompetitorIntel
    listCrmCompetitorIntels(tenantId: String!): [CrmCompetitorIntel!]!
  }
`;

export const CrmCompetitorIntelResolvers = {
  Query: {
    getCrmCompetitorIntel: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmCompetitorIntel", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmCompetitorIntels: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmCompetitorIntel", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
