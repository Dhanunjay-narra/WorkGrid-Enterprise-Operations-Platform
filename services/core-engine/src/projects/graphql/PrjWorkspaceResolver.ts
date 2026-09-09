export const PrjWorkspaceTypeDefs = `
  type PrjWorkspace {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjWorkspace(id: ID!): PrjWorkspace
    listPrjWorkspaces(tenantId: String!): [PrjWorkspace!]!
  }
`;

export const PrjWorkspaceResolvers = {
  Query: {
    getPrjWorkspace: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjWorkspace", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjWorkspaces: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjWorkspace", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
